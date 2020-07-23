<template>
    <div class="mx-step">
        <div class="mx-step__line">
            <div :class="['mx-step__line-status', isFinish ? `mx-step__line-status-${getCurrStatus}` : '']"></div>
        </div>
        <div class="mx-step__icon">
            <div :class="['mx-step__icon-inner', `mx-step__icon-inner-${getCurrStatus}`]">
                <mx-icon name="ios-checkmark" size="16" v-if="getCurrStatus === 'finish'"></mx-icon>
                <mx-icon name="ios-close" size="16" v-else-if="getCurrStatus === 'error'"></mx-icon>
                <span v-else>{{ index }}</span>
            </div>
        </div>
        <div class="mx-step__main">
            <div :class="['mx-step__main-title', `mx-step__main-title-${getCurrStatus}`]">
                <slot>{{ title }}</slot>
            </div>
            <div class="mx-step__main-desc">
                <slot>{{ description }}</slot>
            </div>
        </div>
    </div>
</template>

<script>
import { findComponentUpward } from "@/utils/findComponent.js";
export default {
    name: "mxStep",
    props: {
        title: String,
        status: {
            type: String,
            validator(val) {
                const types = ["wait", "process", "finish", "error", "success"];
                return types.includes(val);
            },
        },
        description: String,
    },
    data() {
        return {
            index: 0,
            state: "wait",
        };
    },
    methods: {
        updateIndex(index) {
            this.index = index;
        },
    },
    computed: {
        getCurrIndex() {
            const parent = findComponentUpward(this, "mxSteps");
            let active = 0;
            if (parent) {
                active = parent.active;
            }
            return active;
        },
        getCurrStatus() {
            const parent = findComponentUpward(this, "mxSteps");
            let state = "wait";
            if (this.getCurrIndex > this.index) {
                state = parent.finishStatus;
            } else if (this.getCurrIndex === this.index) {
                state = this.status || parent.status;
            } else {
                state = "wait";
            }
            return state;
        },
        isFinish() {
            const flag = this.getCurrIndex > this.index;
            return flag;
        },
    },
};
</script>
<style lang="scss">
@import "@/styles/common/var.scss";
.mx-step {
    display: inline-block;
    position: relative;
    vertical-align: top;
    flex: 1;
    overflow: hidden;
    &:last-child {
        flex: none;
        .mx-step__line {
            display: none;
        }
    }
    &__line {
        width: 100%;
        padding: 0 10px;
        position: absolute;
        left: 0;
        top: 13px;
        &-status {
            display: inline-block;
            width: 100%;
            height: 1px;
            vertical-align: top;
            background: #e8eaec;
            border-radius: 1px;
            position: relative;
        }
    }
    &__icon {
        display: inline-block;
        margin-left: -10px;
        padding-left: 10px;
        position: relative;
        vertical-align: top;
        background-color: #fff;
        &-inner {
            display: inline-block;
            width: 26px;
            height: 26px;
            line-height: 24px;
            margin-right: 8px;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 50%;
            font-size: 14px;
            transition: background-color 0.2s ease-in-out;
            &-process {
                border-color: $mx--color-primary;
                background-color: $mx--color-primary;
                color: $mx--color-white;
            }
            &-finish {
                border-color: $mx--color-primary;
                color: $mx--color-primary;
            }
            &-success {
                border-color: $mx--color-success;
                color: $mx--color-success;
            }
            &-error {
                border-color: $mx--color-danger;
                color: $mx--color-danger;
            }
        }
    }
    &__main {
        display: inline;
        background-color: #fff;
        vertical-align: top;
        position: relative;
        &-title {
            display: inline-block;
            margin-bottom: 4px;
            padding-right: 10px;
            font-size: 14px;
            font-weight: 700;
            color: #999;
            background-color: #fff;
            &-process {
                color: $mx--color-text-regular;
            }
            &-finish {
                color: $mx--color-primary;
            }
            &-success {
                color: $mx--color-success;
            }
            &-error {
                color: $mx--color-danger;
            }
        }
        &-desc {
            padding-left: 35px;
            color: #999;
            font-size: 12px;
        }
    }
}
.mx-steps-horizontal {
    .mx-step__line {
        box-sizing: border-box;
        display: inline-block;
        width: 100%;
        padding: 0 10px;
        position: absolute;
        left: 0;
        top: 13px;
        height: 1px;
        &-status {
            display: inline-block;
            width: 100%;
            height: 1px;
            vertical-align: top;
            background: #e8eaec;
            border-radius: 1px;
            position: relative;
            &::after {
                content: "";
                width: 0;
                height: 100%;
                background: #e8eaec;
                opacity: 0;
                position: absolute;
                top: 0;
            }
            &-wait,
            &-process {
                &::after {
                    width: 100%;
                    transition: all 0.2s ease-in-out;
                    opacity: 1;
                    background-color: #e8eaec;
                }
            }
            &-finish {
                &::after {
                    width: 100%;
                    transition: all 0.2s ease-in-out;
                    opacity: 1;
                    background-color: $mx--color-primary;
                }
            }
            &-success {
                &::after {
                    width: 100%;
                    transition: all 0.2s ease-in-out;
                    opacity: 1;
                    background-color: $mx--color-success;
                }
            }
            &-error {
                &::after {
                    width: 100%;
                    transition: all 0.2s ease-in-out;
                    opacity: 1;
                    background-color: $mx--color-danger;
                }
            }
        }
    }
}
.mx-steps-vertical {
    .mx-step {
        display: block;
        overflow: visible;
        &__line {
            position: absolute;
            left: 13px;
            top: 0;
            height: 100%;
            width: 1px;
            padding: 30px 0 4px;
            &-status {
                height: 100%;
                width: 1px;
                &::after {
                    content: "";
                    width: 0;
                    height: 100%;
                    background-color: #e8eaec;
                    opacity: 0;
                    position: absolute;
                    top: 0;
                }
                &-wait,
                &-process {
                    &::after {
                        width: 100%;
                        transition: all 0.2s ease-in-out;
                        opacity: 1;
                        background-color: #e8eaec;
                    }
                }
                &-finish {
                    &::after {
                        width: 100%;
                        transition: all 0.2s ease-in-out;
                        opacity: 1;
                        background-color: $mx--color-primary;
                    }
                }
                &-success {
                    &::after {
                        width: 100%;
                        transition: all 0.2s ease-in-out;
                        opacity: 1;
                        background-color: $mx--color-success;
                    }
                }
                &-error {
                    &::after {
                        width: 100%;
                        transition: all 0.2s ease-in-out;
                        opacity: 1;
                        background-color: $mx--color-danger;
                    }
                }
            }
        }
        &__main {
            &-desc {
                margin-bottom: 14px;
            }
        }
    }
}
</style>

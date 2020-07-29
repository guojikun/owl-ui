<template>
    <div class="fox-step">
        <div class="fox-step__line">
            <div :class="['fox-step__line-status', isFinish ? `fox-step__line-status-${getCurrStatus}` : '']"></div>
        </div>
        <div class="fox-step__icon">
            <div :class="['fox-step__icon-inner', `fox-step__icon-inner-${getCurrStatus}`]">
                <fox-icon name="ios-checkmark" size="16" v-if="getCurrStatus === 'finish'"></fox-icon>
                <fox-icon name="ios-close" size="16" v-else-if="getCurrStatus === 'error'"></fox-icon>
                <span v-else>{{ index }}</span>
            </div>
        </div>
        <div class="fox-step__main">
            <div :class="['fox-step__main-title', `fox-step__main-title-${getCurrStatus}`]">
                <slot>{{ title }}</slot>
            </div>
            <div class="fox-step__main-desc">
                <slot>{{ description }}</slot>
            </div>
        </div>
    </div>
</template>

<script>
import { findComponentUpward } from "@/utils/findComponent.js";
export default {
    name: "Step",
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
            const parent = findComponentUpward(this, "Steps");
            let active = 0;
            if (parent) {
                active = parent.active;
            }
            return active;
        },
        getCurrStatus() {
            const parent = findComponentUpward(this, "Steps");
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
.fox-step {
    display: inline-block;
    position: relative;
    vertical-align: top;
    flex: 1;
    overflow: hidden;
    &:last-child {
        flex: none;
        .fox-step__line {
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
                border-color: $fox--color-primary;
                background-color: $fox--color-primary;
                color: $fox--color-white;
            }
            &-finish {
                border-color: $fox--color-primary;
                color: $fox--color-primary;
            }
            &-success {
                border-color: $fox--color-success;
                color: $fox--color-success;
            }
            &-error {
                border-color: $fox--color-danger;
                color: $fox--color-danger;
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
                color: $fox--color-text-regular;
            }
            &-finish {
                color: $fox--color-primary;
            }
            &-success {
                color: $fox--color-success;
            }
            &-error {
                color: $fox--color-danger;
            }
        }
        &-desc {
            padding-left: 35px;
            color: #999;
            font-size: 12px;
        }
    }
}
.fox-steps-horizontal {
    .fox-step__line {
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
                    background-color: $fox--color-primary;
                }
            }
            &-success {
                &::after {
                    width: 100%;
                    transition: all 0.2s ease-in-out;
                    opacity: 1;
                    background-color: $fox--color-success;
                }
            }
            &-error {
                &::after {
                    width: 100%;
                    transition: all 0.2s ease-in-out;
                    opacity: 1;
                    background-color: $fox--color-danger;
                }
            }
        }
    }
}
.fox-steps-vertical {
    .fox-step {
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
                        background-color: $fox--color-primary;
                    }
                }
                &-success {
                    &::after {
                        width: 100%;
                        transition: all 0.2s ease-in-out;
                        opacity: 1;
                        background-color: $fox--color-success;
                    }
                }
                &-error {
                    &::after {
                        width: 100%;
                        transition: all 0.2s ease-in-out;
                        opacity: 1;
                        background-color: $fox--color-danger;
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

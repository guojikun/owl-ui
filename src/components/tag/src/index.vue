<template>
    <transition :name="transfer">
        <span class="mx-tag" :class="['mx-tag--' + theme, `mx-tag--${theme}-${type}`, `mx-tag--${size}`]" @click="clicks">
            <slot></slot>
            <mx-icon class="mx-tag-close" name="ios-close" v-if="closable" @click="closed"> </mx-icon>
        </span>
    </transition>
</template>

<script>
import mxIcon from "../../icon/index.js";
export default {
    name: "mxTag",
    components: { mxIcon },
    props: {
        type: {
            type: String,
            default: "primary",
            validator(value) {
                return ["primary", "success", "warning", "danger", "info"].includes(value);
            },
        },
        size: {
            type: String,
            default: "default",
            validator(value) {
                const flag = ["default", "large", "small", "mini"].includes(value);
                return flag;
            },
        },
        closable: {
            type: Boolean,
            default: false,
        },
        disableTransitions: {
            type: Boolean,
            default: false,
        },
        theme: {
            type: String,
            default: "light",
            validator(value) {
                return ["light", "plain", "dark"].includes(value);
            },
        },
    },
    methods: {
        closed(event) {
            event.stopPropagation();
            this.$emit("close", event);
        },
        clicks(event) {
            event.stopPropagation();
            this.$emit("click", event);
        },
    },
    computed: {
        transfer() {
            return this.disableTransitions ? "" : "mx-zoom-in-center";
        },
    },
};
</script>
<style lang="scss">
@import "@/styles/common/var.scss";
.mx-tag {
    display: inline-block;
    padding: 0 10px;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
    border-radius: 4px;
    box-sizing: border-box;
    white-space: nowrap;
    border: 1px solid transparent;
    & + & {
        margin-left: 10px;
    }
    &--light {
        color: $mx--color-primary;
        border-color: $mx--color-primary-light-8;
        background-color: $mx--color-primary-light-9;
        &-primary {
            color: $mx--color-primary;
            border-color: $mx--color-primary-light-8;
            background-color: $mx--color-primary-light-9;
        }
        &-success {
            color: $mx--color-success;
            border-color: $mx--color-success-light-8;
            background-color: $mx--color-success-light-9;
        }
        &-warning {
            color: $mx--color-warning;
            border-color: $mx--color-warning-light-8;
            background-color: $mx--color-warning-light-9;
        }
        &-danger {
            color: $mx--color-danger;
            border-color: $mx--color-danger-light-8;
            background-color: $mx--color-danger-light-9;
        }
        &-info {
            color: $mx--color-info;
            border-color: $mx--color-info-light-8;
            background-color: $mx--color-info-light-9;
        }
    }
    &--plain {
        color: $mx--color-primary;
        border-color: $mx--color-primary-light-6;
        background-color: $mx--color-white;
        &-primary {
            color: $mx--color-primary;
            border-color: $mx--color-primary-light-6;
            background-color: $mx--color-white;
        }
        &-success {
            color: $mx--color-success;
            border-color: $mx--color-success-light-6;
            background-color: $mx--color-white;
        }
        &-warning {
            color: $mx--color-warning;
            border-color: $mx--color-warning-light-6;
            background-color: $mx--color-white;
        }
        &-danger {
            color: $mx--color-danger;
            border-color: $mx--color-danger-light-6;
            background-color: $mx--color-white;
        }
        &-info {
            color: $mx--color-info;
            border-color: $mx--color-info-light-6;
            background-color: $mx--color-white;
        }
    }
    &--dark {
        color: $mx--color-white;
        border-color: $mx--color-primary;
        background-color: $mx--color-primary;
        &-primary {
            color: $mx--color-white;
            border-color: $mx--color-primary;
            background-color: $mx--color-primary;
        }
        &-success {
            color: $mx--color-white;
            border-color: $mx--color-success;
            background-color: $mx--color-success;
        }
        &-warning {
            color: $mx--color-white;
            border-color: $mx--color-warning;
            background-color: $mx--color-warning;
        }
        &-danger {
            color: $mx--color-white;
            border-color: $mx--color-danger;
            background-color: $mx--color-danger;
        }
        &-info {
            color: $mx--color-white;
            border-color: $mx--color-info;
            background-color: $mx--color-info;
        }
    }
    &-close {
        margin-left: 8px;
        border-radius: 50%;
        font-size: 14px;
        position: relative;
        top: 0.5px;
        cursor: pointer;
        &:hover {
            background-color: $mx--color-info;
            color: $mx--color-white;
        }
    }
    &--large {
        height: 32px;
        line-height: 32px;
    }
    &--small {
        height: 24px;
        line-height: 24px;
    }
    &--mini {
        height: 20px;
        line-height: 20px;
        padding: 0 6px;
    }
    &--large &-close {
        font-size: 16px;
        top: 1px;
        &:hover {
            background-color: $mx--color-info;
            color: $mx--color-white;
        }
    }
    &--small &-close,
    &--mini &-close {
        font-size: 12px;
        top: 0px;
        &:hover {
            background-color: $mx--color-info;
            color: $mx--color-white;
        }
    }
}
</style>

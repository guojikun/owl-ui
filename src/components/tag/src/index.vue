<template>
    <transition :name="transfer">
        <span class="fox-tag" :class="['fox-tag--' + theme, `fox-tag--${theme}-${type}`, `fox-tag--${size}`]" @click="clicks">
            <slot></slot>
            <fox-icon class="fox-tag-close" name="x" v-if="closed" @click="close"> </fox-icon>
        </span>
    </transition>
</template>

<script>
import { prefix } from "@/utils/assist.js";
import FoxIcon from "@/components/icon/index.js";
export default {
    name: `${prefix}Tag`,
    components: { FoxIcon },
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
        closed: Boolean,
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
        close(event) {
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
            return this.disableTransitions ? "" : "fox-zoom-in-center";
        },
    },
};
</script>
<style lang="scss">
@import "@/style/common/var.scss";
.fox-tag {
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
        color: $fox--color-primary;
        border-color: $fox--color-primary-light-8;
        background-color: $fox--color-primary-light-9;
        &-primary {
            color: $fox--color-primary;
            border-color: $fox--color-primary-light-8;
            background-color: $fox--color-primary-light-9;
        }
        &-success {
            color: $fox--color-success;
            border-color: $fox--color-success-light-8;
            background-color: $fox--color-success-light-9;
        }
        &-warning {
            color: $fox--color-warning;
            border-color: $fox--color-warning-light-8;
            background-color: $fox--color-warning-light-9;
        }
        &-danger {
            color: $fox--color-danger;
            border-color: $fox--color-danger-light-8;
            background-color: $fox--color-danger-light-9;
        }
        &-info {
            color: $fox--color-info;
            border-color: $fox--color-info-light-8;
            background-color: $fox--color-info-light-9;
        }
    }
    &--plain {
        color: $fox--color-primary;
        border-color: $fox--color-primary-light-6;
        background-color: $fox--color-white;
        &-primary {
            color: $fox--color-primary;
            border-color: $fox--color-primary-light-6;
            background-color: $fox--color-white;
        }
        &-success {
            color: $fox--color-success;
            border-color: $fox--color-success-light-6;
            background-color: $fox--color-white;
        }
        &-warning {
            color: $fox--color-warning;
            border-color: $fox--color-warning-light-6;
            background-color: $fox--color-white;
        }
        &-danger {
            color: $fox--color-danger;
            border-color: $fox--color-danger-light-6;
            background-color: $fox--color-white;
        }
        &-info {
            color: $fox--color-info;
            border-color: $fox--color-info-light-6;
            background-color: $fox--color-white;
        }
    }
    &--dark {
        color: $fox--color-white;
        border-color: $fox--color-primary;
        background-color: $fox--color-primary;
        &-primary {
            color: $fox--color-white;
            border-color: $fox--color-primary;
            background-color: $fox--color-primary;
        }
        &-success {
            color: $fox--color-white;
            border-color: $fox--color-success;
            background-color: $fox--color-success;
        }
        &-warning {
            color: $fox--color-white;
            border-color: $fox--color-warning;
            background-color: $fox--color-warning;
        }
        &-danger {
            color: $fox--color-white;
            border-color: $fox--color-danger;
            background-color: $fox--color-danger;
        }
        &-info {
            color: $fox--color-white;
            border-color: $fox--color-info;
            background-color: $fox--color-info;
        }
    }
    &-close {
        margin-left: 8px;
        border-radius: 50%;
        font-size: 14px;
        position: relative;
        top: 1.5px;
        cursor: pointer;
        &:hover {
            background-color: $fox--color-info;
            color: $fox--color-white;
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
        top: 2px;
        &:hover {
            background-color: $fox--color-info;
            color: $fox--color-white;
        }
    }
    &--small &-close,
    &--mini &-close {
        font-size: 12px;
        top: 0.5px;
        &:hover {
            background-color: $fox--color-info;
            color: $fox--color-white;
        }
    }
}
</style>

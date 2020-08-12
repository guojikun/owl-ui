<template>
    <button
        class="fox-button"
        :disabled="disabled"
        :class="[
            'fox-button--' + type,
            'fox-button--' + size,
            { 'is-disabled': disabled },
            { 'is-plain': plain },
            { 'is-round': round },
            { 'is-loading': loading },
        ]"
        @click="handleClick"
    >
        <fox-icon name="arrow-repeat" spin v-show="loading" size="14px" class="fox-button-loading"></fox-icon>
        <slot></slot>
    </button>
</template>

<script>
import { prefix } from "@/utils/assist.js";
import FoxIcon from "@/components/icon";
export default {
    name: `${prefix}Button`,
    components: { FoxIcon },
    props: {
        type: {
            type: String,
            default: "default",
            validator(value) {
                const flag = ["default", "primary", "success", "warning", "danger", "info", "text"].includes(value);
                return flag;
            },
        },
        size: {
            type: String,
            default: "default",
            validator(value) {
                const flag = ["default", "large", "small", "mini"];
                return flag.includes(value);
            },
        },
        disabled: {
            type: Boolean,
        },
        plain: {
            type: Boolean,
        },
        round: {
            type: Boolean,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleClick(event) {
            this.$emit("click", event);
        },
    },
};
</script>

<style lang="scss">
@import "@/style/common/var.scss";
.fox-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    border: 1px solid $fox-border-color-default;
    background: #fff;
    color: #606266;
    &-loading {
        margin-right: 4px;
    }
    &:hover,
    &:focus {
        color: $fox--color-primary;
        border-color: $fox--color-primary-light-7;
        background-color: $fox--color-primary-light-9;
    }
    & + & {
        margin-left: 10px;
    }
    &--default {
        padding: 8px 20px;
        font-size: 14px;
        border-radius: 4px;
        &.is-round {
            border-radius: 16px;
        }
    }
    &--mini {
        padding: 4px 12px;
        font-size: 12px;
        border-radius: 2px;
        &.is-round {
            border-radius: 11px;
        }
    }
    &--small {
        padding: 6px 14px;
        font-size: 12px;
        border-radius: 3px;
        &.is-round {
            border-radius: 13px;
        }
    }
    &--large {
        padding: 12px 28px;
        font-size: 14px;
        border-radius: 4px;
        &.is-round {
            border-radius: 20px;
        }
    }
    &.is-plain {
        &:hover,
        &:focus {
            color: $fox--color-primary;
            border-color: $fox--color-primary;
            background-color: $fox--color-white;
        }
        &.is-loading,
        &.is-disabled,
        &.is-disabled:active,
        &.is-disabled:focus,
        &.is-disabled:hover {
            color: $fox-disabled;
            cursor: not-allowed;
            background-color: $fox--color-white;
            border-color: $fox-border-color-disabled;
        }
    }
    &.is-loading,
    &.is-disabled,
    &.is-disabled:active,
    &.is-disabled:focus,
    &.is-disabled:hover {
        color: $fox-disabled;
        cursor: not-allowed;
        background-color: $fox--color-white;
        border-color: $fox-border-color-disabled;
    }
    &--primary {
        color: $fox--color-white;
        background-color: $fox--color-primary;
        border-color: $fox--color-primary;
        &:hover,
        &:focus {
            color: $fox--color-white;
            border-color: $fox--color-primary-light-2;
            background-color: $fox--color-primary-light-2;
        }
        &.is-plain {
            color: $fox--color-primary;
            border-color: $fox--color-primary-light-6;
            background-color: $fox--color-primary-light-9;
            &:hover,
            &:focus {
                color: $fox--color-white;
                border-color: $fox--color-primary;
                background-color: $fox--color-primary;
            }
            &.is-loading,
            &.is-disabled,
            &.is-disabled:active,
            &.is-disabled:focus,
            &.is-disabled:hover {
                color: $fox--color-primary-light-4;
                background-color: $fox--color-primary-light-9;
                border-color: $fox--color-primary-light-8;
            }
        }
        &.is-loading,
        &.is-disabled,
        &.is-disabled:active,
        &.is-disabled:focus,
        &.is-disabled:hover {
            color: #fff;
            background-color: $fox-primary-disabled;
            border-color: $fox-primary-disabled;
        }
    }
    &--success {
        color: $fox--color-white;
        background-color: $fox--color-success;
        border-color: $fox--color-success;
        &:hover,
        &:focus {
            color: $fox--color-white;
            border-color: $fox--color-success-light-2;
            background-color: $fox--color-success-light-2;
        }
        &.is-plain {
            color: $fox--color-success;
            border-color: $fox--color-success-light-6;
            background-color: $fox--color-success-light-9;
            &:hover,
            &:focus {
                color: $fox--color-white;
                border-color: $fox--color-success;
                background-color: $fox--color-success;
            }
            &.is-loading,
            &.is-disabled,
            &.is-disabled:active,
            &.is-disabled:focus,
            &.is-disabled:hover {
                color: $fox--color-success-light-4;
                background-color: $fox--color-success-light-9;
                border-color: $fox--color-success-light-8;
            }
        }
        &.is-loading,
        &.is-disabled,
        &.is-disabled:active,
        &.is-disabled:focus,
        &.is-disabled:hover {
            color: #fff;
            background-color: $fox-success-disabled;
            border-color: $fox-success-disabled;
        }
    }
    &--danger {
        color: $fox--color-white;
        background-color: $fox--color-danger;
        border-color: $fox--color-danger;
        &:hover,
        &:focus {
            color: $fox--color-white;
            border-color: $fox--color-danger-light-2;
            background-color: $fox--color-danger-light-2;
        }
        &.is-plain {
            color: $fox--color-danger;
            border-color: $fox--color-danger-light-6;
            background-color: $fox--color-danger-light-9;
            &:hover,
            &:focus {
                color: $fox--color-white;
                border-color: $fox--color-danger;
                background-color: $fox--color-danger;
            }
            &.is-loading,
            &.is-disabled,
            &.is-disabled:active,
            &.is-disabled:focus,
            &.is-disabled:hover {
                color: $fox--color-danger-light-4;
                background-color: $fox--color-danger-light-9;
                border-color: $fox--color-danger-light-8;
            }
        }
        &.is-loading,
        &.is-disabled,
        &.is-disabled:active,
        &.is-disabled:focus,
        &.is-disabled:hover {
            color: #fff;
            background-color: $fox-danger-disabled;
            border-color: $fox-danger-disabled;
        }
    }
    &--warning {
        color: $fox--color-white;
        background-color: $fox--color-warning;
        border-color: $fox--color-warning;
        &:hover,
        &:focus {
            color: $fox--color-white;
            border-color: $fox--color-warning-light-2;
            background-color: $fox--color-warning-light-2;
        }
        &.is-plain {
            color: $fox--color-warning;
            border-color: $fox--color-warning-light-6;
            background-color: $fox--color-warning-light-9;
            &:hover,
            &:focus {
                color: $fox--color-white;
                border-color: $fox--color-warning;
                background-color: $fox--color-warning;
            }
            &.is-loading,
            &.is-disabled,
            &.is-disabled:active,
            &.is-disabled:focus,
            &.is-disabled:hover {
                color: $fox--color-warning-light-4;
                background-color: $fox--color-warning-light-9;
                border-color: $fox--color-warning-light-8;
            }
        }
        &.is-loading,
        &.is-disabled,
        &.is-disabled:active,
        &.is-disabled:focus,
        &.is-disabled:hover {
            color: #fff;
            background-color: $fox-warning-disabled;
            border-color: $fox-warning-disabled;
        }
    }
    &--info {
        color: $fox--color-white;
        background-color: $fox--color-info;
        border-color: $fox--color-info;
        &:hover,
        &:focus {
            color: $fox--color-white;
            border-color: $fox--color-info-light-2;
            background-color: $fox--color-info-light-2;
        }
        &.is-plain {
            color: $fox--color-info;
            border-color: $fox--color-info-light-6;
            background-color: $fox--color-info-light-9;
            &:hover,
            &:focus {
                color: $fox--color-white;
                border-color: $fox--color-info;
                background-color: $fox--color-info;
            }
            &.is-loading,
            &.is-disabled,
            &.is-disabled:active,
            &.is-disabled:focus,
            &.is-disabled:hover {
                color: $fox--color-info-light-4;
                background-color: $fox--color-info-light-9;
                border-color: $fox--color-info-light-8;
            }
        }
        &.is-loading,
        &.is-disabled,
        &.is-disabled:active,
        &.is-disabled:focus,
        &.is-disabled:hover {
            color: #fff;
            background-color: $fox-info-disabled;
            border-color: $fox-info-disabled;
        }
    }
    &--text {
        color: $fox--color-primary;
        background-color: $fox--color-transparent;
        border-color: $fox--color-transparent;
        &:hover,
        &:focus {
            color: $fox--color-primary-light-2;
            border-color: $fox--color-transparent;
            background-color: $fox--color-transparent;
        }
        &.is-loading,
        &.is-disabled,
        &.is-disabled:focus,
        &.is-disabled:hover,
        &:active {
            border-color: $fox--color-transparent;
        }
    }
}
</style>

<template>
    <label class="mx-radio" :class="[]">
        <span class="mx-radio__input" :class="[{ 'is-checked': isChecked }, { 'is-disabled': isDisabled }]">
            <span class="mx-radio__inner"></span>
            <input :value="label" :name="names" type="radio" tabIndex="-1" hidden @change="handleChange" />
        </span>

        <span class="mx-radio__label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
import Emitter from "@/mixins/emitter.js";
import { findComponentUpward } from "@/utils/findComponent.js";
export default {
    name: "mxRadio",
    mixins: [Emitter],
    model: {
        props: "value",
        event: "change",
    },
    componentName: "mxRadio",
    props: {
        value: {
            type: [Number, String, Boolean],
        },
        label: {
            type: [String, Number, Boolean],
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        name: String,
    },
    data() {
        return {
            curValue: null,
        };
    },
    methods: {
        handleChange(ev) {
            if (this.isDisabled) {
                return false;
            }
            const parent = findComponentUpward(this, "mxRadioGroup");
            if (parent) {
                parent.updateValue(this.label);
            } else {
                this.curValue = ev.target.value;
                this.$emit("change", this.curValue);
                this.dispatch("mxFormItem", "on-form-change", this.curValue);
            }
        },
    },
    computed: {
        isChecked() {
            let bool = false;
            const parent = findComponentUpward(this, "mxRadioGroup");
            if (parent) {
                bool = parent.curValue === this.label;
            } else {
                bool = this.curValue === this.label;
            }

            return bool;
        },
        names() {
            const parent = findComponentUpward(this, "mxRadioGroup");
            const flag = parent && parent.$options.name === "mxRadioGroup";
            if (flag) {
                return this.name || parent.value;
            } else {
                return this.name || this.curValue;
            }
        },
        isDisabled() {
            const parent = findComponentUpward(this, "mxRadioGroup");
            const flag = parent && parent.$options.name === "mxRadioGroup";
            if (flag) {
                return parent.disabled;
            } else {
                return this.disabled;
            }
        },
    },
    watch: {
        value: {
            handler(val) {
                this.curValue = val;
            },
            immediate: true,
        },
    },
};
</script>
<style lang="scss">
@import "@/styles/common/var.scss";

.mx-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    user-select: none;
    &__input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
    }
    &__inner {
        border: 1px solid $mx--radio-border-color;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: $mx--color-white;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after {
            width: 4px;
            height: 4px;
            border-radius: 100%;
            background-color: #fff;
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0);
            transition: transform 0.15s ease-in;
        }
    }
    &__input.is-checked {
        & + .mx-radio__label {
            color: $mx--color-primary;
        }
        .mx-radio__inner {
            border-color: $mx--color-primary;
            background: $mx--color-primary;
            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }
    &__input.is-disabled {
        & + .mx-radio__label {
            color: $mx--checkbox-text-color-disabled;
            cursor: not-allowed;
        }
        .mx-radio__inner {
            background-color: $mx--checkbox-background-color-disabled;
            border-color: #e4e7ed;
            cursor: not-allowed;
            &:after {
                cursor: not-allowed;
                background-color: $mx--checkbox-background-color-disabled;
            }
        }
    }
    &__input.is-checked.is-disabled {
        .mx-radio__inner {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            &:after {
                background-color: #c0c4cc;
            }
        }
    }
    &__label {
        font-size: 14px;
        padding-left: 10px;
    }
}
</style>

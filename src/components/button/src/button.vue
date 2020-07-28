<template>
    <button
        class="fox-button"
        :disabled="disabled"
        :class="['fox-button--' + type, 'fox-button--' + size, { 'is-disabled': disabled }, { 'is-plain': plain }, { 'is-round': round }]"
        @click="handleClick"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "Button",
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
    },
    methods: {
        handleClick(event) {
            this.$emit("click", event);
        },
    },
};
</script>

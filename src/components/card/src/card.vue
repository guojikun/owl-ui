<template>
    <div class="fox-card" :class="['is-' + shadow + '-shadow']">
        <div class="fox-card-header" v-if="showHeader">
            <slot name="header"></slot>
        </div>
        <div class="fox-card-body" :style="[bodyStyle]">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        shadow: {
            type: String,
            default: "always",
            validator(value) {
                return ["always", "hover", "never"].indexOf(value) !== -1;
            },
        },
        header: String,
        bodyStyle: {
            type: Object,
            default() {
                return {
                    padding: "16px 20px",
                };
            },
        },
    },
    computed: {
        showHeader() {
            const slots = this.$slots;
            const flag = slots.header;
            return this.header || flag;
        },
    },
};
</script>
<style lang="scss">
@import "@/styles/common/var.scss";
.fox-card {
    border-radius: 4px;
    background-color: $fox-white;
    overflow: hidden;
    color: #303133;
    transition: 0.3s;
    border: 1px solid $fox-border-color-second;
    &-header {
        border-bottom: 1px solid $fox-border-color-second;
        padding: 15px 20px;
        box-sizing: border-box;
    }
}
.fox-card.is-always-shadow,
.fox-card.is-hover-shadow:focus,
.fox-card.is-hover-shadow:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>

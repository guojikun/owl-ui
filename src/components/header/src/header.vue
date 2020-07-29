<template>
    <div class="fox-layout-header" :style="getHeight">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: {
        height: {
            type: String,
            default: "60px",
        },
    },
    computed: {
        getHeight() {
            return `height:${this.height};`;
        },
    },
};
</script>
<style lang="scss">
.fox-layout-header {
    box-sizing: border-box;
    padding: 0 20px;
    width: 100%;
    flex-shrink: 0;
}
</style>

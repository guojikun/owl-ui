<template>
    <div class="mx-layout-footer" :style="getHeight">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "mxFooter",
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
.mx-layout-footer {
    box-sizing: border-box;
    padding: 0 20px;
    flex-shrink: 0;
    width: 100%;
}
</style>

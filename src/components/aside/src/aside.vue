<template>
    <div class="fox-layout-aside" :style="getWidth">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Aside",
    props: {
        width: {
            type: String,
            default: "300px",
        },
    },
    computed: {
        getWidth() {
            return `width:${this.width};`;
        },
    },
};
</script>
<style lang="scss">
.fox-layout-aside {
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: auto;
}
</style>

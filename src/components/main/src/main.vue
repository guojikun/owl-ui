<template>
    <div class="mx-layout-main" :style="[styles]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "mxMain",
    props: {
        styles: {
            type: Object,
            default() {
                return {
                    padding: "20px",
                };
            },
        },
    },
};
</script>
<style lang="scss">
.mx-layout-main {
    box-sizing: border-box;
    overflow: auto;
    display: block;
    flex: 1;
    flex-basis: auto;
}
</style>

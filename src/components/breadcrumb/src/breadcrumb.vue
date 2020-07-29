<template>
    <div class="fox-breadcrumb">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Breadcrumb",
    props: {
        separator: {
            type: String,
            default: ">",
        },
    },
    provide() {
        return {
            separator: this.separator,
        };
    },
};
</script>
<style lang="scss">
.fox-breadcrumb {
    color: #999;
    font-size: 14px;
}
</style>

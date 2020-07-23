<template>
    <div class="mx-breadcrumb">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "MxBreadcrumb",
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
.mx-breadcrumb {
    color: #999;
    font-size: 14px;
}
</style>

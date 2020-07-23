<template>
    <div class="mx-cell-group" :class="[{ 'is-border': border }]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "mxCellGroup",
    props: {
        border: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

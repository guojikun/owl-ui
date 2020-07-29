<template>
    <div class="fox-cell-group" :class="[{ 'is-border': border }]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "CellGroup",
    props: {
        border: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

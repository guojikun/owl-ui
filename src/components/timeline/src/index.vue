<template>
    <ul class="mx-timeline">
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name: "mxTimeline",
    props: {
        reverse: {
            type: Boolean,
            default: false,
        },
    },
    provide() {
        return {
            timeline: this,
        };
    },
    watch: {
        reverse: {
            handler(newVal) {
                if (newVal) {
                    this.$slots.default = [...this.$slots.default].reverse();
                }
            },
            immediate: true,
        },
    },
};
</script>
<style lang="scss">
@import "@/styles/common/var.scss";
.mx-timeline {
    margin: 0;
    font-size: $mx--font-size-base;
    list-style: none;

    & .mx-timeline-item:last-child {
        & .mx-timeline-item__tail {
            display: none;
        }
    }
}
</style>

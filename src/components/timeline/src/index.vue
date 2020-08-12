<template>
    <ul class="fox-timeline">
        <slot></slot>
    </ul>
</template>

<script>
import { prefix } from "@/utils/assist.js";
export default {
    name: `${prefix}Timeline`,
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
@import "@/style/common/var.scss";
.fox-timeline {
    margin: 0;
    font-size: $fox--font-size-base;
    list-style: none;

    & .fox-timeline-item:last-child {
        & .fox-timeline-item__tail {
            display: none;
        }
    }
}
</style>

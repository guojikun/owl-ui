<template>
    <component
        :is="tag"
        :class="['fox-col', this.span ? `fox-col-${this.span}` : '', this.offset ? `fox-col-offset-${this.offset}` : '']"
        :style="this.padding"
    >
        <slot></slot>
    </component>
</template>

<script>
import { prefix } from "@/utils/assist.js";
export default {
    name: `${prefix}Col`,
    props: {
        tag: {
            type: String,
            default: "div",
        },
        span: [Number, String],
        offset: [Number, String],
    },
    data() {
        return {
            gutter: null,
        };
    },
    computed: {
        padding() {
            const gutter = this.$parent.gutter;
            const width = gutter / 2;
            return {
                "padding-left": width + "px",
                "padding-right": width + "px",
            };
        },
    },
};
</script>

<style lang="scss">
@import "@/style/common/var.scss";
[class*="fox-col-"] {
    float: left;
    box-sizing: border-box;
}

@for $i from 1 to 25 {
    .fox-col-#{$i} {
        width: #{$i / 24 * 100%};
    }
}

@for $i from 1 to 25 {
    .fox-col-offset-#{$i} {
        margin-left: #{$i / 24 * 100%};
    }
}
</style>

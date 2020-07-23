<template>
    <component
        :is="tag"
        :class="['mx-col', this.span ? `mx-col-${this.span}` : '', this.offset ? `mx-col-offset-${this.offset}` : '']"
        :style="this.padding"
    >
        <slot></slot>
    </component>
</template>

<script>
export default {
    name: "mxCol",
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
@import "@/styles/common/var.scss";
[class*="mx-col-"] {
    float: left;
    box-sizing: border-box;
}

@for $i from 1 to 25 {
    .mx-col-#{$i} {
        width: #{$i / 24 * 100%};
    }
}

@for $i from 1 to 25 {
    .mx-col-offset-#{$i} {
        margin-left: #{$i / 24 * 100%};
    }
}
</style>

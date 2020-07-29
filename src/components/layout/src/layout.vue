<template>
    <div class="fox-layout" :class="['is-' + dir]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Layout",
    props: {
        direction: {
            type: String,
            validator(value) {
                return ["vertical", "horizontal"].indexOf(value) !== -1;
            },
        },
    },
    computed: {
        dir() {
            if (this.direction) {
                return this.direction;
            }
            let children = this.$slots.default;
            const tmp = children.filter(cur => {
                if (cur.componentOptions !== undefined)
                    return cur.componentOptions.tag == "fox-header" || cur.componentOptions.tag == "fox-footer";
            });
            if (tmp && tmp.length > 0) {
                return "horizontal";
            } else {
                return "vertical";
            }
        },
    },
};
</script>
<style lang="scss">
.fox-layout {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    &.is-vertical {
        flex-direction: row;
    }
    &.is-horizontal {
        flex-direction: column;
    }
}
</style>

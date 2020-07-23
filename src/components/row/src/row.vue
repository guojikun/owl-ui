<template>
    <component
        :is="tag"
        :class="[
            'mx-row',
            {
                'mx-row--flex': this.flex,
            },
            `is-align-${this.align}`,
        ]"
    >
        <slot></slot>
    </component>
</template>

<script>
export default {
    name: "mxRow",
    props: {
        tag: {
            type: String,
            default: "div",
        },
        gutter: Number,
        flex: {
            type: Boolean,
            default: false,
        },
        justify: {
            type: String,
            default: "start",
            validator(value) {
                const flag = ["start", "end", "center", "space-around", "space-between"].indexOf(value) !== -1;
                return flag;
            },
        },
        align: {
            type: String,
            default: "top",
            validator(value) {
                return ["top", "middle", "bottom"].indexOf(value) !== -1;
            },
        },
    },
};
</script>

<style lang="scss">
@import "@/styles/common/var.scss";
.mx-row {
    position: relative;
    box-sizing: border-box;
    &::before,
    &::after {
        display: table;
        content: "";
    }
    &::after {
        clear: both;
    }
}
.el-row--flex {
    display: flex;
}

.is-justify-start {
    justify-content: flex-start;
}
.is-justify-center {
    justify-content: flex-center;
}
.is-justify-end {
    justify-content: flex-end;
}
.is-justify-space-around {
    justify-content: space-around;
}
.is-justify-space-between {
    justify-content: space-between;
}
.is-align-top {
    align-content: flex-start;
    align-items: flex-start;
}
.is-align-middle {
    align-content: center;
    align-items: center;
}
.is-align-bottom {
    align-content: flex-end;
    align-items: flex-end;
}
</style>

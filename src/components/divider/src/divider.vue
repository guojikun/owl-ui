<template>
    <div
        class="fox-divider"
        :class="[`fox-divider-${type}`, $slots.default ? `fox-divider-text-${placement}` : 'fox-divider-default', { 'is-dashed': dashed }]"
    >
        <span class="fox-divier-inner__text" :style="textStyle" v-if="type === 'horizontal' && $slots.default">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: "Divider",
    props: {
        placement: {
            type: String,
            default: "center",
            validator(value) {
                return ["left", "center", "right"].indexOf(value) !== -1;
            },
        },
        type: {
            type: String,
            default: "horizontal",
            validator(value) {
                return ["horizontal", "vertical"].indexOf(value) !== -1;
            },
        },
        dashed: {
            type: Boolean,
            default: false,
        },
        textStyle: [Object, String],
    },
};
</script>
<style lang="scss">
@import "@/styles/common/var.scss";

.fox-divider {
    display: inline-block;
    font-size: $fox--divider-font-size-base;
    line-height: 1.5;
    color: $fox--timeline-font-color-base;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    &-horizontal {
        display: block;
        height: 1px;
        width: 100%;
        min-width: 100%;
        margin: 24px 0;
        clear: both;
        .fox-divier-inner__text {
            display: inline-block;
            margin: 0 20px;
        }
    }
    &-vertical {
        display: inline-block;
        margin: 0 10px;
        width: 1px;
        height: 1em !important;
        background-color: $fox--timeline-background-color-base;
        vertical-align: middle;
    }
    &-text-center,
    &-text-left,
    &-text-right {
        display: table;
        white-space: nowrap;
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        margin: 16px 0;
        border-top: none !important;
        &:before,
        &:after {
            content: "";
            display: table-cell;
            position: relative;
            width: 50%;
            transform: translateY(50%);
            top: 50%;
            border-top: 1px $fox--timeline-border-style-base $fox--timeline-border-color-base;
        }
        .fox-divier-inner__text {
            display: inline-block;
            padding: 0px;
        }
    }
    &-default {
        background-color: $fox--timeline-background-color-base;
    }
    &-text-left {
        &:before {
            width: 5%;
        }
        &:after {
            width: 95%;
        }
    }
    &-text-right {
        &:before {
            width: 95%;
        }
        &:after {
            width: 5%;
        }
    }
    .fox-divier-inner__text {
        box-sizing: border-box;
        display: inline-block;
        background-color: $fox--color-white;
        font-size: 14px;
    }
}
.is-dashed {
    background: 0 0;
    border-top: 1px dashed #e8eaec;
    height: 1px;
    &:before,
    &:after {
        content: "";
        display: table-cell;
        position: relative;
        width: 50%;
        transform: translateY(50%);
        top: 50%;
        border-top: 1px dashed $fox--timeline-border-color-base;
    }
}
</style>

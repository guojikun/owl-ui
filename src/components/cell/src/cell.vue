<template>
    <div :class="['mx-cell', { 'is-disabled': disabled }, { 'is-selected': selected }]">
        <div class="mx-cell__main" @click="handleClick">
            <router-link v-if="!!to" tag="a" :to="to" :replace="replace" :target="target" class="mx-cell-item">
                <div class="mx-cell-icon" v-if="icon || $slots.icon">
                    <slot name="icon"></slot>
                </div>
                <div class="mx-cell-text">
                    <div class="mx-cell-title">
                        <slot>{{ title }}</slot>
                    </div>
                    <div class="mx-cell-label" v-if="label || $slots.label">
                        <slot name="label">{{ label }}</slot>
                    </div>
                </div>
                <div class="mx-cell-extra" :style="[extraStyle]">
                    <slot name="extra">{{ extra }}</slot>
                </div>
            </router-link>
            <div v-else class="mx-cell-item">
                <div class="mx-cell-icon" v-if="icon || $slots.icon">
                    <slot name="icon"></slot>
                </div>
                <div class="mx-cell-text">
                    <div class="mx-cell-title">
                        <slot>{{ title }}</slot>
                    </div>
                    <div class="mx-cell-label" v-if="label || $slots.label">
                        <slot name="label">{{ label }}</slot>
                    </div>
                </div>
                <div class="mx-cell-extra" :style="[extraStyle]">
                    <slot name="extra">{{ extra }}</slot>
                </div>
            </div>
        </div>
        <div class="mx-cell__arrow" v-if="$slots.arrow || to || isLink">
            <mx-icon name="ios-arrow-forward"></mx-icon>
        </div>
    </div>
</template>

<script>
export default {
    name: "mxCell",
    props: {
        title: String,
        name: [String, Number],
        to: [String, Object],
        replace: {
            type: Boolean,
            default: false,
        },
        icon: String,
        label: String,
        extra: String,
        isLink: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        selected: {
            type: Boolean,
            default: false,
        },
        target: {
            type: String,
            default: "_self",
        },
    },
    methods: {
        handleClick() {
            this.$emit("click", this.name);
        },
    },
    computed: {
        extraStyle() {
            const right = {
                right: "32px",
            };
            const flag = !!this.to || this.isLink || !!this.$slots.arrow;
            return flag ? right : "";
        },
    },
};
</script>
<style lang="scss">
@import "@/styles/common/var.scss";
.mx-cell {
    position: relative;
    box-sizing: border-box;
    margin: 0;
    line-height: normal;
    padding: 7px 16px;
    clear: both;
    color: #515a6e;
    font-size: 12px !important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    &:focus {
        background: #f3f3f3;
        outline: 0;
    }
    &:hover {
        background: #f3f3f3;
    }
    &__main {
        color: inherit;
        box-sizing: inherit;
        &:active,
        &:hover {
            color: inherit;
        }
    }
    &-item {
        color: inherit;
        &:active,
        &:hover {
            color: inherit;
        }
    }
    &-text {
        line-height: 24px;
        font-size: 14px;
    }
    &-label {
        line-height: 1.2;
        font-size: 12px;
        color: #808695;
    }
    &-icon {
        display: inline-block;
        margin-right: 4px;
        font-size: 14px;
        vertical-align: middle;
    }
    &-title {
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
    }
    &-extra {
        display: inline-block;
        position: absolute;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        top: 50%;
        right: 16px;
        color: #515a6e;
    }
    &__arrow {
        display: inline-block;
        position: absolute;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        top: 50%;
        right: 16px;
        font-size: 14px;
    }
    &.is-disabled {
        color: #c5c8ce;
        cursor: not-allowed;
        &:hover {
            color: #c5c8ce;
            cursor: not-allowed;
        }
    }
    &.is-selected {
        color: $mx--color-primary;
        background-color: #f0faff;
        :hover {
            background-color: #f0faff;
        }
    }
}
</style>

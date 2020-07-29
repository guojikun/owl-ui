<template>
    <li class="fox-timeline-item">
        <div class="fox-timeline-item__tail"></div>

        <div
            v-if="!$slots.dot"
            class="fox-timeline-item__node"
            :class="[`fox-timeline-item__node--${size || ''}`, `fox-timeline-item__node--${type || ''}`]"
            :style="{
                backgroundColor: color,
            }"
        >
            <i v-if="icon" class="fox-timeline-item__icon" :class="icon"></i>
        </div>
        <div v-if="$slots.dot" class="fox-timeline-item__dot">
            <slot name="dot"></slot>
        </div>

        <div class="fox-timeline-item__wrapper">
            <div v-if="!hideTimestamp && placement === 'top'" class="fox-timeline-item__timestamp is-top">
                {{ timestamp }}
            </div>

            <div class="fox-timeline-item__content">
                <slot></slot>
            </div>

            <div v-if="!hideTimestamp && placement === 'bottom'" class="fox-timeline-item__timestamp is-bottom">
                {{ timestamp }}
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: "TimelineItem",
    inject: ["timeline"],
    props: {
        timestamp: String,
        hideTimestamp: {
            type: Boolean,
            default: false,
        },
        placement: {
            type: String,
            default: "bottom",
            validator(value) {
                return ["top", "bottom"].includes(value);
            },
        },
        type: {
            type: String,
            validator(value) {
                return ["primary", "success", "warning", "danger", "info"].includes(value);
            },
        },
        color: String,
        size: {
            type: String,
            default: "normal",
            validator(value) {
                return ["normal", "large"].includes(value);
            },
        },
        icon: String,
    },
};
</script>

<style lang="scss">
@import "@/style/common/var.scss";
.fox-timeline-item {
    position: relative;
    padding-bottom: 20px;

    &__wrapper {
        position: relative;
        padding-left: 28px;
        top: -3px;
    }

    &__tail {
        position: absolute;
        left: 4px;
        height: 100%;
        border-left: 2px solid $fox--timeline-node-color;
    }

    &__icon {
        color: $fox--color-white;
        font-size: $fox--font-size-small;
    }

    &__node {
        position: absolute;
        background-color: $fox--timeline-node-color;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        &--normal {
            left: -1px;
            width: $fox--timeline-node-size-normal;
            height: $fox--timeline-node-size-normal;
        }

        &--large {
            left: -2px;
            width: $fox--timeline-node-size-large;
            height: $fox--timeline-node-size-large;
        }

        &--primary {
            background-color: $fox-primary;
        }

        &--success {
            background-color: $fox-success;
        }

        &--warning {
            background-color: $fox-warning;
        }

        &--danger {
            background-color: $fox-danger;
        }

        &--info {
            background-color: $fox-info;
        }
    }

    &__dot {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__content {
        color: $fox-primary;
    }

    &__timestamp {
        color: $fox--color-text-secondary;
        line-height: 1;
        font-size: $fox--font-size-small;

        &.is-top {
            margin-bottom: 8px;
            padding-top: 4px;
        }

        &.is-bottom {
            margin-top: 8px;
        }
    }
}
</style>

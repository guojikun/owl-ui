<template>
    <li class="mx-timeline-item">
        <div class="mx-timeline-item__tail"></div>

        <div
            v-if="!$slots.dot"
            class="mx-timeline-item__node"
            :class="[`mx-timeline-item__node--${size || ''}`, `mx-timeline-item__node--${type || ''}`]"
            :style="{
                backgroundColor: color,
            }"
        >
            <i v-if="icon" class="mx-timeline-item__icon" :class="icon"></i>
        </div>
        <div v-if="$slots.dot" class="mx-timeline-item__dot">
            <slot name="dot"></slot>
        </div>

        <div class="mx-timeline-item__wrapper">
            <div v-if="!hideTimestamp && placement === 'top'" class="mx-timeline-item__timestamp is-top">
                {{ timestamp }}
            </div>

            <div class="mx-timeline-item__content">
                <slot></slot>
            </div>

            <div v-if="!hideTimestamp && placement === 'bottom'" class="mx-timeline-item__timestamp is-bottom">
                {{ timestamp }}
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: "mxTimelineItem",
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
@import "@/styles/common/var.scss";
.mx-timeline-item {
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
        border-left: 2px solid $mx--timeline-node-color;
    }

    &__icon {
        color: $mx--color-white;
        font-size: $mx--font-size-small;
    }

    &__node {
        position: absolute;
        background-color: $mx--timeline-node-color;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        &--normal {
            left: -1px;
            width: $mx--timeline-node-size-normal;
            height: $mx--timeline-node-size-normal;
        }

        &--large {
            left: -2px;
            width: $mx--timeline-node-size-large;
            height: $mx--timeline-node-size-large;
        }

        &--primary {
            background-color: $mx-primary;
        }

        &--success {
            background-color: $mx-success;
        }

        &--warning {
            background-color: $mx-warning;
        }

        &--danger {
            background-color: $mx-danger;
        }

        &--info {
            background-color: $mx-info;
        }
    }

    &__dot {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__content {
        color: $mx-primary;
    }

    &__timestamp {
        color: $mx--color-text-secondary;
        line-height: 1;
        font-size: $mx--font-size-small;

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

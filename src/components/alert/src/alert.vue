<template>
    <div class="mx-alert" :class="getType" :style="getColor">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "mxAlert",
    props: {
        type: {
            type: String,
            validator(value) {
                return ["success", "danger", "warning", "info"].includes(value);
            },
        },
        color: {
            type: Object,
        },
    },
    computed: {
        getType() {
            if (this.type) {
                return `is-${this.type}`;
            } else {
                return "";
            }
        },
        getColor() {
            if (this.color) {
                let style = {};
                if (this.color.line) {
                    style["borderLeftColor"] = this.color.line;
                }
                if (this.color.background) {
                    style["backgroundColor"] = this.color.background;
                }
                if (this.color.font) {
                    style["color"] = this.color.font;
                }
                return style;
            } else {
                return {};
            }
        },
    },
};
</script>
<style lang="scss">
@import "@/styles/common/var.scss";
.mx-alert {
    padding: 10px 20px;
    background-color: $mx--color-primary-light-8;
    border-left: 6px solid $mx--color-primary;
    border-radius: 4px;
    line-height: 1.8em;
    & + & {
        margin-top: 20px;
    }
    &.is-success {
        border-left-color: $mx--color-success;
        background-color: $mx--color-success-light;
    }
    &.is-danger {
        border-left-color: $mx--color-danger;
        background-color: $mx--color-danger-light;
    }
    &.is-warning {
        border-left-color: $mx--color-warning;
        background-color: $mx--color-warning-light;
    }
    &.is-info {
        border-left-color: $mx--color-info;
        background-color: $mx--color-info-light;
    }
}
</style>

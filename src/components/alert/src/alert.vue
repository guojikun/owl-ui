<template>
    <div class="fox-alert" :class="getType" :style="getColor">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Alert",
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
.fox-alert {
    padding: 10px 20px;
    background-color: $fox--color-primary-light-8;
    border-left: 6px solid $fox--color-primary;
    border-radius: 4px;
    line-height: 1.8em;
    & + & {
        margin-top: 20px;
    }
    &.is-success {
        border-left-color: $fox--color-success;
        background-color: $fox--color-success-light;
    }
    &.is-danger {
        border-left-color: $fox--color-danger;
        background-color: $fox--color-danger-light;
    }
    &.is-warning {
        border-left-color: $fox--color-warning;
        background-color: $fox--color-warning-light;
    }
    &.is-info {
        border-left-color: $fox--color-info;
        background-color: $fox--color-info-light;
    }
}
</style>

<template>
    <div class="mx-rate">
        <div class="mx-rate__icon">
            <mx-icon
                :class="['mx-rate__icon-item']"
                :name="cur < item ? icon : activeIcon"
                v-for="item in count"
                :key="item"
                :style="getIconColor(item)"
                @mouseenter.native="handleMouseenter($event, item)"
                @mouseleave.native="handleMouseleave(item)"
                @click="handleClick(item)"
            >
                <i v-if="allowHalf" :style="['color', activeIconColor]"></i>
            </mx-icon>
        </div>
        <span class="mx-rate__text">
            <slot>{{ value }}</slot>
        </span>
        <input type="text" hidden :value="value" />
    </div>
</template>

<script>
import mxIcon from "../../icon/index.js";
import Emitter from "@/mixins/emitter.js";
export default {
    name: "mxRate",
    components: { mxIcon },
    mixins: [Emitter],
    model: {
        props: "value",
        event: "change",
    },
    props: {
        value: {
            type: Number,
            default: 0,
        },
        count: {
            type: Number,
            default: 5,
        },
        icon: {
            type: String,
            default: "ios-star-outline",
        },
        iconColor: {
            type: String,
            default: "#c0c4cc",
        },
        activeIcon: {
            type: String,
            default: "ios-star",
        },
        activeIconColor: {
            type: String,
            default: "#f5a623",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        allowHalf: {
            type: Boolean,
            default: false,
        },
        tigger: {
            type: String,
            default: "hover",
            validator(value) {
                return ["hover", "click"].includes(value);
            },
        },
    },
    data() {
        return {
            cur: this.value,
        };
    },
    methods: {
        handleMouseenter(ev, val) {
            if (this.disabled) {
                return false;
            }
            if (this.tigger === "hover") {
                this.cur = val;
                this.$emit("change", this.cur);
                this.dispatch("mxFormItem", "on-form-change", this.cur);
            }
        },
        handleMouseleave() {},
        handleClick(val) {
            if (this.disabled) {
                return false;
            }
            if (this.tigger === "click") {
                this.cur = val;
                this.$emit("change", this.cur);
                this.dispatch("mxFormItem", "on-form-change", this.cur);
            }
        },
        getIconColor(item) {
            if (this.cur < item) {
                return {
                    color: this.iconColor,
                };
            } else {
                return {
                    color: this.activeIconColor,
                };
            }
        },
    },
    watch: {
        value(val) {
            this.cur = val;
        },
    },
};
</script>
<style lang="scss">
.mx-rate {
    display: flex;
    &__icon {
        &-item {
            margin: 0 2px;
            position: relative;
            display: inline-block;
            cursor: pointer;
            font-size: 16px;
            &-half {
                display: block;
                width: 0;
            }
        }
        &-checked {
            color: #f5a623;
        }
    }
    &__text {
        margin-left: 10px;
    }
}
</style>

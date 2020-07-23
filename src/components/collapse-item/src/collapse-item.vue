<template>
    <div class="mx-collapse-item" :class="[{ 'mx-collapse-item-active': isActive }]">
        <div class="mx-collapse-item__header" @click="handleChange">
            <mx-icon name="ios-arrow-forward" :class="['mx-icon-right', `mx-collapse-arrow-${getArrow}`]"> </mx-icon>
            <span>
                <slot name="title">{{ title }}</slot>
            </span>
        </div>
        <collapse-transition>
            <div v-show="isActive" class="mx-collapse-item__wrap">
                <div class="mx-collapse-item__wrap-box">
                    <slot></slot>
                </div>
            </div>
        </collapse-transition>
    </div>
</template>

<script>
import { findBrothersComponents } from "@/utils/findComponent.js";
import CollapseTransition from "@/utils/collapse-transition.js";
import MxIcon from "pkg/icon/index.js";
export default {
    name: "mxCollapseItem",
    components: { MxIcon, CollapseTransition },
    props: {
        value: [String, Array],
        accordion: {
            type: Boolean,
            default: false,
        },
        title: String,
        name: [String, Number],
    },

    mounted() {
        this.init();
    },
    methods: {
        init() {
            const parent = this.$parent;
            const flag = parent.$options.name !== "mxCollapse";
            if (flag) {
                throw new Error("mx-collapse-item组件的父组件必须是mx-collapse");
            }
        },
        handleChange() {
            const parent = this.$parent;
            let value = parent.value;

            if (parent.accordion) {
                if (value == this.getName) {
                    value = null;
                } else {
                    value = this.getName.toString();
                }
            } else {
                if (value == undefined) value = [];
                if (value.indexOf(this.getName) !== -1) {
                    value.splice(value.indexOf(this.getName), 1);
                } else {
                    value.push(this.getName);
                }
            }
            parent.$emit("change", value);
        },
    },
    computed: {
        getName() {
            const uid = this._uid;
            const borthers = findBrothersComponents(this, "mxCollapseItem", false);
            const tmp = borthers.map(item => {
                return item._uid;
            });
            const index = tmp.indexOf(uid);
            return this.name || index;
        },
        isActive() {
            let s = null;
            const parent = this.$parent;
            let value = this.$parent.value;
            const name = this.getName;
            if (parent.accordion) {
                s = value == name;
            } else {
                value = value == undefined ? [] : this.$parent.value;
                s = value.indexOf(name) !== -1;
            }
            return s;
        },
        getArrow() {
            const parent = this.$parent;
            return parent.arrow;
        },
    },
};
</script>
<style lang="scss">
@import "@/styles/common/var.scss";
@import "@/styles/common/transition.scss";
.mx-collapse-item {
    position: relative;
    & + & {
        border-top: 1px solid #dcdee2;
    }
    &__header {
        height: 38px;
        line-height: 38px;
        padding-left: 16px;
        color: #666;
        cursor: pointer;
        position: relative;
        border-bottom: 1px solid transparent;
        font-size: 14px;
        /* transition: all 0.3s ease-in-out; */
        & > .mx-icon-right {
            transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
            margin-right: 10px;
        }
        & > .mx-icon-right.mx-collapse-arrow-right {
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -7px;
            margin-right: 16px;
        }
        & > .mx-icon-right.mx-collapse-arrow-none {
            display: none;
        }
    }
    &__wrap {
        color: #515a6e;
        padding: 0 16px;
        background-color: #fff;
        box-sizing: border-box;
        font-size: 13px;
        /* will-change: height;
        overflow: hidden; */
        /* transition: all .3s; */
        &-box {
            padding: 16px 0;
        }
    }
}
.mx-collapse-item-active {
    .mx-collapse-item__header {
        & > .mx-icon-right {
            transform: rotateZ(90deg);
        }
    }
}
</style>

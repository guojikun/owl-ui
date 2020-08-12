<template>
    <div class="fox-select" v-clickoutside="handClose">
        <fox-input @click.native="handClick" v-model="label"></fox-input>
        <transition name="fox-zoom-in-top">
            <div v-show="visiable" class="fox-transfer">
                <ul ref="scrollbar" class="fox-select__scroll">
                    <slot></slot>
                </ul>
                <p class="el-select-dropdown__empty" v-if="emptyText">
                    {{ emptyText }}
                </p>
            </div>
        </transition>
    </div>
</template>
<script>
import { prefix } from "@/utils/assist.js";
import Clickoutside from "@/directives/clickoutside.js";
import FoxInput from "@/components/input";
export default {
    name: `${prefix}Select`,
    components: { FoxInput },
    directives: { Clickoutside },
    model: {
        prop: "value",
        event: "change",
    },
    props: {
        emptyText: String,
        value: [String, Number],
    },
    data() {
        return {
            visiable: false,
            label: null,
        };
    },
    provide() {
        return this;
    },
    methods: {
        handClose() {
            console.log("123");
            this.visiable = false;
        },
        handleMenuEnter() {
            this.$nextTick(() => this.scrollToOption(this.selected));
        },
        handClick() {
            this.visiable = true;
        },
        handChange(val, label) {
            this.label = label;
            this.$emit("change", val || null);
        },
    },
};
</script>
<style lang="scss">
.fox-select {
    display: inline-block;
    position: relative;
    &__scroll {
        list-style: none;
        margin: 0;
        padding: 0;
    }
}
.fox-transfer {
    position: absolute;
    left: 0;
    top: 36px;
    background-color: #fff;
    width: 100%;
    z-index: 1000;
    box-sizing: border-box;
    border: 1px solid #efefef;
    border-radius: 4px;
    height: 183px;
}
</style>

<template>
    <owl-overlay v-model="isShow" @close="close">
        <div class="owl-modal">
            <div class="owl-modal-header">
                <slot name="header">
                    <div class="owl-modal-header-inner">{{ title }}</div>
                </slot>
            </div>
            <div class="owl-modal-body">
                <slot></slot>
            </div>
            <div class="owl-modal-footer">
                <slot name="footer">
                    <div class="owl-modal-footer-inner">
                        <Button style="margin-right: 20px;" @click="cancel">取消</Button>
                        <Button type="primary">确定</Button>
                    </div>
                </slot>
            </div>
            <span class="owl-modal-close" @click="close">
                <Icon type="ios-close" style="font-size: 30px;"></Icon>
            </span>
        </div>
    </owl-overlay>
</template>

<script>
import OwlOverlay from "../../overlay/index.js";
export default {
    name: "Modal",
    components: { OwlOverlay },
    model: {
        event: "change",
        prop: "visiable",
    },
    props: {
        appendToBody: {
            type: Boolean,
            default: true,
        },
        visiable: {
            type: Boolean,
            default: false,
        },
        width: {
            type: String,
            default: "500px",
        },
        title: String,
    },
    data() {
        return {
            isShow: false,
        };
    },
    mounted() {
        document.body.appendChild(this.$el);
    },
    methods: {
        close() {
            this.isShow = false;
            this.$emit("change", this.isShow);
            this.$emit("close", this.isShow);
        },
        cancel() {
            this.isShow = false;
            this.$emit("change", this.isShow);
            this.$emit("cancel", this.isShow);
        },
    },
    watch: {
        visiable: {
            handler(val) {
                this.isShow = val;
            },
            immediate: true,
        },
    },
};
</script>

<style lang="scss">
.owl-modal {
    background-color: #fff;
    width: 500px;
    border-radius: 8px;
    &-header {
        font-size: 16px;
        border-bottom: 1px solid #e8eaec;
        line-height: 1em;
        &-inner {
            padding: 14px 16px;
            line-height: 20px;
        }
    }
    &-body {
        font-size: 14px;
        padding: 16px;
    }
    &-footer {
        font-size: 14px;
        border-top: 1px solid #e8eaec;
        &-inner {
            padding: 14px 16px;
            line-height: 20px;
            text-align: right;
        }
    }
    &-close {
        user-select: none;
        font-size: 30px;
        line-height: 1em;
        width: 30px;
        text-align: center;
        position: absolute;
        right: 8px;
        top: 8px;
        cursor: pointer;
    }
}
</style>

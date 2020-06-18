<template>
    <transition name="fade">
        <div class="owl-overlay" v-show="visiable">
            <div class="owl-overlay-mask" @click="close"></div>

            <div class="owl-overlay-container" :style="{ width: width, transform: `translateX(-${parseInt(width) / 2}px)` }">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "Overlay",
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
    },
    data() {
        return {
            isShow: false,
        };
    },
    mounted() {
        if (this.appendToBody) {
            document.body.appendChild(this.$el);
        }
    },
    methods: {
        close() {
            this.isShow = false;
            this.$emit("change", this.isShow);
            this.$emit("close", this.isShow);
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
.owl-overlay {
    width: 100vw;
    height: 100vh;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;
    z-index: 2000;
    &-mask {
        width: 100%;
        height: 100%;
        background-color: rgba(55, 55, 55, 0.6);
    }
    &-container {
        position: absolute;
        top: 100px;
        left: 50%;
        box-sizing: border-box;
        transition: all 3s;
    }
}
</style>

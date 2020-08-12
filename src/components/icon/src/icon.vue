<template>
    <span :class="['fox-icon', names, { 'is-spin': spin }]" :style="styles"></span>
</template>

<script>
import { prefix } from "@/utils/assist.js";
export default {
    name: `${prefix}Icon`,
    props: {
        name: String,
        size: [Number, String],
        color: String,
        spin: Boolean,
    },
    computed: {
        names() {
            if (this.name) {
                return `fox-icon-${this.name}`;
            }
            return "";
        },
        styles() {
            const style = {};
            if (this.size) {
                const type = typeof this.size;
                if (type === "string") {
                    style["fontSize"] = this.size;
                } else {
                    style["fontSize"] = `${this.size}px`;
                }
            }
            if (this.color) {
                style["color"] = this.color;
            }
            return style;
        },
    },
};
</script>

<style>
@import url("../../../style/icon/icon.css");
.fox-icon {
    display: inline-block;
}
.is-spin {
    transition: 0.3s;
    animation: spin 1s linear infinite;
}
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>

<template>
    <div class="fox-layout-main" :style="[styles]">
        <slot></slot>
    </div>
</template>

<script>
import { prefix } from "@/utils/assist.js";
export default {
    name: `${prefix}Main`,
    props: {
        styles: {
            type: Object,
            default() {
                return {
                    padding: "20px",
                };
            },
        },
    },
};
</script>
<style lang="scss">
.fox-layout-main {
    box-sizing: border-box;
    overflow: auto;
    display: block;
    flex: 1;
    flex-basis: auto;
}
</style>

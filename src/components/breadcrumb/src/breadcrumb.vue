<template>
    <div class="fox-breadcrumb">
        <slot></slot>
    </div>
</template>

<script>
import { prefix } from "@/utils/assist.js";
export default {
    name: `${prefix}Breadcrumb`,
    props: {
        separator: {
            type: String,
            default: ">",
        },
    },
    provide() {
        return {
            separator: this.separator,
        };
    },
};
</script>
<style lang="scss">
.fox-breadcrumb {
    color: #999;
    font-size: 14px;
}
</style>

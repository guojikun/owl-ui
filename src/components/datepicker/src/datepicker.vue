<template>
    <div class="fox-date-picker"></div>
</template>

<script>
import { prefix } from "@/utils/assist.js";
export default {
    name: `${prefix}DatePicker`,
    model: {
        event: "change",
        prop: "value",
    },
    props: {
        value: [String, Date],
    },
    methods: {
        prevMouth() {},
    },
};
</script>

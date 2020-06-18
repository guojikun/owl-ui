<template>
    <span :class="[iconName]"></span>
</template>

<script>
export default {
    name: "Icon",
    props: {
        type: String,
    },
    data() {
        return {
            iconName: "",
        };
    },
    mounted() {
        this.iconName = this.getIcon(this.type);
    },
    methods: {
        getIcon(name) {
            if (name) {
                return `owl-icon-${name}`;
            }
            return "";
        },
    },
};
</script>

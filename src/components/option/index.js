import Option from "@/components/select/src/option.vue";

Option.install = Vue => {
    Vue.component(Option.name, Option);
};

export default Option;

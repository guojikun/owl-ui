import Option from "./src/option.vue";

Option.install = Vue => {
    Vue.component(Option.name, Option);
};

export default Option;

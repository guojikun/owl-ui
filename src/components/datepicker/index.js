import Option from "./src/datepicker.vue";

Option.install = Vue => {
    Vue.component(Option.name, Option);
};

export default Option;

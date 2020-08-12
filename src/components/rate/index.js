import Rate from "./src/index.vue";

Rate.install = Vue => {
    Vue.component(Rate.name, Rate);
};

export default Rate;

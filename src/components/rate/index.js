import Rate from "./src/index.vue";

Rate.install = Vue => {
    Vue.component(`fox${Rate.name}`, Rate);
};

export default Rate;

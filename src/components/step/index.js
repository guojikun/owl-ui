import Step from "./src/index.vue";

Step.install = Vue => {
    Vue.component(`fox${Step.name}`, Step);
};

export default Step;

import Step from "./src/index.vue";

Step.install = Vue => {
    Vue.component(Step.name, Step);
};

export default Step;

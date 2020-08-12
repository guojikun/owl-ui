import Steps from "./src/index.vue";

Steps.install = Vue => {
    Vue.component(Steps.name, Steps);
};

export default Steps;

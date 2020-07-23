import mxStep from "./src/index.vue";

mxStep.install = Vue => {
    Vue.component(mxStep.name, mxStep);
};

export default mxStep;

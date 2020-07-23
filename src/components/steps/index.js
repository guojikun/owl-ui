import mxSteps from "./src/index.vue";

mxSteps.install = Vue => {
    Vue.component(mxSteps.name, mxSteps);
};

export default mxSteps;

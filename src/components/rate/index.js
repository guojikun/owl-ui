import mxRate from "./src/index.vue";

mxRate.install = Vue => {
    Vue.component(mxRate.name, mxRate);
};

export default mxRate;

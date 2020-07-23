import mxTooltip from "./src/index.vue";

mxTooltip.install = Vue => {
    Vue.component(mxTooltip.name, mxTooltip);
};

export default mxTooltip;

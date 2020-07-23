import mxDivider from "./src/divider.vue";

mxDivider.install = Vue => {
    Vue.component(mxDivider.name, mxDivider);
};

export default mxDivider;

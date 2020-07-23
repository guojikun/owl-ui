import mxRadio from "./src/index.vue";

mxRadio.install = Vue => {
    Vue.component(mxRadio.name, mxRadio);
};

export default mxRadio;

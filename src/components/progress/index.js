import mxProgress from "./src/index.vue";

mxProgress.install = Vue => {
    Vue.component(mxProgress.name, mxProgress);
};

export default mxProgress;

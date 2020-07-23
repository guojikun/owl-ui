import mxTimeline from "./src/index.vue";

mxTimeline.install = Vue => {
    Vue.component(mxTimeline.name, mxTimeline);
};

export default mxTimeline;

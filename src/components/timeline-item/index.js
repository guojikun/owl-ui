import mxTimelineItem from "./src/index.vue";

mxTimelineItem.install = Vue => {
    Vue.component(mxTimelineItem.name, mxTimelineItem);
};

export default mxTimelineItem;

import TimelineItem from "./src/index.vue";

TimelineItem.install = Vue => {
    Vue.component(TimelineItem.name, TimelineItem);
};

export default TimelineItem;

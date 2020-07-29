import TimelineItem from "./src/index.vue";

TimelineItem.install = Vue => {
    Vue.component(`fox${TimelineItem.name}`, TimelineItem);
};

export default TimelineItem;

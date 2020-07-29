import Timeline from "./src/index.vue";

Timeline.install = Vue => {
    Vue.component(`fox${Timeline.name}`, Timeline);
};

export default Timeline;

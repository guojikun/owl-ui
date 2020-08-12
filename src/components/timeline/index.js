import Timeline from "./src/index.vue";

Timeline.install = Vue => {
    Vue.component(Timeline.name, Timeline);
};

export default Timeline;

import Progress from "./src/index.vue";

Progress.install = Vue => {
    Vue.component(`fox${Progress.name}`, Progress);
};

export default Progress;

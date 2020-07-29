import Steps from "./src/index.vue";

Steps.install = Vue => {
    Vue.component(`fox${Steps.name}`, Steps);
};

export default Steps;

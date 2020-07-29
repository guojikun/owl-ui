import Main from "./src/main.vue";

Main.install = Vue => {
    Vue.component(`fox${Main.name}`, Main);
};

export default Main;

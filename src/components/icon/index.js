import Icon from "./src/icon.vue";

Icon.install = Vue => {
    Vue.component(`fox${Icon.name}`, Icon);
};

export default Icon;

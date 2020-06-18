import Icon from "./src/icon.vue";

Icon.install = Vue => {
    Vue.component(`Owl${Icon.name}`, Icon);
};

export default Icon;

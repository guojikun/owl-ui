import Tooltip from "./src/index.vue";

Tooltip.install = Vue => {
    Vue.component(`fox${Tooltip.name}`, Tooltip);
};

export default Tooltip;

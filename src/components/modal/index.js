import Tooltip from "./src/index.vue";

Tooltip.install = Vue => {
    Vue.component(Tooltip.name, Tooltip);
};

export default Tooltip;

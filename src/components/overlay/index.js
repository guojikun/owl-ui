import Overlay from "./src/overlay.vue";

Overlay.install = Vue => {
    Vue.component(`Owl${Overlay.name}`, Overlay);
};

export default Overlay;

import Divider from "./src/divider.vue";

Divider.install = Vue => {
    Vue.component(`fox${Divider.name}`, Divider);
};

export default Divider;

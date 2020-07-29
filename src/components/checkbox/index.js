import Checkbox from "./src/index.vue";

Checkbox.install = Vue => {
    Vue.component(`fox${Checkbox.name}`, Checkbox);
};

export default Checkbox;

import Collapse from "./src/collapse.vue";

Collapse.install = vue => {
    vue.component(`fox${Collapse.name}`, Collapse);
};

export default Collapse;

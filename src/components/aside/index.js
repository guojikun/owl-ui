import Aside from "./src/aside.vue";

Aside.install = Vue => {
    Vue.component(`fox${Aside.name}`, Aside);
};

export default Aside;

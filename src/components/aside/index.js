import Aside from "./src/aside.vue";

Aside.install = Vue => {
    Vue.component(Aside.name, Aside);
};

export default Aside;

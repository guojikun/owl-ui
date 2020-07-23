import mxAside from "./src/aside.vue";

mxAside.install = Vue => {
    Vue.component(mxAside.name, mxAside);
};

export default mxAside;

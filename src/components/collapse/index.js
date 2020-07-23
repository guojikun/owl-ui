import mxCollapse from "./src/collapse.vue";

mxCollapse.install = vue => {
    vue.component(mxCollapse.name, mxCollapse);
};

export default mxCollapse;

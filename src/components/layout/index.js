import mxLayout from "./src/layout.vue";

mxLayout.install = Vue => {
    Vue.component(mxLayout.name, mxLayout);
};

export default mxLayout;

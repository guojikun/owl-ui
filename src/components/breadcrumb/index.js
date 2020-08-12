import Breadcrumb from "./src/breadcrumb.vue";

Breadcrumb.install = vue => {
    vue.component(Breadcrumb.name, Breadcrumb);
};

export default Breadcrumb;

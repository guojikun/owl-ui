import MxBreadcrumb from "./src/breadcrumb.vue";

MxBreadcrumb.install = vue => {
    vue.component(MxBreadcrumb.name, MxBreadcrumb);
};

export default MxBreadcrumb;

import MxBreadcrumbItem from "./src/breadcrumb-item.vue";

MxBreadcrumbItem.install = vue => {
    vue.component(MxBreadcrumbItem.name, MxBreadcrumbItem);
};

export default MxBreadcrumbItem;

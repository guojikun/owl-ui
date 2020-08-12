import BreadcrumbItem from "./src/breadcrumb-item.vue";

BreadcrumbItem.install = vue => {
    vue.component(BreadcrumbItem.name, BreadcrumbItem);
};

export default BreadcrumbItem;

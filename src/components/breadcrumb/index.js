import Breadcrumb from "./src/breadcrumb.vue";

Breadcrumb.install = vue => {
    vue.component(`fox${Breadcrumb.name}`, Breadcrumb);
};

export default Breadcrumb;

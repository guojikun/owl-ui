import Layout from "./src/layout.vue";

Layout.install = Vue => {
    Vue.component(`fox${Layout.name}`, Layout);
};

export default Layout;

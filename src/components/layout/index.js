import Layout from "./src/layout.vue";

Layout.install = Vue => {
    Vue.component(Layout.name, Layout);
};

export default Layout;

import Header from "./src/header.vue";

Header.install = Vue => {
    Vue.component(Header.name, Header);
};

export default Header;

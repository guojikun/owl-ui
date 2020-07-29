import Header from "./src/header.vue";

Header.install = Vue => {
    Vue.component(`fox${Header.name}`, Header);
};

export default Header;

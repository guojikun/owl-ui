import Footer from "./src/footer.vue";

Footer.install = Vue => {
    Vue.component(`fox${Footer.name}`, Footer);
};

export default Footer;

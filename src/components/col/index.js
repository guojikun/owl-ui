import Col from "./src/col.vue";

Col.install = vue => {
    vue.component(`fox${Col.name}`, Col);
};

export default Col;

import Row from "./src/row.vue";

Row.install = vue => {
    vue.component(`fox${Row.name}`, Row);
};

export default Row;

import Table from "./src/table.vue";

Table.install = vue => {
    vue.component(`fox${Table.name}`, Table);
};

export default Table;

import mxTable from "./src/table.vue";

mxTable.install = vue => {
    vue.component(mxTable.name, mxTable);
};

export default mxTable;

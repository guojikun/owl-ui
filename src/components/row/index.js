import mxRow from "./src/row.vue";

mxRow.install = vue => {
    vue.component(mxRow.name, mxRow);
};

export default mxRow;

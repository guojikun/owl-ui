import mxCell from "./src/cell.vue";

mxCell.install = vue => {
    vue.component(mxCell.name, mxCell);
};

export default mxCell;

import mxCellGroup from "./src/cell-group.vue";

mxCellGroup.install = vue => {
    vue.component(mxCellGroup.name, mxCellGroup);
};
export default mxCellGroup;

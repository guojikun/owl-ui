import mxCol from "./src/col.vue";

mxCol.install = vue => {
    vue.component(mxCol.name, mxCol);
};

export default mxCol;

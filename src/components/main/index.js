import mxMain from "./src/main.vue";

mxMain.install = Vue => {
    Vue.component(mxMain.name, mxMain);
};

export default mxMain;

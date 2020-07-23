import mxHeader from "./src/header.vue";

mxHeader.install = Vue => {
    Vue.component(mxHeader.name, mxHeader);
};

export default mxHeader;

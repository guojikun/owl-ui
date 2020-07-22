import Code from "./src/code.vue";

Code.install = Vue => {
    Vue.component(`owl${Code.name}`, Code);
};

export default Code;

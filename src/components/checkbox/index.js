import mxCheckbox from "./src/index.vue";

mxCheckbox.install = Vue => {
    Vue.component(mxCheckbox.name, mxCheckbox);
};

export default mxCheckbox;

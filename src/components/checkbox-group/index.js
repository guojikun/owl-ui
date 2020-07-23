import mxCheckboxGroup from "./src/index.vue";

mxCheckboxGroup.install = Vue => {
    Vue.component(mxCheckboxGroup.name, mxCheckboxGroup);
};

export default mxCheckboxGroup;

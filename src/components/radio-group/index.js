import mxRadioGroup from "./src/index.vue";

mxRadioGroup.install = Vue => {
    Vue.component(mxRadioGroup.name, mxRadioGroup);
};

export default mxRadioGroup;

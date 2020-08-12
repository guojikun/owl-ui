import RadioGroup from "./src/index.vue";

RadioGroup.install = Vue => {
    Vue.component(RadioGroup.name, RadioGroup);
};

export default RadioGroup;

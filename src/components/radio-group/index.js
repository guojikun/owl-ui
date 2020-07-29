import RadioGroup from "./src/index.vue";

RadioGroup.install = Vue => {
    Vue.component(`fox${RadioGroup.name}`, RadioGroup);
};

export default RadioGroup;

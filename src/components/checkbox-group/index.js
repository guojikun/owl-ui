import CheckboxGroup from "./src/index.vue";

CheckboxGroup.install = Vue => {
    Vue.component(`fox${CheckboxGroup.name}`, CheckboxGroup);
};

export default CheckboxGroup;

import Select from "./src/select.vue";

Select.install = Vue => {
    Vue.component(Select.name, Select);
};

export default Select;

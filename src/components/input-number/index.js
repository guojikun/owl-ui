import InputNumber from "./src/input-number.vue";

InputNumber.install = function(vue) {
    vue.component(`fox${InputNumber.name}`, InputNumber);
};

export default InputNumber;

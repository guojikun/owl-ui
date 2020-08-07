import Input from "./src/input.vue";

Input.install = function(vue) {
    vue.component(`fox${Input.name}`, Input);
};

export default Input;

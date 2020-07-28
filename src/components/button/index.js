import Button from "./src/button.vue";

Button.install = Vue => {
    Vue.component(`fox${Button.name}`, Button);
};

export default Button;

import Button from "./src/button.vue";

Button.install = Vue => {
    Vue.component(`Owl${Button.name}`, Button);
};

export default Button;

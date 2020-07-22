import Button from "./src/button.vue";

Button.install = Vue => {
    Vue.component(`owl${Button.name}`, Button);
};

export default Button;

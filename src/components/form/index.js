import Form from "./src/form.vue";

Form.install = vue => {
    vue.component(`fox${Form.name}`, Form);
};

export default Form;

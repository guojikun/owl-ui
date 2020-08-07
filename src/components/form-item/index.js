import FormItem from "../form/src/form-item.vue";

FormItem.install = vue => {
    vue.component(`fox${FormItem.name}`, FormItem);
};

export default FormItem;

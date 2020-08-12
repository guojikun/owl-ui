import Alert from "./src/alert.vue";

Alert.install = vue => {
    vue.component(Alert.name, Alert);
};

export default Alert;

import Alert from "./src/alert.vue";

Alert.install = vue => {
    vue.component(`fox${Alert.name}`, Alert);
};

export default Alert;

import mxAlert from "./src/alert.vue";

mxAlert.install = vue => {
    vue.component(mxAlert.name, mxAlert);
};

export default mxAlert;

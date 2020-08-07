import Switch from "./src/switch.vue";

Switch.install = vue => {
    vue.component(`fox${Switch.name}`, Switch);
};

export default Switch;

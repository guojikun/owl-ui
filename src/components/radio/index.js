import Radio from "./src/index.vue";

Radio.install = Vue => {
    Vue.component(`fox${Radio.name}`, Radio);
};

export default Radio;

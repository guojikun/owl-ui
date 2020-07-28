import Icon from "./src/icon.js";

Icon.install = Vue => {
    Vue.component(`fox${Icon.name}`, Icon);
};

export default Icon;

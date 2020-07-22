import Icon from "./src/icon.js";

Icon.install = Vue => {
    Vue.component(`owl${Icon.name}`, Icon);
};

export default Icon;

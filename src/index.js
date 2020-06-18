import Icon from "./components/icon/index.js";
import Button from "./components/button/index.js";

const components = [Icon, Button];

const install = Vue => {
    components.map(component => {
        Vue.use(component);
    });
};

export default {
    install,
    ...components,
};

import Icon from "./components/icon";
import Button from "./components/button";

const components = [Icon, Button];

const install = Vue => {
    components.map(c => {
        Vue.use(c);
    });
};
export const s = {
    ...components,
};
export default {
    install,
    ...components,
};

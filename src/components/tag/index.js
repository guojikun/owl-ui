import Tag from "./src/index.vue";

Tag.install = vue => {
    vue.component(`fox${Tag.name}`, Tag);
};
export default Tag;

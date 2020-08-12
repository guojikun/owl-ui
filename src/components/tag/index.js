import Tag from "./src/index.vue";

Tag.install = vue => {
    vue.component(Tag.name, Tag);
};
export default Tag;

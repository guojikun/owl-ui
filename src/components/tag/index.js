import mxTag from "./src/index.vue";

mxTag.install = vue => {
    vue.component(mxTag.name, mxTag);
};
export default mxTag;

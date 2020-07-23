import mxCollapseItem from "./src/collapse-item.vue";

mxCollapseItem.install = vue => {
    vue.component(mxCollapseItem.name, mxCollapseItem);
};

export default mxCollapseItem;

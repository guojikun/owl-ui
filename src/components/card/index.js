import mxCard from "./src/card.vue";

mxCard.install = vue => {
    vue.component(mxCard.name, mxCard);
};

export default mxCard;

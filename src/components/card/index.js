import mxCard from "./src/card.vue";

mxCard.install = vue => {
    vue.component(`fox${mxCard.name}`, mxCard);
};

export default mxCard;

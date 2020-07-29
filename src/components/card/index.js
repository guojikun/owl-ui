import Card from "./src/card.vue";

Card.install = vue => {
    vue.component(`fox${Card.name}`, Card);
};

export default Card;

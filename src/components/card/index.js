import Card from "./src/card.vue";

Card.install = vue => {
    vue.component(Card.name, Card);
};

export default Card;

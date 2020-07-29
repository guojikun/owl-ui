import Cell from "./src/cell.vue";

Cell.install = vue => {
    vue.component(`fox${Cell.name}`, Cell);
};

export default Cell;

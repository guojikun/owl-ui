import Vue from "vue";
import App from "./App.vue";

import owlUi from "./index.js";
import "./style/index.scss";

Vue.use(owlUi);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");

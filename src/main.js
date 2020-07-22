import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import owlUi from "./index.js";
import "./style/index.scss";

import owlCode from "./views/components/code";

Vue.use(owlUi);
Vue.use(owlCode);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");

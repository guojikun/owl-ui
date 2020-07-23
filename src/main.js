import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import owlUi from "./index.js";
import "./style/index.scss";

import owlCode from "./views/components/code";

import Highlight from "@/directive/highlight.js";

Vue.use(owlUi);
Vue.use(owlCode);
Vue.use(Highlight);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");

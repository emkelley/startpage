import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

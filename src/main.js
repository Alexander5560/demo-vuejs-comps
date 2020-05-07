import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCoreVideoPlayer from "vue-core-video-player";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(VueCoreVideoPlayer);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

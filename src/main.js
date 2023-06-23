import { createApp } from "vue"
import App from "./App.vue"
// import "bootstrap";
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
import { router } from "./router.js";
createApp(App).use(router).mount("#app")
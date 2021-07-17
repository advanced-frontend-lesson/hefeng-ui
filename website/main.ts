import { createApp } from "vue";
import App from "./App.vue";

import HUI from "hefeng-ui";
// import HUI from "../lib/index.js"; // umd
// import HUI from "../lib/index.esm.js"; // es module
// import Button from "../es/h-button/index.js"
import "@hefeng-ui/theme-chalk/src/index.scss";

createApp(App).use(HUI).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";

import { setAssetPath } from "@legrandav-components/core/components";

setAssetPath(window.location.origin);

createApp(App).mount("#app");

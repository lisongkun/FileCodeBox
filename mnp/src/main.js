import {
    createSSRApp
} from "vue";
import App from "./App.vue";
import uvUI from '@climblee/uv-ui'
import pinia from "@/stores";


export function createApp() {
    const app = createSSRApp(App);
    app.use(uvUI);
    app.use(pinia)

    return {
        app
    };
}

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Lara from "./presets/lara";

import Menubar from 'primevue/menubar';

const app = createApp(App);
app.use(PrimeVue, { unstyled: true, pt: Lara });


app.component('Menubar', Menubar );

app.mount("#app");
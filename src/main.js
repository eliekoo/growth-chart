import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import 'flowbite/dist/flowbite.css';
import router from './router'; // Import the router

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app');

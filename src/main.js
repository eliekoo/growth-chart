import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import 'flowbite/dist/flowbite.css';

createApp(App)
  .use(i18n)
  .mount('#app');

import { createI18n } from 'vue-i18n';
import enUS from './locales/en_us.json';
import msMY from './locales/ms_my.json';
import zhTW from './locales/zh_tw.json';
import zhCN from './locales/zh_cn.json';

const messages = {
  en_us: enUS,
  ms_my: msMY,
  zh_tw: zhTW,
  zh_cn: zhCN
};

const i18n = createI18n({
  legacy: false, // Use Composition API (if Vue 3)
  locale: 'en_us', // Default locale
  fallbackLocale: 'en_us', // Fallback locale
  messages
});


export default i18n;

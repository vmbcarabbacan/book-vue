import { createApp } from 'vue';
// eslint-disable-next-line
import { createPinia } from 'pinia';
// import io from 'socket.io-client';
import init from '@/core/init';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

loadFonts();
const pinia = createPinia();

const app = createApp(App);
// app.config.globalProperties.$socket = io('http://localhost:3000');

app
  .use(router)
  .use(pinia)
  .use(vuetify);

init(app);

router.isReady()
  .then(() => {
    app.mount('#app');
  });

import './assets/scss/main.scss'
import 'swiper/css';
import 'swiper/css/navigation';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

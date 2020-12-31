import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App';
import './style/reset.css';

createApp(App).use(router).use(store).mount('#app');

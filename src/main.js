import { createApp } from 'vue'
import router from './router/index.js'
import store from './store/index.js'
import App from './App.vue'
import 'normalize.css'
import './assets/css/setup.css'
import './assets/css/colors.css'

createApp(App).use(router).use(store).mount('#app')

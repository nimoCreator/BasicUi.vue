import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BasicUi from '@nimo/basic-ui'
import App from './App.vue'
import router from './scripts/router'

createApp(App).use(createPinia()).use(router).use(BasicUi).mount('#app')

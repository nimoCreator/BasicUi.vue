import { createApp } from 'vue'
import '@nimo/basic-ui/style.css'
import BasicUi from '@nimo/basic-ui'
import App from './App.vue'
import './playground.css'

createApp(App).use(BasicUi).mount('#app')

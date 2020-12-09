import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element3/lib/theme-chalk/index.css'
import Element3 from 'element3'
import '../src/assets/css/global.css'

//@ts-ignore
const app = createApp(App)
app.use(Element3)
app.use(store)
app.use(router)
app.mount('#app')

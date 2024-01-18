import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueClipboard from 'vue-clipboard2'

const app = createApp(App)
app.mount('#app')
app.use(VueClipboard)
app.use(ElementPlus)
app.use(ElementPlusIconsVue)

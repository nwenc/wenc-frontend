import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import { createI18n } from "vue-i18n"
import zhcn from "./languages/zh-cn"
import enau from "./languages/en-au"
import "./assets/main.css"

const messages = {
  zhcn,
  enau,
}
export const i18n = createI18n({
  legacy: false,
  locale: "zhcn",
  fallbackLocale: "enau",
  messages, // set locale messages
})

const app = createApp(App)
app.use(i18n)
app.use(createPinia())
app.use(router)
app.mount("#app")

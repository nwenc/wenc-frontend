import { app } from '@storybook/vue3';
import ElementPlus from 'element-plus';
import { createI18n } from 'vue-i18n';
import zhcn from "../src/languages/zh-cn"
import enau from "../src/languages/en-au"
import 'element-plus/dist/index.css';

const messages = {
  zhcn,
  enau,
}
const i18n = createI18n({
  legacy: false,
  locale: "zhcn",
  fallbackLocale: "enau",
  messages, // set locale messages
})

app.use(i18n)
app.use(ElementPlus)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
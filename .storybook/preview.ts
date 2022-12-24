import { app } from '@storybook/vue3';
import { Quasar } from "quasar"
import { createI18n } from 'vue-i18n';
import zhcn from "../src/languages/zh-cn"
import enau from "../src/languages/en-au"

import "quasar/dist/quasar.css"
import "@quasar/extras/material-icons/material-icons.css"

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
app.use(Quasar)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
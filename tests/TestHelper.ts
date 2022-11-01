import { i18n } from "../src/main"
import { mount as originalMount } from "@vue/test-utils"

// wrap the @vue/test-utils mount method and extend it with i18n
export const mount: typeof originalMount = (component: any, options?: any) => {
  return originalMount(component, {
    ...options,
    global: {
      ...options?.global,
      plugins: options?.global ? [...options.global.plugins, i18n] : [i18n],
    },
  })
}

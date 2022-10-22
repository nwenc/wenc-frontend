import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"
import type { UserConfig as VitestUserConfigInterface } from "vitest/config"

/**
 * Need setup test environment for vscode vitest plugin.
 * https://github.com/kwai-explore/vscode-vitest-runner/issues/1
 * Also need this extra const otherwise `defineConfig` will raise a type error.
 * https://stackoverflow.com/questions/72146352/vitest-defineconfig-test-does-not-exist-in-type-userconfigexport/73106019#73106019
 */
const vitestConfig: VitestUserConfigInterface = {
  test: {
    environment: "jsdom",
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: vitestConfig.test,
})

import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import type { UserConfig as VitestUserConfigInterface } from "vitest/config"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
/**
 * Need setup test environment for vscode vitest plugin.
 * https://github.com/kwai-explore/vscode-vitest-runner/issues/1
 * Also need this extra const otherwise `defineConfig` will raise a type error.
 * https://stackoverflow.com/questions/72146352/vitest-defineconfig-test-does-not-exist-in-type-userconfigexport/73106019#73106019
 */
const vitestConfig: VitestUserConfigInterface = {
  test: {
    environment: "jsdom",
    deps: {
      inline: ["element-plus"],
    },
    setupFiles: ["./tests/setup.ts"],
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: true,
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: vitestConfig.test,
})

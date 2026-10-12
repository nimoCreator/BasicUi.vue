import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const libSrc = fileURLToPath(new URL('./BasicUi/src', import.meta.url))

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: [
      // Playground importuje bibliotekę ze ŹRÓDEŁ, a nie z dist —
      // każda zmiana w BasicUi/src/*.vue przeładowuje się od razu (HMR), bez budowania.
      { find: /^@nimo\/basic-ui$/, replacement: `${libSrc}/index.ts` },
      // style.css w trybie dev to po prostu tokeny (reszta stylów jest w komponentach)
      { find: /^@nimo\/basic-ui\/style\.css$/, replacement: `${libSrc}/styles/tokens.css` },
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
    // jedna kopia Vue dla playgroundu i biblioteki
    dedupe: ['vue'],
  },
  server: {
    port: 5173,
  },
})

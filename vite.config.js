import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UnoCss from 'unocss/vite'
import { presetIcons, presetUno, presetAttributify } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({}),
    Components({}),
    UnoCss({
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons({
          scale: 1.5,
          warn: true,
        }),
      ],
      rules: [['bg-black-36', { 'background-color': '#121212' }]],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})

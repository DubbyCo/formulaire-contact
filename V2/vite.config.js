import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig as defineVitestConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    process.env.ANALYZE && visualizer({ open: true, emitFile: true, filename: 'stats.html' })
  ].filter(Boolean),
  test: {
    environment: 'jsdom'
  }
})

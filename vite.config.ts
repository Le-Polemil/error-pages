import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { defineConfig } from "vite"

const root = resolve(__dirname, "src")
const outDir = resolve(__dirname, "dist")

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        500: resolve(root, "500", "index.html"),
        404: resolve(root, "404", "index.html"),
      },
      output: {
        entryFileNames: "errors-assets/[name]-[hash].js",
        chunkFileNames: "errors-assets/[name]-[hash].js",
        assetFileNames: ({ name }) => {
          if (!name) return ""

          const info = name?.split?.(".") ?? []
          const extType = info[info.length - 1]
          return `errors-assets/[name]-[hash].${extType}`
        },
      },
    },
  },
})

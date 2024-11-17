import { defineConfig } from 'vite'
import viteScalaJS from '@scala-js/vite-plugin-scalajs'

export default defineConfig({
    plugins: [
        viteScalaJS()
    ],
    build: {
        outDir: 'dist', // Output directory for the build
        sourcemap: true
    }
})
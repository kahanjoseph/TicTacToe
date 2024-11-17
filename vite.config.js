import { defineConfig } from 'vite'
import viteScalaJS from '@scala-js/vite-plugin-scalajs'

export default defineConfig({
    plugins: [
        viteScalaJS({
            projectFile: './build.sbt', // Specify where your build.sbt is located
            // Add other specific configurations if needed
        })
    ],
    build: {
        outDir: 'dist', // Output directory for the build
        sourcemap: true
    }
})
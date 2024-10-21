import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import copy from 'rollup-plugin-copy'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src/',
  plugins: [react(),
    copy({
      targets: [
        { src: 'manifest.json', dest: 'dist' }, // 复制 manifest.json 到 dist 目录
        { src: "src/icons/**", dest: 'dist/icons' } // 复制 src/icons/** 到 dist/icons 目录
      ]
    })
  ],
  build: {
    outDir: path.resolve(__dirname, 'dist'),
      rollupOptions: {
      input: {
        // popup: path.resolve(__dirname, 'src/popup/index.html'),
        //   contentPage: path.resolve(__dirname, 'src/contentPage/index.html'),
          content: path.resolve(__dirname, 'src/content/content.tsx'),
          background: path.resolve(__dirname, 'src/background/service-worker.ts'),
          },
      output: {
        assetFileNames: 'assets/[name].[ext]', // 静态资源
          chunkFileNames: 'js/[name]-[hash].js', // 代码分割中产生的 chunk
          entryFileNames: (chunkInfo) => { // 入口文件
          const baseName = path.basename(chunkInfo.facadeModuleId!, path.extname(chunkInfo.facadeModuleId!))
          const saveArr = ['content', 'service-worker']
          return `[name]/${saveArr.includes(baseName) ? baseName : chunkInfo.name}.js`;
        },
          name: '[name].js'
      }
    },
  },
})

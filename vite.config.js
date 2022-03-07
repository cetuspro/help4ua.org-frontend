import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import { defineConfig, searchForWorkspaceRoot } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  },
  // inject import react from react for all JSX file
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  optimizeDeps: {
    exclude: [''],
  },
  server: {
    host: true,
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd())],
    },
  },
})

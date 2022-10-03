import path from 'path'
import WindiCSS from 'vite-plugin-windicss'

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  // ...import
  plugins: [
    WindiCSS(),
  ],
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}
export default config

const path = require('path')

module.exports = {
  base: './',
  // sourcemap: true,
  minify: 'esbuild',
  // 配置别名
  alias: {
    //vite中alias必须以斜线开头和结尾，暂时未知原因，这样其实挺不方便的
    //所以在eslint配置alias和文件中导入路径也要相应的修改
    '/@/': path.resolve(__dirname, './src'),
  },
  cssPreprocessOptions: {
    //这里注意，键名是scss不是sass！一字之差能让你折腾好久
    scss: {
      //这里写你想导入全局scss变量的路径
      //这里注意只能写相对路径，alias貌似在css中不会生效
      additionalData: "@import './src/style/a.scss';",
    },
  },
  // 配置Dep优化行为
  optimizeDeps: {
      include: ['lodash-es'],
  },
  outDir: 'dist',
  proxy: {
    '/api': {
      target: '',
      changeOrigin: true,
      rewrite: path => path.replace(/^\api/, '')
    }
  }
};
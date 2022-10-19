const path = require('path');
const CracoLessPlugin = require('craco-less');
const PrerenderSPAPlugin = require('@dreysolano/prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  babel: {
    plugins: [
      // 配置 babel-plugin-import ant按需加载
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css',
        },
        'antd',
      ],
    ],
  },
  plugins: [
    {
      // antd自定义主题
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#5E79FF' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    plugins: [
    // 预渲染
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, './build'),
        routes: ['/', '/about', '/about/a'],
        renderer: new Renderer({
          timeout: 0,
          maxConcurrentRoutes: 0,
          headless: true,
          navigationOptions: {
            timeout: 0,
          },
        }),
      }),
    ],
  },
  devServer: { /* Any devServer configuration options: https://webpack.js.org/configuration/dev-server/#devserver */ },
    // devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => { return devServerConfig; },
};

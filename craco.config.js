const path = require('path');
const CracoLessPlugin = require('craco-less');
const PrerenderSPAPlugin = require('@dreysolano/prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const resolveUrlLoader = require('craco-resolve-url-loader');

module.exports = {
  style: {
    postcssOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  babel: {
    plugins: [
      // 配置 babel-plugin-import ant按需加载
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'true',
        },
        'antd',
      ],
    ],
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    plugins: [
      // 预渲染
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, './build'),
        routes: ['/', '/products','/products/fashion', '/products/outdoor', '/products/toys', '/about', '/about/a'],
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
  devServer: {
    /* Any devServer configuration options: https://webpack.js.org/configuration/dev-server/#devserver */
  },
  // devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => { return devServerConfig; },
  plugins: [
    {
      // antd自定义主题
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            relativeUrls: false, // 是否开启相对路径
            modifyVars: { '@primary-color': '#5e79ff' },
            javascriptEnabled: true,
            //配置全局less 不需要在使用的地方导入了
            globalVars: {
              hack: `true; @import '~@/assets/css/global.less';`,
            },
          },
        },
      },
    },
  ],
};

import { defineConfig } from 'dumi';

import {
  getHost,
  target,
  outputPath,
  // publicPath
} from './buildConf/build.conf';
import { BASE } from './buildConf/const';
const publicPath = '/osComp/';
const base = '/osComp';

export default defineConfig({
  title: '药试圈',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // mode: 'site',
  // more config: https://d.umijs.org/config
  styles: [
    // `body { color: #FFF; }`,
    `https://static.mobilemd.cn/public/lib/antd/3.23.6/antd.min.css`,
  ],
  publicPath,
  base,
  locales: [
    ['en_US', 'English'],
    ['zh_CN', '中文'],
  ],
  proxy: {
    // [`!${publicPath}**`]: {
    //   target: 'http://trialos.test.com',
    //   changeOrigin: true,
    //   pathRewrite: {
    //     '^/$': '',
    //   },
    //   cookieDomainRewrite: getHost(),
    // },
    // [`/api/**`]: {
    //   target:'http://trialos.test.com',
    //   changeOrigin: true,
    //   pathRewrite: {
    //     '^/$': '',
    //   },
    //   cookieDomainRewrite: getHost(),
    // },
  },
  navs: {
    // 多语言 key 值需与 locales 配置中的 key 一致
    'en-US': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitHub',
        path: 'https://github.com/umijs/dumi',
      },
      // {
      //   title: 'Test',
      //   path: `/components/view/tm-button`,
      // },
    ],
    'zh-CN': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitHub',
        path: 'https://github.com/umijs/dumi',
      },
    ],
  },
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    // '/guide': [
    //   {
    //     title: '菜单项',
    //     path: '/test',
    //     // children: [
    //     // //   // 菜单子项（可选）
    //     //   'index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
    //     // ],
    //   },
    // ],
    // // 如果该路径有其他语言，需在前面加上语言前缀，需与 locales 配置中的路径一致
    // '/zh-CN/guide': [
    //   // 省略，配置同上
    //   {
    //     title: '菜单项',
    //     path: '/test',
    //     // children: [
    //     //   // 菜单子项（可选）
    //     //   'index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
    //     // ],
    //   },
    // ],
  },
  devServer: {
    port: 9999,
    host: getHost(),
    // https:true,
    // writeToDisk:true,
  },
  locale: {
    default: 'zh_CN',
    // default: 'en_US',
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: '_',
  },
  dva: {
    immer: true,
    // hmr: false,
  },
  targets: {
    ie: 9,
  },
  externals: {
    // 'react': 'react',
    // 'antd': 'antd',
    // 'react-dom': 'react-dom',
    // 'react-router-dom':'react-router-dom',
    // 'classnames':'classnames',
    // '@umijs/preset-react':'@umijs/preset-react',
    // 'moment':'moment',
    // 'axios':'axios',
    // 'umi':'umi',
    // 'dumi':'dumi',
    // 'history':'history',
  },
  // forkTSChecker:{
  //
  // },
  // ssr:{},
});

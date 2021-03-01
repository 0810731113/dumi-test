import { terser } from 'rollup-plugin-terser';

export default {
  esm: 'rollup',
  cjs: 'rollup',
  // umd:{
  //   name:'@tms/trialos-public-component',
  //   // minFile:false,
  // },
  // extractCSS:true,
  disableTypeCheck: true,
  extraRollupPlugins: [
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    }),
  ],
  // target:'browser',
};

const webpack = require('webpack');
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const CssToFile = require('mini-css-extract-plugin');
// const UglifyJs = require('uglifyjs-webpack-plugin');
const { loader: exLoader } = CssToFile;
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.ts',
  },
  // target: 'node',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'tms',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        // loaders: ['babel-loader', 'eslint-loader'],
        loaders: ['babel-loader'],
        // include: [path.resolve('./src'), path.resolve('./node_modules/build-dev-server-client')]
        include: [path.resolve('./src')],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file',
        exclude: /node_modules/,
        options: {
          name: 'assets/image/[name].[ext]?[hash:7]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file',
        exclude: /node_modules/,
        options: {
          name: 'assets/media/[name].[ext]?[hash:7]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file',
        exclude: /node_modules/,
        options: {
          // name: 'assets/font/[name].[ext]?[hash:7]'
          name: 'assets/font/[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        loaders: [exLoader, 'css'],
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader'],
      },
      {
        test: /\.less/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              javascriptEnabled: true,
              modifyVars: {
                // 'primary-color': '#ff0000',
                // 'link-color': '#435c71',
                // 'font-size-base': '12px',
                // 'text-color': 'rgba(0, 0, 0, 0.65)'
                //...antd_theme,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.scss', '.css', 'less'],
    alias: {
      src: path.resolve('./src'),
    },
  },
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.IS_DEV': process.env.BUILD_ENV === 'dev',
      'process.env.IS_TEST': process.env.BUILD_ENV === 'test',
      'process.env.IS_PROD': process.env.BUILD_ENV === 'prod',
    }),
    new CleanPlugin([path.resolve('./lib')], { allowExternal: true }),
    new CssToFile({
      filename: 'app.css',
      allChunks: true,
    }),
    // new HardSourceWebpackPlugin(),
  ],
  externals: {
    react: 'react',
    antd: 'antd',
    'react-dom': 'react-dom',
    'react-router-dom': 'react-router-dom',
    classnames: 'classnames',
    '@umijs/preset-react': '@umijs/preset-react',
    moment: 'moment',
    axios: 'axios',
    umi: 'umi',
    dumi: 'dumi',
    history: 'history',
    // 'moment':'moment',
    // 'md5':'md5',
    // 'lodash':'lodash',
    // 'prop-types':'prop-types',
    // 'tms-request':'tms-request',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // 如果在生产环境中使用 source-maps，必须设置为 true
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          compress: {
            drop_console: false,
          },
        },
      }),
    ],
  },
};

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
const nodeExternals = require('webpack-node-externals');

const SOURCE_PATH = path.join(__dirname, 'src');

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : 'source-map',
  entry: './src/index.ts',
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true,
    outputModule: true,
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|mjs|jsx|ts|tsx)$/,
      //   enforce: 'pre',
      //   include: SOURCE_PATH,
      //   use: [
      //     {
      //       options: {
      //         cache: true,
      //         formatter: require.resolve('react-dev-utils/eslintFormatter'),
      //         eslintPath: require.resolve('eslint'),
      //         resolvePluginsRelativeTo: __dirname
      //     },
      //       loader: require.resolve('eslint-loader')
      //     }
      //   ]
      // },
      // {
      //   test: /\.css$/i,
      //   exclude: /\.module\.css$/i,
      //   sideEffects: true,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         importLoaders: 1
      //       }
      //     },
      //     'postcss-loader'
      //   ]
      // },
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            customize: require.resolve('babel-preset-react-app/webpack-overrides')
          }
        }
      }
    ],
  },
  plugins: [
    new WebpackBar({
      name: 'Aleo Wallet Adapter',
      color: '#9f7aea'
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'AleoWalletAdapter',
      type: 'umd',
    },
    enabledWasmLoadingTypes: ['fetch', 'async-node-module'],
    webassemblyModuleFilename: 'aleo-sdk.wasm',
    globalObject: 'this',
    publicPath: 'auto'
  }
};

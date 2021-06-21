const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool(){
  if (IS_PROD){
    return false;
  }
  if(IS_DEV){
    return 'eval';
  }
}

module.exports = {
    mode: NODE_ENV ? NODE_ENV : "development",
  entry: [
    path.resolve(__dirname, '../src/client/index.tsx'),
    'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
  ],
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, '../dist/client'),
    publicPath: '/static/'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
    }
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  externals: [nodeExternals()],
  devtool: setupDevtool(),
  plugins: IS_DEV ? [
    new HotModuleReplacementPlugin(),
    new CleanWebpackPlugin()
  ] : [],
};
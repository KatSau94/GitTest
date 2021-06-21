const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    mode: "development",
  entry: path.resolve(__dirname, '../src/client/index.tsx'),
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, '../dist/client'),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  externals: [nodeExternals()]
};
const path = require('path')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const webpack = require('webpack')
const WebpackDashDynamicImport = require('@plotly/webpack-dash-dynamic-import')
const packagejson = require('./package.json')

const dashLibraryName = packagejson.name.replace(/-/g, '_')

module.exports = (env, argv) => {
  return {
    mode: argv?.mode,
    entry: { main: './src/lib/index.js' },
    output: {
      path: path.resolve(__dirname, dashLibraryName),
      chunkFilename: '[name].js',
      filename: `${dashLibraryName}.${
        argv.mode === 'development' ? 'dev' : 'min'
      }.js`,
      library: dashLibraryName,
      libraryTarget: 'window',
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'plotly.js': 'Plotly',
      'prop-types': 'PropTypes',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },

    plugins: [
      new WebpackDashDynamicImport(),
      new NodePolyfillPlugin({
        excludeAliases: ['console'],
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  }
}

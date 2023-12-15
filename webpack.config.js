const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const dashLibraryName = 'dash_jbrowse'

module.exports = function (env, argv) {
  return {
    mode: argv?.mode,
    entry: { main: './src/lib/index.tsx' },
    output: {
      path: path.resolve(dashLibraryName),
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
    },
    module: {
      rules: [
        {
          test: /\.m?[tj]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },

    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx'],
    },

    plugins: [
      new NodePolyfillPlugin({
        excludeAliases: ['console'],
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  }
}

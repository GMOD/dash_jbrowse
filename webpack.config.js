import NodePolyfillPlugin from 'node-polyfill-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

const dashLibraryName = 'dash_jbrowse'

export default function (env, argv) {
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

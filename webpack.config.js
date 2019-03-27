const path = require('path')
const CleanPlugin = require('clean-webpack-plugin');

const buildDir = '.dist'

const serverConfig = {
  cache: true,
  mode: 'development',
  optimization: {
    minimize: false
  },
  entry: {
    index: './src/index.ts',
    vendor: [
      '@babel/polyfill'
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  output: {
    path: path.join(__dirname, buildDir),
    libraryTarget: 'commonjs2',
    filename: '[name].js',
  },
  externals: {
    'index.js.map': 'index.js.map',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {targets: {node: '8.10'}, modules: false}],
                '@babel/preset-typescript'
              ],
              plugins: [
                '@babel/proposal-class-properties',
                '@babel/proposal-object-rest-spread',
                ["module-resolver", {
                  "root": ["./src"],
                  "alias": {
                    "src": "./src"
                  }
                }],
              ]
            }
          },
          {
            loader: 'ts-loader',
          }
        ]
      }
    ],
  },
  plugins: [
    new CleanPlugin()
  ],
  stats: 'minimal'
}

module.exports = serverConfig

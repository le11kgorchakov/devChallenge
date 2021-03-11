const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
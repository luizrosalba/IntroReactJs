const path = require('path') /// pega o diretorio padrao 
const HtmlWebPackPlugin = require("html-webpack-plugin");  /// adicionando plugin para HTML 

module.exports = {
  
  devtool: 'source-map',
  entry: './src/index.js', /// ponto de entrada 
  output: {
    path: path.resolve(__dirname, 'dist'), /// gera um pasta chamada dist arquivo final do projeto 
    filename: 'bundler.js' // qual o nome do bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}


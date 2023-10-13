const path = require('path');

module.exports = {
  entry: './src/index.js', // O ponto de entrada do seu aplicativo
  output: {
    filename: 'bundle.js', // O nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'), // A pasta de saída
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Regra para arquivos CSS
        use: [
          'style-loader', // Adiciona o CSS ao DOM via <style> tag
          'css-loader', // Interpreta arquivos CSS
        ],
      },
    ],
  },
};
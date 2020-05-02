const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(csv|tsv)$/i,
        use: [
          'csv-loader',
        ],
      },
      {
        test: /\.xml$/i,
        use: [
          'xml-loader',
        ],
      },
    ],
  },
};
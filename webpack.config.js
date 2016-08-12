module.exports = {
  entry: './apps/apps.js',
  output: {
    path: './build',
    filename: 'appBundle.js'
  },
  module : {
    loaders : [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};

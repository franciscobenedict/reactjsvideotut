var webpack = require('webpack');
var path = require('path');

//var controller = require('./src/client/public/react-controllers/scripts/controller.js');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }, {
        test: /\.css$/,
        loaders: ['style', 'css']
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      }, {
        test: /\.less$/,
        loaders: ['style', 'css', 'less']
      }, {
        test: /\.woff$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
      }, {
        test: /\.woff2$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
      }, {
        test: /\.(eot|ttf|svg|gif|png)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};

module.exports = config;

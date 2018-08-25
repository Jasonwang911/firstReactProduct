let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    // 多入口
    // entory: {
    //     'a': '',
    //     'b': ''
    // },
    output: {
        path:require('path').resolve('./dist'),
        filename: "build.js"
    },
  module: {
    rules: [
        {
            test:/\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: '/\.css$/',
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(jpg | png | gif)$/,
            use: ['url-loader']
        }
    ]
  },
  devtool: 'source-map', // 源码映射 方便映射
  plugins: [
    new HtmlWebpackPlugin({
      template:'./index.html'
    })
]
};
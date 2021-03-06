let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:'./src/index.js',
    // 多入口
    // entory: {
    //     'a': '',
    //     'b': ''
    // },
    output: {
        path:require('path').resolve('./dist'),
        chunkFilename: '[name].bundle.js',
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
                test: /\.(jpg|png|gif)$/,
                use: 'url-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    // 源码映射
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
          template:'./index.html'
        })
    ],
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // }
}
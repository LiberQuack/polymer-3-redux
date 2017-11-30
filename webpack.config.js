const path = require('path');

module.exports = {

    entry: './src/index.js',

    devServer: {
        contentBase: './src',
        historyApiFallback: true,
        port: 7000,
        inline: true,
        noInfo: false,
        host: '0.0.0.0',
        disableHostCheck: true
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
            }
        },{
            test: /\.html$/,
            use: ['raw-loader']
        },{
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }]
    },

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
};
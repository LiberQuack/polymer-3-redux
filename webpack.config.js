const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry: './src/index.ts',

    devServer: {
        contentBase: './src',
        historyApiFallback: true,
        port: 7001,
        inline: true,
        noInfo: false,
        host: '0.0.0.0',
        disableHostCheck: true
    },

    devtool: "source-map",

    module: {
        loaders: [{
            test: /\.svg$/,
            loader: ['svg-sprite-loader'],
        }, {
            test: /\.html$/,
            use: ['raw-loader']
        }, {
            test: /(\.ts(x?)$)/,
            exclude: /node_modules/,
            use: [
                {loader: 'ts-loader'}
            ]
        }, {
            test: /\.(gif|png|jpe?g)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                    },
                },
            ],
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ["css-loader?sourceMap=true", "resolve-url-loader", "sass-loader?sourceMap=true"]
            })
        }]
    },

    plugins: [
        new ExtractTextPlugin("styles.css")
    ],

    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['src', 'node_modules'],
    },

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
};
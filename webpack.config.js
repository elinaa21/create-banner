const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index-bundle.js"
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'] 
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: 'eslint-loader'
            }, 
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
            test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 3999,
        historyApiFallback: true,
        disableHostCheck: true,
        historyApiFallback: true,
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
        template: "./src/index.html"
        })
    ]
};
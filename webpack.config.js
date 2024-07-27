const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/todo-list/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: "assets"
                }
              },
            ],
          },
          {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        },
        {
          test: /\.(woff|woff2|ttf|otf)$/,
          use: {
            loader: 'url-loader',
          },
        },
        ],
      },
    devServer: {
        static: path.resolve(__dirname,"dist")
    }
      
};
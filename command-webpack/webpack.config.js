const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// 自定义插件
var HelloWorldPlugin = require('./plugins/HelloWorldPlugin')
var FileListPlugin = require('./plugins/FileListPlugin')

const webpack = require('webpack');
// const config = {
//   entry: {
//     app: './src/app.js',
//     vendors: './src/vendors.js'
//   }
// };
module.exports = {
    mode: 'development',
    entry: {index: './index-dep.js'},
    output: {
        filename: 'bundle-dep.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    plugins: [
        // new CleanWebpackPlugin(['dist']), // clear webpack bundle dir
        // HtmlWebpackPlugin 详细用法
        // @see https://github.com/jantimon/html-webpack-plugin#configuration 提取入口文件
        // @see https://www.webpackjs.com/plugins/extract-text-webpack-plugin/ 
        // ExtractTextPlugin提取CSS
        new HtmlWebpackPlugin({
            title: 'Output Management', // The title to use for the generated HTML document
            filename: 'index.html', // The file to write the HTML to. Defaults to index.html. You can specify a subdirectory here too (eg: assets/admin.html)
            // template: 'none',
            inject: true, // true || 'head' || 'body' || false Inject all assets into the given template or templateContent. When passing true or 'body' all javascript resources will be placed at the bottom of the body element. 'head' will place the scripts in the head element
            // favicon: './src/favicon.png', // Adds the given favicon path to the output HTML
            // minify: true, // Pass html-minifier's options as object to minify the output,
        }),
        new HelloWorldPlugin({ options: true }),
        // new BundleAnalyzerPlugin(),
        new FileListPlugin()
    ],
}
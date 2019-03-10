const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            // {
            //     include: path.resolve(__dirname, './src'),
            //     sideEffects: true,
            // }
        ]
    },
    // sideEffects: false,
    plugins: [
        new CleanWebpackPlugin(['test']), // clear webpack bundle dir
        // HtmlWebpackPlugin 详细用法
        // @see https://github.com/jantimon/html-webpack-plugin#configuration 提取入口文件
        // @see https://www.webpackjs.com/plugins/extract-text-webpack-plugin/ 
        // ExtractTextPlugin提取CSS
        new HtmlWebpackPlugin({
            title: 'Output Management', // The title to use for the generated HTML document
            filename: 'index.html', // The file to write the HTML to. Defaults to index.html. You can specify a subdirectory here too (eg: assets/admin.html)
            // template: 'none',s
            inject: true, // true || 'head' || 'body' || false Inject all assets into the given template or templateContent. When passing true or 'body' all javascript resources will be placed at the bottom of the body element. 'head' will place the scripts in the head element
            minify: true, // Pass html-minifier's options as object to minify the output,
            chunk: 'test',
        }),
        // new webpack.LoaderOptionsPlugin({
        //     test: /\.js$/,
        //     options: {
        //         sideEffects: [
        //             './src/math.js',
        //         ],
        //     }
        // })
    ],
   
}
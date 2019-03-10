const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpack = require('webpack')

// const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
// const extractSASS = new ExtractTextPlugin('stylesheets/[name]-two.css');


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    mode: 'development',
    entry: './src/cache.js',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        // 告诉webpack检测并删除空的块。设置optimization.removeEmptyChunks为false将禁用此优化。
        // removeEmptyChunks: true,
        // runtimeChunk: single 创建一个运行时文件，以便为所有生成的块共享
        runtimeChunk: 'single', 
        // 告诉webpack使用UglifyjsWebpackPlugin压缩包，mode：production 模式下，默认值为true.
        // minimize: false, // 开发环境默认false
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            },
            // automaticNameDelimiter: '~',
            // include all types of chunks
            // chunks: 'all',
            // 按需加载时的最大并行请求数
            // maxAsyncRequests: 5,
        }
    },
    devtool: 'inline-source-map',
    module: {    
        rules: [/*{
            // 注意use 的loader 的顺序，按照正常逻辑理解最开始执行的放在最后面
            // 此例子为不独立分离js--css文件 的处理方法，而是生成style 节点
            test: /\.css$/,
            use: ['css-loader', 'style-loader'],
        },*/ /*{
            // 分离单独css 的简单例子
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: 'css-loader', // use 可以是字符串 String
            })
        },*/{
            test: /\.s?css$/,
            // ExtractTextPlugin.extract 选项 fallback & use 属性
            use: ExtractTextPlugin.extract({
                // style-loader 将 JS 字符串生成为 style 节点
                // 在开发环境才使用： style-loader且allChunks: false, 默认为true，所以这个不执行
                fallback: "style-loader", // loader 可以没有此选项（例如 'style-loader'）应用于当 CSS 没有被提取(也就是一个额外的 chunk，当 allChunks: false)
                use: [{ // use 可以是数组 Array ，必填
                    loader: "css-loader", // 将 CSS 转化成 CommonJS 模块
                    options: {
                        minimize: false,
                        // 要启用 CSS source map，需要将 sourceMap 选项作为参数，传递给 sass-loader 和 css-loader
                        sourceMap: true, // 默认false
                    }
                }, {
                    // 如果你要将 Sass 代码放在实际的入口文件(entry file)之前，可以设置 data 选项。
                    // 此时 sass-loader 不会覆盖 data 选项，只会将它拼接在入口文件的内容之前。
                    // 【当 Sass 变量依赖于环境时，这一点尤其有用】
                    loader: 'sass-loader', // 将 Sass 编译成 CSS
                    options: {
                        data: "$env: " + process.env.NODE_ENV + ";",
                        // 要启用 CSS source map，需要将 sourceMap 选项作为参数，传递给 sass-loader 和 css-loader
                        sourceMap: true, // 默认false
                    }
                }]
            })
        }, /*{
            // 多个extract实例的情况处理
            test: /\.css$/,
            use: extractCSS.extract([ 'css-loader' ])
        },
        {
            test: /\.scss$/i,
            use: extractSASS.extract([ 'css-loader', 'sass-loader' ])
        },*/ {
            // 可以加载 CSS 文件，将小体积 PNG/JPG/GIF/SVG 图像转为像字体那样的 Data URL 嵌入，并复制较大的文件到输出目录
            // url-loader 功能类似于file-loader, 但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL: limit属性设置
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'url-loader', // file-loader,html-loader, 使用url-loader 必须安装file-loader
            options: {
                // [path 相对于context的位置, 也即相对于webpack.config.js 的位置]
                // [hash] 仍然可以有更详细的配置. 格式：[<hashType>:hash:<digestType>:<length>]
                // 例如：[sha512:hash:base64:7]，hashType 和 digestType 选项详细可查看官网
                // @see https://www.webpackjs.com/loaders/file-loader/#hashes
                name: '[name].[hash].[ext]',
                // 除下在output 属性中制定path 和publicPath 全局的文件输出路径和文件打包前缀公用路径，
                // file-loader 可以单独设置对应的输出路径和打包前缀路径：outputPath 和 publicPath
                limit: 10000,
                // outputPath: './static/', // 基于ouput 目录dist(output.path设置的路径) 内的相对目录，只是为了方便统一file存储目录. 也可以用 name: static/[name].[hash].[ext] 代替
                // publicPath: '/oss/', // 起作用
                // Specify loader for the file when file is greater than the limit (in bytes)
                fallback: 'file-loader', // 默认file-loader, 所以必须安装file-loader
            }
        }]
    },
    // 本节重点知识
    // 这些选项能设置模块如何被解析。webpack 提供合理的默认值，但是还是可能会修改一些解析的细节。关于 resolver 具体如何工作的更多解释说明
    resolve: {
        // 创建import 或require 的别名，来确保模块引入变得更简单.
        alias: {
            Utilities: path.resolve(__dirname, 'src/utilities'),
            templates: path.resolve(__dirname, 'src/templates'),
            math$: path.resolve(__dirname, 'src/math.js'), // $结尾表示精确匹配
        },
        aliasFields: ['browser'], // 指定一个字段，例如 browser，根据此规范进行解析。默认：
        descriptionFiles: ['package.json'], // 用于描述的 JSON 文件。默认['package.json']
        enforceExtension: false, //默认false； 如果是 true，将不允许无扩展名(extension-less)文件
        enforceModuleExtension: false, // 对模块是否需要使用的扩展（例如 loader）
        extensions: ['.js', 'json'], // 自动解析确定的扩展。默认值为：[".js", ".json"], 能够使用户在引入模块时不带扩展
        // 如果你想要添加一个目录到模块搜索目录，此目录优先于 node_modules/ 搜索
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules'),
        ], // array, 告诉 webpack 解析模块时应该搜索的目录
        plugins: [
            // 不怎么用？？
            // new DirectoryNamedWebpackPlugin()
        ],// 应该使用的额外的解析插件列表，它允许使用插件
        symlinks: false, // 是否将符号连接解析到它们的符号链接位置.默认true
    },
    // sideEffects: false,
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // @see https://www.webpackjs.com/plugins/extract-text-webpack-plugin/ 
        // ExtractTextPlugin提取CSS
        new ExtractTextPlugin({
            allChunks: false,
            filename: 'styles.css',
            // publicPath: path.resolve(__dirname, 'dist')
        }),
        // extractCSS,
        // extractSASS,
        // HtmlWebpackPlugin 详细用法
        // @see https://github.com/jantimon/html-webpack-plugin#configuration 提取入口文件
        new HtmlWebpackPlugin({
            title: 'Output Management', // The title to use for the generated HTML document
            filename: 'index.html', // The file to write the HTML to. Defaults to index.html. You can specify a subdirectory here too (eg: assets/admin.html)
            // template: 'none',s
            inject: true, // true || 'head' || 'body' || false Inject all assets into the given template or templateContent. When passing true or 'body' all javascript resources will be placed at the bottom of the body element. 'head' will place the scripts in the head element
            minify: true, // Pass html-minifier's options as object to minify the output,
            chunk: 'test',
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest'
        // })
        // new webpack.HashedModuleIdsPlugin()
    ]
}
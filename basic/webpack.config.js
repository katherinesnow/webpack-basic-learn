const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const webpack = require('webpack');
// const config = {
//   entry: {
//     app: './src/app.js',
//     vendors: './src/vendors.js'
//   }
// };
module.exports = {
	mode: 'development',
	entry: './src/index.js',
   	// entry: {
	   //  app: './src/output-index.js',
	   //  // print: './src/print.js' // 测试HMR 注释掉
   	// },
   	// entry: {
   	// 	treeShaking: './src/tree-shaking-index.js'
   	// },
   	// entry: {
   	// 	index: './src/extract-index.js',
   	// 	another: './src/another-module.js',
   	// },
   	// entry: {
   	// 	cache: './src/cache-index.js',
   	// },
	output: {
		filename: 'bundle.js',
		// filename: '[name].bundle.js',
		// filename: '[name].[hash].js',// 测试缓存
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'inline-source-map',
	// devServer: {
	// 	contentBase: './dist',
	// },
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
	        test: /\.(png|svg|jpg|gif)$/,
	        loader: 'file-loader',
	        options: {
	        	name: '[name].[ext]'
	        }
        }]
	},
	plugins: [
		new CleanWebpackPlugin(['test']), // clear webpack bundle dir
		// HtmlWebpackPlugin 详细用法
		// @see https://github.com/jantimon/html-webpack-plugin#configuration 提取入口文件
		// @see https://www.webpackjs.com/plugins/extract-text-webpack-plugin/ 
		// ExtractTextPlugin提取CSS
		new HtmlWebpackPlugin({
			title: 'Output Management', // The title to use for the generated HTML document
			filename: 'index.html', // The file to write the HTML to. Defaults to index.html. You can specify a subdirectory here too (eg: assets/admin.html)
			// template: 'none',
			inject: true, // true || 'head' || 'body' || false Inject all assets into the given template or templateContent. When passing true or 'body' all javascript resources will be placed at the bottom of the body element. 'head' will place the scripts in the head element
			favicon: './src/favicon.png', // Adds the given favicon path to the output HTML
			minify: true, // Pass html-minifier's options as object to minify the output,
			chunk: 'test',
		}),
		// new webpack.NamedModulesPlugin(),
		// new webpack.HotModuleReplacementPlugin(),
		// new webpack.optimize.CommonsChunkPlugin({
	 //       	name: 'common' // 指定公共 bundle 的名称。 输出格式仍然采用ouput参数中的 filename 属性[name].bundle.js
	 //    }),
	],
	// optimization: {
	// 	splitChunks: {
	// 		cacheGroups: {
	// 	        commons: {
	// 	            name: "common",
	// 	            chunks: "initial",
	// 	            minChunks: 2
	// 	        }
	// 	    }
	// 	}
	// },
}
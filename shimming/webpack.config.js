const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  	mode: 'development',
    entry: './src/index.js',
    output: {
      	filename: 'bundle.js',
      	path: path.resolve(__dirname, 'dist')
   	},
   	plugins: [
	    new webpack.ProvidePlugin({
	       _: 'lodash',
	       join: ['lodash', 'join'], // 我们还可以使用 ProvidePlugin 暴露某个模块中单个导出值，只需通过一个“数组路径”进行配置（例如 [module, child, ...children?]）。所以，让我们做如下设想，无论 join 方法在何处调用，我们都只会得到的是 lodash 中提供的 join 方法
	    }),
	    new HtmlWebpackPlugin({
			title: 'Output Management', // The title to use for the generated HTML document
			filename: 'index.html', // The file to write the HTML to. Defaults to index.html. You can specify a subdirectory here too (eg: assets/admin.html)
			// template: 'none',
			inject: true, // true || 'head' || 'body' || false Inject all assets into the given template or templateContent. When passing true or 'body' all javascript resources will be placed at the bottom of the body element. 'head' will place the scripts in the head element
			minify: true, // Pass html-minifier's options as object to minify the output,
			chunk: 'test',
		}),
   	],
   	module: {
	    // rules: [
	    //    {
	    //      test: require.resolve('./src/index.js'),
	    //      use: 'imports-loader?this=>window'
	    //    },
	    // ]
   	},
  };
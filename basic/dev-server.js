const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

const webpackConfig = require('./webpack.config.js')

const options = {
	contentBase: path.join(__dirname, "./"), // './' ????? 推荐使用绝对路径. 默认情况下，将使用当前工作目录作为提供内容的目录
	// compress: true, // 一切服务都启用gzip 压缩; webpack-dev-server --compress
	// historyApiFallback: {},
	hot: true,
	// stats: 'minimal', // minimal 常用：只在发生错误或有新的编译时输出
	publicPath: '/',
	overlay: { 
		// Shows a full-screen overlay in the browser when there are compiler errors or warnings. Disabled by default. If you want to show only compiler errors:
		warnings: true,
		errors: true,
	},
	// socket: 'socket',
}

// webpackDevServer.addDevServerEntrypoints(webpackConfig, options) // 添加整个会报错
const compiler = webpack(webpackConfig)
const server = new webpackDevServer(compiler, options)
server.listen(8081, (err) => {
	console.log('dev server listending on port 8081')
})


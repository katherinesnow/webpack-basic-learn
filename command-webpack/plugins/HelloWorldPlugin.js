function HelloWorldPlugin(options) {
}

HelloWorldPlugin.prototype.apply= function(compiler) {
    compiler.plugin('done', function() {
        console.log('Hello World')
        return
    })

    compiler.plugin('compilation', function(compilation) {
        compilation.plugin('optimize', function() {
            console.log('Assets are being optimized.')
        })
    })
}

module.exports = HelloWorldPlugin
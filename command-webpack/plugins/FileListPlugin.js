function FileListPlugin(options) {}
// compilation 上的modules,chunks, assets 怎么解释？
// compilation.modules：每一个资源文件都会被编译成一个模块，每个模块module.fileDependencies记录了模块依赖的其他模块
// compilation.chunks, 是entry 的每个配置项以及调用require.ensure()的模块, 
// 每个chunk的， chunk.modules为chunk包含的模块以及模块所依赖的模块， chunk.files为每个配置项最后的输出结果文件，这里的值可以从compilation.assets获得
// compilation.assets，整个打包流程最终要输出的文件


FileListPlugin.prototype.apply = function(compiler) {
    // console.log(compiler, '====compiler====')
    // compile（'编译器'对'开始编译'这个事件的监听）
    compiler.plugin('compile', function(params) {
        // console.log(params)
        console.log("The compiler is starting to compile...");
    })

    // compilation（'编译器'对'编译ing'这个事件的监听
    compiler.plugin('compilation', function(compilation) {
        console.log('The compiler is starting a new compilation')
        // 在compilation事件监听中，我们可以访问compilation引用，它是一个代表编译过程的对象引用
        // 我们一定要区分compiler和compilation，一个代表编译器实体，另一个代表编译过程
        
        // optimize('编译过程'对'优化文件'这个事件的监听)
        compilation.plugin('optimize', function() {
            console.log('The compilation is starting to optimize files..')
        })
    })

    // emit 钩子---生成资源到 output 目录之前
    // compiler.plugin('***')就相当于给compiler设置了事件监听
    compiler.plugin('emit', function(compilation, callback) {
        console.log('The compilation is going to emit files')
        // console.log(typeof (compilation.chunks), '===compilation.chunks')
        // compilation.chunks是块的集合（构建后将要输出的文件，即编译之后得到的结果）
        compilation.chunks.forEach(function(chunk) {
            console.log('====chunk.name====', chunk.name)
            // chunk.modules是模块的集合（构建时webpack梳理出的依赖，即import、require的module）
            // 形象一点说：chunk.modules是原材料，下面的chunk.files才是最终的成品
            chunk._modules.forEach(function(module) {
                // console.log(module, '====module==')

            })

             // module.fileDependencies就是具体的文件，最真实的资源【举例，在css中@import("reset.css")，这里的reset.css就是fileDependencie】
            compilation.fileDependencies.forEach(function(filePath) {
                // console.log('filePath====', filePath)
                // 到这一一步，就可以操作源文件了.
            })

            // 最终生成的文件的集合
            chunk.files.forEach(function(filename) {
                // source() 可以得到每个文件的源码
                var source = compilation.assets[filename].source()
                // console.log(source, '====生成文件的代码===')
            })
        })

        var filelist = 'In this build:\n\n'
        // filelist += compiler.toString()
        for (var filename in compilation.assets) {
            filelist += ('- '+ filename +'\n');
        }

        compilation.assets['filelist.md'] = {
            source: function() {
                return filelist
            },
            size: function() {
                return filelist.length
            }
        }
        callback()

    })

    
}

module.exports = FileListPlugin
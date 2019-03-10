// 如果我们在部署新版本时不更改资源的文件名，浏览器可能会认为它没有被更新，就会使用它的缓存版本。由于缓存的存在，当你需要获取新的代码时，就会显得很棘手。
// 此指南的重点在于通过必要的配置，以确保 webpack 编译生成的文件能够被客户端缓存，而在文件内容变化后，能够请求到新的文件

// 通过使用 output.filename 进行文件名替换，可以确保浏览器获取到修改后的文件。[hash] 替换可以用于在文件名中包含一个构建相关(build-specific)的 hash，但是更好的方式是使用 [chunkhash] 替换，在文件名中包含一个 chunk 相关(chunk-specific)的哈希。

// 1. 提取模板 webpack.optimize.CommonsChunkPlugin

import _ from 'lodash'
import Print from './print';

function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.onclick = Print.bind(null, 'Hello webpack!');
    console.log(55)
    element.appendChild(button);

    // button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    //     var print = module.default;

    //     print();
    // });
    return element;
}

document.body.appendChild(component());

// main bundle 会随着自身的新增内容的修改，而发生变化。
// vendor bundle 会随着自身的 module.id 的修改，而发生变化。
// manifest bundle 会因为当前包含一个新模块的引用，而发生变化。

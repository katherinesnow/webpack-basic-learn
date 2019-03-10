// import { cube } from './math.js'
import { cube } from 'math' // 精确匹配, 寻找到math.js
// import { cube } from 'math/file.js'; // 非精确匹配，触发普通解析, 解析路径node_modules/math/file.js

// import { isAndroid } from './utilities/utils'
import { isAndroid } from 'Utilities/utils'

// 样式文件处理
import './base.scss'
import './index.css'

// 图片资源文件处理
import imageRes from './res.jpg'

function component () {
    var element = document.createElement('pre')
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n')
    console.log(isAndroid())

    var myImageRes = new Image();
    myImageRes.src = imageRes
    element.appendChild(myImageRes)

    return element
}

document.body.appendChild(component())
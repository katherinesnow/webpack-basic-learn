import _ from 'lodash';


function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    // @see https://www.webpackjs.com/api/module-methods/#import-
    // 参数选项: webpackChunkName, webpackMode-----
    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    // 注意，在注释中使用了 webpackChunkName。 这样做会导致我们的 bundle 被命名为 print.bundle.js ，而不是 [id].bundle.js（默认[id]）
    button.onclick = e => import(/* webpackChunkName: "print", webpackMode: eager */ './print').then(module => {
        var print = module.default;

        print();
    });

    return element;
  }

document.body.appendChild(component());
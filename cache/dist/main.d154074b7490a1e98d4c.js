(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/cache.js":
/*!**********************!*\
  !*** ./src/cache.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/print.js");
// 如果我们在部署新版本时不更改资源的文件名，浏览器可能会认为它没有被更新，就会使用它的缓存版本。由于缓存的存在，当你需要获取新的代码时，就会显得很棘手。
// 此指南的重点在于通过必要的配置，以确保 webpack 编译生成的文件能够被客户端缓存，而在文件内容变化后，能够请求到新的文件

// 通过使用 output.filename 进行文件名替换，可以确保浏览器获取到修改后的文件。[hash] 替换可以用于在文件名中包含一个构建相关(build-specific)的 hash，但是更好的方式是使用 [chunkhash] 替换，在文件名中包含一个 chunk 相关(chunk-specific)的哈希。

// 1. 提取模板 webpack.optimize.CommonsChunkPlugin




function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack'], ' ');
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


/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return print; });
function print(text) {
   console.log(text);
};

/***/ })

},[["./src/cache.js","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByaW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRXNCO0FBQ007O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw2Q0FBQztBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEUiLCJmaWxlIjoibWFpbi5kMTU0MDc0Yjc0OTBhMWU5OGQ0Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOWmguaenOaIkeS7rOWcqOmDqOe9suaWsOeJiOacrOaXtuS4jeabtOaUuei1hOa6kOeahOaWh+S7tuWQje+8jOa1j+iniOWZqOWPr+iDveS8muiupOS4uuWug+ayoeacieiiq+abtOaWsO+8jOWwseS8muS9v+eUqOWug+eahOe8k+WtmOeJiOacrOOAgueUseS6jue8k+WtmOeahOWtmOWcqO+8jOW9k+S9oOmcgOimgeiOt+WPluaWsOeahOS7o+eggeaXtu+8jOWwseS8muaYvuW+l+W+iOajmOaJi+OAglxyXG4vLyDmraTmjIfljZfnmoTph43ngrnlnKjkuo7pgJrov4flv4XopoHnmoTphY3nva7vvIzku6Xnoa7kv50gd2VicGFjayDnvJbor5HnlJ/miJDnmoTmlofku7bog73lpJ/ooqvlrqLmiLfnq6/nvJPlrZjvvIzogIzlnKjmlofku7blhoXlrrnlj5jljJblkI7vvIzog73lpJ/or7fmsYLliLDmlrDnmoTmlofku7ZcclxuXHJcbi8vIOmAmui/h+S9v+eUqCBvdXRwdXQuZmlsZW5hbWUg6L+b6KGM5paH5Lu25ZCN5pu/5o2i77yM5Y+v5Lul56Gu5L+d5rWP6KeI5Zmo6I635Y+W5Yiw5L+u5pS55ZCO55qE5paH5Lu244CCW2hhc2hdIOabv+aNouWPr+S7peeUqOS6juWcqOaWh+S7tuWQjeS4reWMheWQq+S4gOS4quaehOW7uuebuOWFsyhidWlsZC1zcGVjaWZpYynnmoQgaGFzaO+8jOS9huaYr+abtOWlveeahOaWueW8j+aYr+S9v+eUqCBbY2h1bmtoYXNoXSDmm7/mjaLvvIzlnKjmlofku7blkI3kuK3ljIXlkKvkuIDkuKogY2h1bmsg55u45YWzKGNodW5rLXNwZWNpZmljKeeahOWTiOW4jOOAglxyXG5cclxuLy8gMS4g5o+Q5Y+W5qih5p2/IHdlYnBhY2sub3B0aW1pemUuQ29tbW9uc0NodW5rUGx1Z2luXHJcblxyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCBQcmludCBmcm9tICcuL3ByaW50JztcclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgLy8gTG9kYXNoLCBub3cgaW1wb3J0ZWQgYnkgdGhpcyBzY3JpcHRcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xyXG4gICAgLy8gZWxlbWVudC5vbmNsaWNrID0gUHJpbnQuYmluZChudWxsLCAnSGVsbG8gd2VicGFjayEnKTtcclxuICAgIGNvbnNvbGUubG9nKDU1KVxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cclxuICAgIC8vIGJ1dHRvbi5vbmNsaWNrID0gZSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwcmludFwiICovICcuL3ByaW50JykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgLy8gICAgIHZhciBwcmludCA9IG1vZHVsZS5kZWZhdWx0O1xyXG5cclxuICAgIC8vICAgICBwcmludCgpO1xyXG4gICAgLy8gfSk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XHJcblxyXG4vLyBtYWluIGJ1bmRsZSDkvJrpmo/nnYDoh6rouqvnmoTmlrDlop7lhoXlrrnnmoTkv67mlLnvvIzogIzlj5HnlJ/lj5jljJbjgIJcclxuLy8gdmVuZG9yIGJ1bmRsZSDkvJrpmo/nnYDoh6rouqvnmoQgbW9kdWxlLmlkIOeahOS/ruaUue+8jOiAjOWPkeeUn+WPmOWMluOAglxyXG4vLyBtYW5pZmVzdCBidW5kbGUg5Lya5Zug5Li65b2T5YmN5YyF5ZCr5LiA5Liq5paw5qih5Z2X55qE5byV55So77yM6ICM5Y+R55Sf5Y+Y5YyW44CCXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50KHRleHQpIHtcclxuICAgY29uc29sZS5sb2codGV4dCk7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
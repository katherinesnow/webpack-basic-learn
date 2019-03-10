export const A = 1
export const B = 2
export const C = 4

// export default 用在匿名函数前
export default function () {
  console.log('foo');
}

// export default 用在非匿名函数前
// export default function foo() {
//   console.log('foo');
// }
// foo函数的函数名foo，在模块外部是无效的。加载的时候，视同匿名函数加载
// 第一组是使用export default时，对应的import语句不需要使用大括号；第二组是不使用export default时，对应的import语句需要使用大括号。
 
// 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的
// import { default as foo } from 'modules'

// 正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句
// // 正确
// export var a = 1;

// // 正确
// var a = 1;
// export default a;

// // 错误
// export default var a = 1;
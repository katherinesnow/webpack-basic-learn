// const { SyncHook, SyncBailHook } = require('tapable')
// const { SyncBailHook } = require('tapable')
// const { SyncLoopHook } = require('tapable')


class SyncHook {
    // tasks 数组用于存储事件处理函数, call 方法调用时传入参数超过创建SyncHook实例传入的数组长度时，多余参数可处理为undefined,
    // 也可以在参数不足时抛出异常，不灵活，后面的例子中就不再这么写了.
    constructor(args) {
        this.args = args
        this.tasks = []
    }

    tap(name, task) {
        console.log(this, '====this')
        this.tasks.push(task)
    }

    call(...args) {
        // 只根this.args 的长度有关系，和它内部传入的值没有关系
        if (args.length < this.args.length) throw new Error('参数不足异常')

        // 传入参数严格对应穿件实例传入数组的规定的参数，执行时多余的参数返回undefinend
        args = args.slice(0, this.args.length)

        this.tasks.forEach(task => task(...args))
    }
}

class SyncBailHook {
    constructor(args) {
        this.args = args
        this.tasks = []
    }
    tap(name, task) {
        this.tasks.push(task)
    }

    call(...args) {
        // 传入参数严格对应创建实例传入数组中的规定的参数，执行时多余的参数为 undefined
        args = args.slice(0, this.args.length)
        let i = 0, ret

        do {
            ret = this.tasks[i++](...args)
        } while(!ret)
    }
}

class SyncLoopHook {
    constructor(args) {
        this.args = args
        this.tasks = []
    }

    tap(name, task) {
        this.tasks.push(task)
    }

    call(...args) {
        // 传入参数严格对应创建实例传入数组中的规定的参数，执行时多余的参数为 undefined
        args = args.slice(0, this.args.length);
        // 依次执行事件处理函数，如果返回值为 true，则继续执行当前事件处理函数
        // 直到返回 undefined，则继续向下执行其他事件处理函数
        this.tasks.forEach(task => {
            let ret
            do {
                ret = task(...args)
            } while (ret === true || !(ret === undefined))
        })
    }
}

// 在tapable 结构的SyncHook 是一个类，注册事件需先创建实例，创建实例时支持传入一个数组
// 数组内存储事件出发时传入的参数
// 实例的tap 方法用于注册事件，支持传入两个参数, 一个参数为事件名称，在webpack中一班用于存储事件对应的插件名称;第二个参数为事件处理函数，
// 函数参数为执行 call 方法触发事件时所传入的参数的形参
 
// let syncHook = new SyncHook(["name", 'age'])
// // 注册事件
// syncHook.tap('1', (name, age) => {
//     console.log('1', name, age)
// })

// syncHook.tap('2', (name, age) => {
//     console.log('2', name, age)
// })

// syncHook.tap('3', (name, age) => {
//     console.log('3', name, age)
// })

// syncHook.call('panda', 18)


// 创建实例
// let syncBailHook = new SyncBailHook(['name', 'age'])
// // 注册事件
// syncBailHook.tap('1', (name, age) => {
//     console.log('1', name, age)
// })
// syncBailHook.tap('2', (name, age) => {
//     console.log('2', name, age)
//     return 2
// })
// syncBailHook.tap('3', (name, age) => {
//     console.log('3', name, age)
// })
// syncBailHook.call('panda', 18)



// let syncLoopHook = new SyncLoopHook(['name', 'age'])

// // 定义辅助变量
// let total1 = 0
// let total2 = 0

// syncLoopHook.tap('1', (name, age) => {
//     console.log('1', name, age, total1)
//     return total1 ++ < 2 ? true : undefined
// })

// syncLoopHook.tap('2', (name, age) => {
//     console.log('2', name, age, total2)
//     return total2++ < 2 ? true : undefined
// })

// syncLoopHook.tap('3', (name, age) => {
//     console.log('3', name, age)
// })

// syncLoopHook.call('panda', 18)

// 1 panda 18 0
// 1 panda 18 1
// 1 panda 18 2
// 2 panda 18 0
// 2 panda 18 1
// 2 panda 18 2
// 3 panda 18

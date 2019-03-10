// const { AsyncParallelHook } = require("tapable")
class AsyncParallelHook {
    constructor(args) {
        this.args = args
        this.tasks = []
    }

    tapAsync(name ,task) {
        this.tasks.push(task)
    }

    callAsync(...args) {
        // 先取出最后传入的回调参数
        let finalCallback = args.pop()
        // 传入参数严格对应创建实例传入数组中的规定的参数，执行时多余的参数为 undefined
        args = args.slice(0, this.args.length);

         // 定义一个 i 变量和 done 函数，每次执行检测 i 值和队列长度，决定是否执行 callAsync 的回调函数
        let i = 0
        let done = () => {
            if(++i === this.tasks.length) {
                finalCallback()
            }
        }
        this.tasks.forEach(task => task(...args, done))
    }
}
let asyncParallelHook = new AsyncParallelHook(['name', 'age'])

console.time('time')
asyncParallelHook.tapAsync('1', (name, age, done) => {
    setTimeout(() => {
        console.log('1', name, age, new Date())
        done()
    }, 1000)
})

asyncParallelHook.tapAsync("2", (name, age, done) => {
    settimeout(() => {
        console.log("2", name, age, new Date());
        done();
    }, 2000);
});

asyncParallelHook.tapAsync("3", (name, age, done) => {
    settimeout(() => {
        console.log("3", name, age, new Date());
        done();
        console.timeEnd("time");
    }, 3000);
});

// 触发事件，让监听函数执行
asyncParallelHook.callAsync("panda", 18, () => {
    console.log("complete");
});

// 这个例子中
// 异步并行是指，事件处理喊数内的三个定时器的异步操作最长事件未3s
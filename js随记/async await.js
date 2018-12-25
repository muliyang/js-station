//async await使用
//async 关键字是用于表示一个函数里面有异步操作的含义。它通过返回一个 Promise 对象来返回结果.
    // 它的最大的特点是：通过 async / await 将异步的操作，但是写法和结构却是和我们平时写的（同步代码）是一样
//当调用一个 async 函数时，会返回一个 Promise 对象。当这个 async 函数返回一个值时，
    // Promise 的 resolve 方法会负责传递这个值； 当 async 函数抛出异常时，Promise 的 reject 方法也会传递这个异常值。
//async 函数中可能会有 await 表达式，这会使 async 函数暂停执行，等待 Promise 的结果出来，
    // 然后恢复async函数的执行并返回解析值（resolved）。
// async/await的用途是简化使用 promises 异步调用的操作，并对一组 Promises执行某些操作。
    // 正如Promises类似于结构化回调，async/await类似于组合生成器和 promises。
// await 操作符用于等待一个Promise 对象。它只能在异步函数 async function 中使用。

//遇到 await 表达式时，会让 async 函数 暂停执行，等到 await 后面的语句（Promise）状态发生改变（resolved或者rejected）
    // 之后，再恢复 async 函数的执行（再之后 await 下面的语句），并返回解析值（Promise的值）

// async function async1(){
//     console.log('async1 start')   //2
//     await async2()
//     console.log('async1 end1')   //微 6
//     await async2()
//     console.log('async1 end')   //微  9
// }
// async function async2(){
//     console.log('async2')   //3  7
// }
// console.log('script start')    //1
// setTimeout(function(){
//     console.log('setTimeout')   //10
// },0)
// async1();
// new Promise(function(resolve){
//     console.log('promise1')   //4
//     resolve();
// }).then(function(){
//     return 1;
//     console.log('promise2')  //微  8
// })
// console.log('script end')  //5


// async function async1(){
//     console.log('async1 start')  //2
//     await async2()
//     console.log('async1 end')  //6
// }
// function async2(){
//     console.log('async2');  //3
// }
// console.log('script start')   //1
// setTimeout(function(){
//     console.log('setTimeout')   //8
// },0)
// async1();
// new Promise(function(resolve){
//     console.log('promise1')    //4
//     resolve();
// }).then(function(){
//     console.log('promise2')  //7
// })
// console.log('script end')  //5

//promise 避免回调地狱
// async function fn(){
//     const info = this.getInfo();
//     const das = this.getDas();
//     await info;
//     await das;
//     console.log('避免了回调地狱 wait等待的数据不控制先后')
// }
//
// async function fn(){
//     Promise.all([this.getInfo(),this.getDas()]).then(res=>{
//         //do sth...
//     })
// }


console.log('1');    //1
setTimeout(function() {
    console.log('2');    //5
    process.nextTick(function() {
        console.log('3');  //9
    })
    new Promise(function(resolve) {
        console.log('4');   //6
        resolve();
    }).then(function() {
        console.log('5')   //11
    })
})
process.nextTick(function() {
    console.log('6');   //3
})
new Promise(function(resolve) {
    console.log('7');   //2
    resolve();
}).then(function() {
    console.log('8')   //4
})

setTimeout(function() {
    console.log('9');   //7
    process.nextTick(function() {
        console.log('10');  //10
    })
    new Promise(function(resolve) {
        console.log('11');   //8
        resolve();
    }).then(function() {
        console.log('12')   //12
    })
})





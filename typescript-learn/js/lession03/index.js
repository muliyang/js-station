"use strict";
//ts中的函数
//es5里面的函数 
// function info(){
//     console.log('info')
// };
// let info1 = ()=>{
//     console.log('info1')
// }
// function infos():string{
//     return '123';
// }
// let infos1 = function():number{
//     return 123;
// }
//ts中的函数传参
// function info3(name:string,age:number):string{
//     return `${age}--${name}`
// };
// info3('啊哈哈',56);
// let info4 = (name:string,age:number):string =>{
//     return `${age}岁---${name}`
// }
// info4('啊哈哈',56);
//ts方法的可选参数
//在es5中 方法的实参和形参可以不一样，但是在ts中方法的实参和形参必须一样，如果不一样，需要配置可选参数
// function getInfo(name:string,age?:number):string{
//     if(age){
//         return `${age}岁---${name}`;
//     }else{
//         return `${name}`;
//     }
// }
// function getInfo2(name:string,age:number):string{
//     return '${name}'
// }
// getInfo('哈哈');
function getInfo2(name, age) {
    if (age === void 0) { age = 20; }
    return age + "\u5C81 --- " + name;
}
console.log(getInfo2('张三')); //20岁 --- 张三
console.log(getInfo2('张三', 40)); //40岁 --- 张三
//方法的剩余参数 ...运算符 接收形参传进来的值
function sum(a, b, c, d) {
    return a + b + c + d;
}
console.log(sum(1, 2, 3, 4));
function sum2() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var total = 0;
    result.map(function (i) {
        total += i;
    });
    return total;
}
console.log(sum2(1, 2, 3, 4, 5));
function sum3(a, b) {
    var result = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        result[_i - 2] = arguments[_i];
    }
    var total = a + b;
    result.map(function (i) {
        total += i;
    });
    return total;
}
console.log(sum3(3, 4, 5, 6, 7, 8));
function getInfos(name, age) {
    return age ? "my name is " + name + ",my age is " + age : "my name is " + name;
}
console.log(getInfos('xixi', 34)); //my name is xixi,my age is 34
console.log(getInfos('haha')); //my name is haha

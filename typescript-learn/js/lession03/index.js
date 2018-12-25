"use strict";
//ts中的函数
//es5里面的函数 
function info() {
    console.log('info');
}
;
var info1 = function () {
    console.log('info1');
};
function infos() {
    return '123';
}
var infos1 = function () {
    return 123;
};
//ts中的函数传参
function info3(name, age) {
    return age + "--" + name;
}
;
info3('啊哈哈', 56);
var info4 = function (name, age) {
    return age + "\u5C81---" + name;
};
info4('啊哈哈', 56);
//ts方法的可选参数
//在es5中 方法的实参和形参可以不一样，但是在ts中方法的实参和形参必须一样，如果不一样，需要配置可选参数
function getInfo(name, age) {
    if (age) {
        return age + "\u5C81---" + name;
    }
    else {
        return "" + name;
    }
}
function getInfo2(name, age) {
    return '${name}';
}
getInfo('哈哈');

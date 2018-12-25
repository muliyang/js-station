"use strict";
var str = '123';
var num = 124;
var flag = true;
var arr = [1, 2, 3];
//let arr:number[] = ['1',2,3];  编译虽然报错 但是还是会编译运行成功
console.log('arr', arr);
var ary = ['1', '2', '3'];
console.log('ary', ary);
var ary1 = [1, 2, 3];
console.log('ary1', ary1);
//元组类型
var ary2 = [1, '22', 3];
console.log('ary2', ary2);
var arr2 = [1, '22', 3];
console.log('arr2', arr2);
//枚举类型 让现实中的事物和程序中的状态联系起来
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 0] = "success";
    Flag[Flag["error"] = 1] = "error";
})(Flag || (Flag = {}));
var Flag2;
(function (Flag2) {
    Flag2[Flag2["success"] = 1] = "success";
    Flag2[Flag2["error"] = 0] = "error";
})(Flag2 || (Flag2 = {}));
var f = Flag2.success;
console.log(f); //1
var e = Flag2.error;
console.log(e); //0
//枚举类型的用法 经常在小程序中使用 00010 -1 -2 等状态码
var Status;
(function (Status) {
    Status["pending"] = "001";
    Status["paying"] = "002";
    Status["inShipment"] = "003";
})(Status || (Status = {}));
var current = Status.inShipment;
console.log("\u5F53\u524D\u8BA2\u5355\u7684\u72B6\u6001\u662F" + current); //当前订单的status是003 从字面意思可以看出是发货中 
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
    Color["orange"] = "#f60";
})(Color || (Color = {}));
;
var flower = Color.red;
console.log(flower); //1
var flower2 = Color.orange;
console.log(flower2); //'#f60'
var Car;
(function (Car) {
    Car[Car["ford"] = 0] = "ford";
    Car[Car["byd"] = 4] = "byd";
    Car[Car["nissna"] = 5] = "nissna";
})(Car || (Car = {}));
;
var myCar = Car.byd;
console.log(myCar); //4
console.log(Car.nissna); //5
console.log(Car.ford); //0
var Err;
(function (Err) {
    Err[Err["undefined"] = -1] = "undefined";
    Err[Err["null"] = -2] = "null";
    Err[Err["success"] = 0] = "success";
})(Err || (Err = {}));
var stu = Err.undefined;
console.log(stu); //-1
//任意类型 - any
var anys = [1, 'ans', 56, true];
console.log(anys); // [1, "ans", 56, true]
var anys1 = '111';
anys1 = true;
console.log(anys1); //true
// let box = document.getElementById('box');
// box.style.color = 'red';
var box = document.getElementById('box');
box.style.color = 'red';
//null 和 undefined类型
//let nums:number;
//console.log(nums);  //输出undefined 运行会报错
var nums1;
console.log(nums1); //输出undefined 正常运行
var nums2;
console.log('1', nums2);
nums2 = 4;
console.log('2', nums2);
// let nums3:null;
// nums3 = 133;  //报错
// nums3 = null; //正常
var nums4;
console.log('1', nums4); //undefined
//void类型 表示没有任何类型 一般用来表示定义的方法没有返回值
function run() {
    console.log('run es5'); //run es5
}
run();
function run2() {
    console.log('run ts'); //run ts
}
run2();
//如果方法有返回值 类型设置成返回值的类型（类型设置不一致 会提示错误）
function run3() {
    return 34;
}
//never类型 从来不会出现的值 一般不用
var nes;
nes = (function () {
    throw new Error('错误');
})();

let str:string='123';
let num:number = 124;
let flag:boolean = true;

let arr:number[] = [1,2,3];
//let arr:number[] = ['1',2,3];  编译虽然报错 但是还是会编译运行成功
console.log('arr',arr);

let ary:string[] = ['1','2','3'];
console.log('ary',ary);

let ary1:Array<number> = [1,2,3];
console.log('ary1',ary1);

//元组类型
let ary2:[number,string,number] = [1,'22',3];
console.log('ary2',ary2);

let arr2:[number,string,number] = [1,'22',3];
console.log('arr2',arr2);

//枚举类型 让现实中的事物和程序中的状态联系起来
enum Flag{
    success,
    error
}

enum Flag2{
    success = 1,
    error = 0,
}

let f:Flag2 = Flag2.success;
console.log(f); //1

let e:Flag2 = Flag2.error;
console.log(e);  //0

//枚举类型的用法 经常在小程序中使用 00010 -1 -2 等状态码

enum Status{
    pending = '001',
    paying = '002',
    inShipment = '003',
}
let current:Status = Status.inShipment;
console.log(`当前订单的状态是${current}`);   //当前订单的status是003 从字面意思可以看出是发货中 

enum Color{ blue , red , orange='#f60'};
let flower:Color = Color.red;
console.log(flower);   //1
let flower2:Color = Color.orange;
console.log(flower2);  //'#f60'

enum Car{ ford , byd=4 , nissna};
let myCar:Car = Car.byd;
console.log(myCar);       //4
console.log(Car.nissna);  //5
console.log(Car.ford);    //0

enum Err{
    'undefined' = -1,
    'null' = -2,
    'success' = 0,
}

let stu:Err = Err.undefined;
console.log(stu); //-1

//任意类型 - any
let anys:any[] = [1,'ans',56,true];
console.log(anys);   // [1, "ans", 56, true]

let anys1:any = '111';
anys1 = true;
console.log(anys1);  //true

// let box = document.getElementById('box');
// box.style.color = 'red';

let box:any = document.getElementById('box');
box.style.color = 'red';

//null 和 undefined类型
//let nums:number;
//console.log(nums);  //输出undefined 运行会报错

let nums1:undefined;
console.log(nums1)  //输出undefined 正常运行

let nums2:number | undefined;
console.log('1',nums2);
nums2 = 4;
console.log('2',nums2);

// let nums3:null;
// nums3 = 133;  //报错
// nums3 = null; //正常

let nums4:number | null | undefined;
console.log('1',nums4);  //undefined

//void类型 表示没有任何类型 一般用来表示定义的方法没有返回值
function run(){
    console.log('run es5');  //run es5
}
run();

function run2():void{
    console.log('run ts');   //run ts
}
run2();

//如果方法有返回值 类型设置成返回值的类型（类型设置不一致 会提示错误）
function run3():number{
    return 34;
}

//never类型 从来不会出现的值 一般不用
let nes:never;
nes = (()=>{
    throw new Error('错误');
})()





 

[TOC]



# typescript

## 关于typescript

>1. TypeScript 是由微软开发的一款开源的编程语言。
>2.  TypeScript 是 Javascript 的超级，遵循最新的 ES6、Es5 规范。TypeScript 扩展了 JavaScript 的语法。
>3. TypeScript 更像后端 java、C#这样的面向对象语言可以让 js 开发大型企业项目。
>4. 谷歌也在大力支持 Typescript 的推广，谷歌的 angular2.x+就是基于 Typescript 语法。
>5. 最新的 Vue 、React 也可以集成 TypeScript。

## 安装

``npm install -g typescript``  

## 检测版本

``tsc -v`` 

## 编译

- typescript文件格式是 *.ts 浏览器不能解析 需要自己编译成es5

- 可以在需要编译文件的目录下 运行命令 ``tsc 文件名`` 进行编译，例如：```tsc index.ts``` 

  ![1545106887401](C:\Users\MLY\AppData\Roaming\Typora\typora-user-images\1545106887401.png)

​         运行命令之后 会自动生成编译后的文件

​         ![1545106971205](C:\Users\MLY\AppData\Roaming\Typora\typora-user-images\1545106971205.png)

​         

## 使用编辑器实现代码自动编译（Vscode）

- 在代码所在目录运行命令 ``tsc --init	``  在目录下生成配置文件 tsconfig.json

- 打开Vscode  ->  点击'任务'  ->  '运行任务' ->  点击 'tsc:watch-tsconfig.json' 

  ![1545114005285](C:\Users\MLY\AppData\Roaming\Typora\typora-user-images\1545114005285.png)

- 打开配置文件 tsconfig.json 修改属性 'outDir' 设置编译后的文件路径

  ![1545114424364](C:\Users\MLY\AppData\Roaming\Typora\typora-user-images\1545114424364.png) 

- 项目根目录创建 index.html  在index.html中引入编译后的文件js/index.js，就可以在浏览器中访问了



## typescript中的数据类型

>**javascript** 中的数据类型：基本数据类型：String  Number  Boolean  Undefined  Null
>
>​                                              引用数据类型：Object  Function

#### **typescript**数据类型 ：

- 布尔类型 - boolean
- 字符串类型 - string
- 数字类型 - number
- 数组类型 - array
- null 和 undefined
- 元组类型 - tuple
- 枚举类型 - enum
- 任意类型 - any
- void类型
- never类型

#### typescript增加了类型校验

为了使代码更加规范 ，写ts代码的时候必须指定类型

```typescript
let num :number = 123;
let flag:boolean = true;
```

**指定类型之后,随意修改其他类型会报错**

```typescript
let str:string = 'typeString';
str = 124;
```

![1545118087545](C:\Users\MLY\AppData\Roaming\Typora\typora-user-images\1545118087545.png)

```typescript
let str:string = true;
```

![1545118291228](C:\Users\MLY\AppData\Roaming\Typora\typora-user-images\1545118291228.png)



#### 数组类型 `array`

**ts中 定义数组类型 有两种方式**

1.申明数组的每一项的类型 `: 类型 [ ]`

```typescript
 let arry:string[] = ['1','2','3'];
 let arr:number[] = [1,3,4];
 let ary:number[] = ['11','33',44]; //编译时控制台会报错 但还是可以编译运行成功  ary=['11','33',44]
```

2.申明是数组加<类型> ：`Array<类型>`

```:nut_and_bolt:
 let arry1:Array<number> = [1,3,4];
 let arr1:Array<string> = ['hah','hs','lj'];
```



#### 元组类型 `tuple`

​	属于数组的一种 , 给数组中的每一个位置指定一个类型

```:nut_and_bolt:
 let ary2:[number,string,number] = [1,'22',3];
 let arr2:[number,string,number] = [1,'22','3']; //控制台会报错 可以编译成功
```

![1545190045557](C:\Users\MLY\AppData\Roaming\Typora\typora-user-images\1545190045557.png)



#### 枚举类型 `enum`

在其他程序语言中，一般用数值来表示某种状态（例如 1：成功，0：失败），这种方式易读性比较差。在程序中用自然语言中含义清楚的单词来表示状态的值，这种方法称为枚举方法，用这种方法定义的类型称为**枚举类型**。像JAVA等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

**enum 枚举名称 { **

​	**标识符[ = 常数... ] ,**

​	**标识符[ = 常数... ] , **

​	**...**

}

```typescript
enum Flag{ success, error }

enum Flag2{
    success = 1,
    error = 0,
}
let f:Flag2 = Flag2.success;
console.log(f);   //1
let e:Flag2 = Flag2.error;
console.log(e);   //0

//枚举类型的用法 经常在小程序中使用 00010 -1 -2 等状态码
enum Status{
    pending = '001',
    paying = '002',
    inShipment = '003',
}
let current:Status = Status.inShipment;
console.log(`当前订单的状态是${current}`);  //当前订单的status是003 从字面意思可以看出是发货中

enum Err{
    'undefined' = -1,
    'null' = -2,
    'success' = 0,
}
let stu:Err = Err.undefined;
console.log(stu); //-1

//如果枚举的标识符没有赋值，那么取出来时候他的值就是下标
enum Color{ blue , red , orange='#f60'};
let flower:Color = Color.red;
console.log(flower);   //1
let flower2:Color = Color.orange;
console.log(flower2);  //'#f60'

//修改标识符的值 会影响其他标识符的值
enum Car{ ford , byd=4 , nissna};
let myCar:Car = Car.byd;
console.log(myCar);        //4
console.log(Car.nissna)；   //5
console.log(Car.ford);     //0
```



#### 任意类型 `any`

`any`类型表示的是JS中任何的值类型

```typescript
let anys:any[] = [1,'ans',56,true];
console.log(anys);   // [1, "ans", 56, true]

let anys1:any = '111';
anys1 = true;
console.log(anys1);  //true 编译不会报错

//any类型的用法
let box = document.getElementById('box');
box.style.border = '1px solid #333';  // - error TS2531: Object is possibly 'null'.

let box:any = document.getElementById('box'); //不报错的写法

```



#### `null 和 undefined`

null 和 undefined是其他类型（never）的子类型

```typescript
let nums:number;
console.log(nums);  //输出undefined 运行会报错

let nums1:undefined;
console.log(nums1)  //输出undefined 正常运行

let nums2:number | undefined;  
console.log('1',nums2);  //undefined
nums2 = 4; 
console.log('2',nums2);  //4

let nums3:null;
nums3 = 133;  //报错
nums3 = null; //正常

let nums4:number | null | undefined;
console.log('1',nums4);  //undefined

```



#### `void` 类型

void类型：表示`不是任何类型`; 一般用于定义方法的时候方法没有返回值。

```typescript
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

```



#### `never `类型

never类型表示其他类型（包括 null 和 undefined），代表从来不会出现的值，这意味着声明never的变量只能被never类型所赋值。



## typescript 中的函数

#### ts中函数 'return的值的类型' 必须和 '声明时的类型'一致

```ty
//es5中声明函数
function info(){
    console.log('info')
};
//js中的匿名函数（函数表达式）
let info1 = ()=>{
    console.log('info1')
}

//ts中的函数声明法
function infos():string{
    return '123';
}

let infos1 = function():number{
    return 123;
}
```



#### ts函数中的传参

定义函数的时候 也定义了参数的类型

```typescript
function run3(name:string,age:number):string{
    return `${age}岁--${name}`
}

let run4 = (name:string,age:number):string =>{
    return `${age}岁---${name}`
}
run4('啊哈哈',56);
```



#### 没有返回值的方法

```typescript
function run5():void{
    console.log('没有返回值')
}
run5();
```



#### 方法的可选参数

/在es5中 方法的实参和形参可以不一样，但是在ts中方法的实参和形参必须一样，如果不一样，需要配置可选参数: ` 参数名 ?: 参数类型 ; ？配置可选参数, 可选参数必须配置在参数的最后`

```typescript
function getInfo(name:string,age:number):string{
    return '${name}';
}
getInfo('哈哈');


function getInfo(name:string,age?:number):string{
    if(age){
        return `${age}岁 --- ${name}`;
    }else{
        return `${name} --- 年龄未知`;
    }
}
```



#### 方法的默认参数

调用一个方法的时候 可以指定参数的默认值

```typescript
function getInfo2(name:string,age:number=20):string{
    return `${age}岁 --- ${name}`
}
console.log(getInfo2('张三'));        //20岁 --- 张三
console.log(getInfo2('张三',40));     //40岁 --- 张三
```



#### 方法的剩余参数  

使用`...运算符 接收形参传进来的值`

```typescript
function sum(a:number, b:number, c:number, d:number):number{
    return a+b+c+d;
}
console.log(sum(1,2,3,4))    //10

function sum2(...result:number[]):number{
    let total = 0;
    result.map(i=>{
        total += i;
    })
    return total;
}
console.log(sum2(1,2,3,4,5));  //15

function sum3(a:number,b:number,...result:number[]):number{
    let total = a+b;
    result.map(i=>{
        total += i;
    })
    return total;
}
console.log(sum3(3,4,5,6,7,8));  //33
```



#### 函数的重载

java中的重载：是两个或两个以上同名函数，但是它们的参数不一样，这时候会出现重载的情况。

ts中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。（传入不同的参数 执行实现不用的结果）

ts为了兼容es5和es6， 重载的写法 和 java有区别

```typescript
//在es5中 出现同名的方法 后定义的会覆盖先定义的方法
function css(config){}
function css(config,value){}

//ts中的重载 因为ts会校验参数类型 这样写 可以实现传入不同类型的参数 共用一个方法
function getInf(name:string):string;
function getInf(age:number):number;
function getInf(str:any):any{
    if(typeof str === 'string'){
        return `my name is ${str}`;
    }else{
        return `my age is ${str}`;
    }
};

console.log(getInf(123));   //my age is 123
console.log(getInf('lili'));   //my name is lili
//getInf(true);   //运行会提示错误    

//写法2：
function getInfos(name:string):string;
function getInfos(name:string,age:number):string;
function getInfos(name:any,age?:any):any{
    return age ? `my name is ${name},my age is ${age}` : `my name is ${name}`;
}

console.log(getInfos('xixi',34));  //my name is xixi,my age is 34
console.log(getInfos('haha'));    //my name is haha
```



#### 箭头函数

箭头函数中的this指向是上下文

```typescript
setTimeout(()=>{
    alert('run');
},1000)
```
























- as


- 啊
- 啊
- 啊
- 啊
- 啊
- 啊
- 啊啊
- 啊
- 啊 
- 打就撒谎的**FDSJ**  **`FDFSF`**  

```javascript



```



```

```




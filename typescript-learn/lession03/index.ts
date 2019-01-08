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

function getInfo2(name:string,age:number=20):string{
    return `${age}岁 --- ${name}`
}
console.log(getInfo2('张三'));        //20岁 --- 张三
console.log(getInfo2('张三',40));     //40岁 --- 张三

//方法的剩余参数 ...运算符 接收形参传进来的值
function sum(a:number, b:number, c:number, d:number):number{
    return a+b+c+d;
}
console.log(sum(1,2,3,4))

function sum2(...result:number[]):number{
    let total = 0;
    result.map(i=>{
        total += i;
    })
    return total;
}
console.log(sum2(1,2,3,4,5));

function sum3(a:number,b:number,...result:number[]):number{
    let total = a+b;
    result.map(i=>{
        total += i;
    })
    return total;
}
console.log(sum3(3,4,5,6,7,8));


//函数的重载
//java中的重载：是两个或两个以上同名函数，但是它们的参数不一样，这时候会出现重载的情况。
//ts中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。（传入不同的参数 执行实现不用的结果）
//ts为了兼容es5和es6， 重载的写法 和 java有区别

//在es5中 出现同名的方法 后定义的会覆盖先定义的方法
// function css(config){}
// function css(config,value){}
    
    //ts中的重载
    // function getInf(name:string):string;
    // function getInf(age:number):number;
    // function getInf(str:any):any{
    //     if(typeof str === 'string'){
    //         return `my name is ${str}`;
    //     }else{
    //         return `my age is ${str}`;
    //     }
    // };

    // console.log(getInf(123));   //my age is 123
    // console.log(getInf('lili'));   //my name is lili
    //getInf(true);   //运行会提示错误          
    
    //换种写法
    function getInfos(name:string):string;
    function getInfos(name:string,age:number):string;
    function getInfos(name:any,age?:any):any{
        return age ? `my name is ${name},my age is ${age}` : `my name is ${name}`;
    }

    console.log(getInfos('xixi',34));  //my name is xixi,my age is 34
    console.log(getInfos('haha'));    //my name is haha

    
    //箭头函数 箭头函数中的this指向上下文
    setTimeout(()=>{
        alert('run');
    },1000)


                                 


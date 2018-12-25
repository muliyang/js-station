//ts中的函数

//es5里面的函数 
function info(){
    console.log('info')
};
let info1 = ()=>{
    console.log('info1')
}

function infos():string{
    return '123';
}

let infos1 = function():number{
    return 123;
}

//ts中的函数传参

function info3(name:string,age:number):string{
    return `${age}--${name}`
};
info3('啊哈哈',56);

let info4 = (name:string,age:number):string =>{
    return `${age}岁---${name}`
}
info4('啊哈哈',56);

//ts方法的可选参数
//在es5中 方法的实参和形参可以不一样，但是在ts中方法的实参和形参必须一样，如果不一样，需要配置可选参数

function getInfo(name:string,age?:number):string{
    if(age){
        return `${age}岁---${name}`;
    }else{
        return `${name}`;
    }
}

function getInfo2(name:string,age:number):string{
    return '${name}'
}
getInfo('哈哈');
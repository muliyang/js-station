//typescript 里面的类

//es5里面的类
//最简单的类 继承属性
// function Person(){
//     this.name = '张三';
//     this.age = 20;
// }

// let p = new Person();
// console.log(p.name);   //张三

//构造函数和原型链里面增加方法 原型链上面的属性会被多个实例共享 构造函数不会
// function Person(){
//     this.name = '张三';
//     this.age = 20;
//     this.run = function(){  //run实例方法。必须new之后才能调用
//         alert('running');
//     }
// }
// let p = new Person();
// p.run();   //running

//类里面的静态方法 不需要实例化 类.方法名 可以调用
// Person.getInfo = function(){
//     alert('my job');
// }
// Person.prototype.sex = '男';
// Person.prototype.job = function(){
//     alert('working!');
// }
// p.job();   //working!

//一个类继承另外一个类的方法和属性 原型链继承 + call 寄生组合式继承
//原型链继承 可以继承私有和公有属性 call实现传参
// function Animal(name,age){
//     this.name = name;
//     this.age = age;
//     this.run = function(){
//         console.log('running');
//     }    
// }

// function Cat(foods){
//     this.food = foods;
//     Animal.call(this,'mimi',2);  //传参
// }

// Cat.prototype = new Animal();
// var mimi = new Cat('fish');  //传参
// mimi.run();
// console.log(mimi.food);  //fish
// console.log(mimi.age);   //2
// console.log(mimi.name);  //mimi

//寄生组合式继承方法2
// function Animal(name,age){
//     this.name = name;
//     this.age = age;
//     this.run = function(){
//         console.log('running');
//     }
// }

// function Dog(foods){
//     this.foods = foods;
//     Animal.call(this,'wangcai',3);
// }

// Dog.prototype = Animal.prototype;
// var wangcai = new Dog('bones');
// console.log(wangcai.name);     //wangcai
// console.log(wangcai.age);      // 3
// console.log(wangcai.foods);   //bones
// wangcai.run();                //running


//ts中的类
// function Person(name){
//     this.name = name;
//     this.run = function(){
//         console.log(this.name);
//     }
// }

// let p = new Person('张三');  
// p.run();    //张三


//es6中声明类
// class Person{
//     constructor(name){
//         this.name = name;
//     }

//     getName(){
//         return `my name is ${this.name}`
//     }
// }

// let p = new Person('张三');
// console.log(p.name);   //张三
// console.log(p.getName());  //my name is 张三


// class Person{
//     name:string;

//     constructor(name:string){
//         this.name = name;
//     }

//     getName():string{
//         return `my name is ${this.name}`
//     }
// }

// let p = new Person('李四');
// console.log(p.name);   //李四
// console.log(p.getName());  //my name is 李四






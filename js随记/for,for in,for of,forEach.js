// for in , for of , for , forEach 的用法和区别

let a = [23,4,5,6,8];
    a.name = 'names';

// for 编程式写法 
// for 执行顺序是： let i=0; 判断i<a.length; console.log(..); i++; 判断i<a.length; console.log(..); i++...
// for 循环有continue(结束本次循环 继续下次循环) break结束全部for循环
  for(let i=0; i<a.length; i++){
      console.log(i,a[i]+',');     // 1 23, 2 4, 3 5, 4 6, 5 8,
  }

//声明式写法：
//forEach forEach没有return 即使写了return也不会生效
  a.forEach((ele,index) => {
      console.log(ele,index);  //23 0   4 1   5 2   6 3   8 4
  });
  
// for in: 可以遍历对象和数组 key of array 但是遍历数组的时候会遍历到数组的私有属性
  for(let key in a){
      console.log(key, a[key]);  
      console.log(typeof key);  //string for in 会将key转成string类型
      // 0 23 string   1 4 string   2 5 string   3 6 string   4 8 string   name names string
      // name是数组的私有属性 也被遍历了
  }

// for of: es6新增 用来遍历数组 value of array; 不能用来遍历对象
for(let val of a){
    console.log(val);  //23   4   5   6   8
}

//如果需要用for of 遍历对象 需要用到Object.keys()方法
let obj ={name:'xxx', age:14, class:3};
//Object.keys()方法 将object的key值取出来 放在一个数组里
Object.keys(obj);      // ["name", "age", "class"]
for(let val of Object.keys(obj)){
    console.log(obj[val]);     //xxx  14  3
}   //相当于将obj的key放在一个数组中 for of循环取出key 再通过key取值

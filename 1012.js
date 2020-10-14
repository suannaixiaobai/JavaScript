/*
    let person = new odject();
    person.name = 'suannai';
    person.age = 20;
    console.log(person.name);


    //对象字面量
    let person = {};
    
    //let s = '
    //    <div>
    //        <h>adsad</h>     //模板字符串
    //    </div>
    //';
    
    person1.name = 'suannai'
    person1.age = 20;

    let person2 = {
        name:'suannai',
        age:20,
    };
    console.log(person.name)


    //数组
    const oArray = new Array();

    const oArray = [];

    console.log(typeof oArray);
*/

    //数组初始化
    const heroes = [];
    console.log(heroes[0]);
    heroes[0] = '蝙蝠侠';
    heroes[1] = '蝙蝠侠';
    heroes[2] = '蝙蝠侠';
    heroes[3] = '蝙蝠侠';

    console.log(heroes);

    

//数组字面量
const svenger = [];
console,lo(avenger);





//解构造法
const array1 = [1,2,3];
let a = array[0];
let b = array[1];
let c = array[2];


const [a,b,c] = [1,2,3];
console.log('a=${a}, b=${b}, c=${c}');

const [a,b] = [1,2,3];
console.log(a);




const avengers = ['yaoyao','yaya','yayaya']
console.log(avengers.length);
avengers.length = 3;
console.log(avengers);



const avengers = ['yaoyao','yaya','yayaya']
avengers.pop(); //删除最后一个
console.log(avengers);
avengers.push('yayay'); //添加
console.log(avengers);
avengers.shift(); 
console.log(avengers); //删除第一个

const avengers = ['yaoyao','yaya','yayaya']
console.log(avengers.shift());  //查看删除的内容
console.log(avengers);

avengers.unshift('lal');
console.log(avengers);  //加第一个


const avengers = ['yaoyao','yaya','yayaya']
const heroes = ['1','2','3','4']
const oArray = avengers.concat(heroes);  //合并两个数组
console.log(avengers);
console.log(oArray);


const avengers = ['yaoyao','yaya','yayaya']   //方法二
const heroes = ['1','2','3','4']
const oArray = [...avengers,...heroes];
console.log(oArray) 


const avengers = ['yaoyao','yaya','yayaya']   //数组变字符串
const a = avengers.join('&');
console.log(a);

const avengers = ['yaoyao','yaya','yayaya']  //切片
const b = avengers.slice(1,2);
console.log(b);

const avengers = ['yaoyao','yaya','yayaya']  
const c = avengers.splice(2,2,'xiaobai',2,3);
console.log(c);
console.log(avengers);
 


const d = ['a','b','c','d']
const e = d.reverse();
console.log(e,d);

const f = [1,2,3,4]
const g = f.sort();
console.log(g,f);



const avengers = ['yaoyao','yaya','yayaya']  
const a1 = avengers.indexOf('yaoyao');
console.log(a1);

const avengers = ['yaoyao','yaya','yayaya']  //是否包含
const a2 = avengers.includes('yaoyao');
console.log(a2);


//多维数组
const ma = [[1,2],[3,4]];
console.log(ma[0][0]);


const summer = ['jun','jul','Aug']
const winter = ['xixi','jmin','wan']
const nested = [ summer, winter ]; 
console.log(nested);

const flat = [...summer, ...winter];
console.log(flat);





//set
const list = new Set();
list.add(1);
list.add(2).add(3).add(4).add(5);
console.log(list);

const list = new Set([1,2,3,4,5]);
console.log(list);


//数组去重
const a = [1,2,2,3,4,5,6,8,8,8];
const b = new Set(a);
console.log(b);
const c = [...b];
console.log(c);


const c = new Set('Hello');
console.log(c);
const d = new Set('');


const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4,size);
list4.size = 6;
console.log(list4);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4.has('brown'));
list4.delete('the');
console.log(list4);





// 内存泄漏
let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
const strong = new Set().add(array1).add(array2); 
console.log(strong.has(array1));
array1 = null; // 删除对原始对象的引用
array2 = null;
array3 = [...strong][0]; 
array4 = [...strong][1];
console.log(array3);
console.log(array4);
let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
const weak = new WeakSet().add(array1).add(array2);
console.log(weak);
array1 = null;
array2 = null;
const array3 = [...weak][0];
const array4 = [...weak][1];
console.log(array3);
console.log(array4);





//map
const romanNumerals = new Map(); 
romanNumerals.set(1,'I'); 
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V'); 
console.log(romanNumerals);
console.log(romanNumerals.size);
console.log(romanNumerals.get(3));
console.log(romanNumerals.has(5));
romanNumerals.delete(5);
console.log(romanNumerals);
romanNumerals.clear();
console.log(romanNumerals); 






//map to array
const romanNumerals = new Map();
romanNumerals.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
const oArray1 = [...romanNumerals];
const oArray2 = Array.form(romanNumerals);
console.log(oArray1);
console.log(oArray2);
/*
 数据类型
    基础类型：String、Number Boolean Symbol undefined null
    引用类型：Object/Function

对象构造函数
let oStudent = new Object();

对象字面量
let oStudent = {
    name: 'xaaaa',
    age: 21
}
oStudent.name
Array
   new Array()
   [] 
Set
  let oSet = new Set();
  oSet.add(1).add(2)
  let oSet = new Set([1,2,3]);
*/























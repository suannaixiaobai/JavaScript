// 小明和他家人在泰国旅游，到3个不同的饭店吃饭。账单(bill）分别是124元、48元和268元。
// 为了给服务员小费(tip) ，小明创建了一个简单的小费计算器函数(tipCalculator)。如果账单小于50元，
//他会给账单的20%作为小费﹔如果账单在50到200元之间，他会给账单的15%作为小费;如果账单超过200元，他会给账单的10%作为小费。
// 小明想要⒉个数组:1)一个数组包含所有三个小费(每个账单一个)﹔2)一个数组包含所有三个最终支付的金额(账单＋小费)。
// 最后把这⒉个数组输出到控制台。
const tipCalculator = bills => {
const tips = []
const costs = []
bills.forEach(bill =>{
    let tip;
    if (bill < 50){
        tip = bill * 0.2
    }else if (bill >= 50&&bill < 200){
        tip = bill * 0.15
    }else{
        tip = bill * 0.1
    };
    const cost = bill + tip
    tips.push(tip)
    costs.push(cost)
    })
    console.log(tips,costs)
};
tipCalculator([124,48,268])



// 假设有三个数a、b、c，求这三个数的平均值的函数为︰
// function mean(a， b，c) {
// return (a + b +c)/ 3;
// }
// ·1)如果要求任意个数的数字的平均值，该如何改进这个函数呢?请编写改进的
// mean1()〕函数，让该函数可以计算任意个数的数字的平均值。
// 提示∶使用扩展运算符
// ·2)请编写函数mean2()，使用数组的reduce()函数改写mean1())，让代码更
// 佳精简。
// ·3）请在第二步的基础上编写函数mean3())，实现只对数组中的偶数求平均值。
// 提示:使用回调函数和map()。
function mean(a, b, c) {
    return (a + b+ c) / 3;
   }
  console.log(mean(4, 5, 6));
  
  

  function mean1(){
    var sum=0, len=arguments.length,i;  
    for(i=0; i<len; i++){
        sum+=arguments[i];
    }
    return sum / len;               
  };
  var avg = mean1(5, 2, 4, 3, 3);       
  console.log(avg);
  

  
const arr = [5, 2, 4, 3, 3]
function mean2(arr) {
 
    return arr.reduce((acc,val) => acc+val) / arr.length;
};
console.log(mean2(arr));



const sum2 = []
const mean2 = () => {
    let l = sum2.length
    let Avg = sum2.reduce((sum2,sum) => sum2 + sum) / l
    console.log(Avg)
}
const mean3 = (arr1, callback) => {
    const arr2 = arr1.map((sum) => {
        if (sum % 2 == 0){
            return sum
        }
    })
    arr2.forEach(
        item => {
            if(item){
                sum2.push(item)
            }
        }
    )
    if(typeof(callback) ==="function"){
        callback()
    }
}
mean3([5,2,4,3,3],mean2)








//老师补充纠正
  
// function mean (...args) {
//     let sum = 0;
//     for (let arg of args) {
//         sum = arg + sum
//     }
//     return sum / args.length
// }
// console.log(mean(1,2,3,4,5,6,))

// function mean(...args) {
//     return args.reduce((sum, val) => sum +val / args.length)
// }
// console.log(mean(1,2,3,4,5,6,))


// function mean(...args) {
//     const args1 = args.filter( x => x%2 == 0)
//     return args1.reduce((sum, val) => sum +val / args1.length)
// }
// console.log(mean(1,2,3,4,5,6,))


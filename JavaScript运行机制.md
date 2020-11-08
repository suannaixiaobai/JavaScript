# JavaScript运行机制案例绘图



```
let a = 20;
const b = 30;
var c;
function multiply(e, f) {
  var g = 20;
  return e * f * g;
}
c = multiply(20, 30);
```



运行描述：

当代码运行时，JavaScript 引擎首先创建一个全局执行上下文来执行全局代码。

执行阶段，变量赋值完成。

当遇到调用函数 multiply(20, 30) 时，就创建一个新的函数执行上下文来执行该函数代码。

之后，该执行上下文进入执行阶段，该函数内的变量赋值已经完成。

该函数执行完成后，返回值被存储在 c 中。于是，全局词法环境就被更新了。之后，全局代码完成执行，程序结束。

![1](D:\xuexiruanjian\JavaScript\TyporaProjects\1.png)

![2](D:\xuexiruanjian\JavaScript\TyporaProjects\2.png)








/* 
用JavaScript编写程序，取名 `star.js`，在控制台输出如下图形：
*/

var alt = "";
var num = 5;
for(var i=1; i<=num; i++){
    var blank = "";
    for(var j=1; j<=num-i; j++){   //打印空格
        blank += " ";
    }
    var stars = "";
    for(var m=1; m<=i; m++){        //打印*
        stars += "*"+" ";
    }
    alt += blank + stars + "\n";   //字符串的拼接,拼为一行
}
for(var i=num-1; i>0; i--){       //打印的行数要减1
    var blank = "";
    for(var j=1; j<=num-i; j++){  //打印空格
        blank += " ";
    }
    var stars = "";
    for(var m=1; m<=i; m++){       //打印*
        stars += "*"+" ";
    }
    alt += blank + stars + "\n";   //字符串的拼接,拼为一行
}
console.log(alt);












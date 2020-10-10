
/*
John 和 Mike 都在不同的队打篮球。在最近的3场比赛中，John 的队得了89分、120分和103分，而 Mike 的队得了116分、94分和123分。

用 JavaScript 编写程序，存为 `ball.js`，完成以下任务：

1. 计算每队的平均分；
2. 决定哪支球队平均获胜（平均分最高），并将胜者打印到控制台。在输出中也包括平均分；
3. 然后改变分数来显示不同的赢家。别忘了考虑到可能会有平局（平均分相同）；
4. Mary 也打篮球，她的队得了97分、134分和105分。像前面一样，把平均分胜出者记录到控制台；
5. 像前面一样，改变分数以产生不同的赢家，记住可能会有平局。
*/



//John胜利
var john = (99 + 136 + 112) / 3;
var mike = (116 + 94 + 123) / 3;
var mary = (97 + 134 + 105) / 3;
console.log("John的平均分为: " + john.toFixed(1), "Mike的平均分为: " + mike.toFixed(1), "Mary的平均分为: "+ mary.toFixed(1));

if (john > mike && john > mary) {
    console.log("John以 " + john.toFixed(1) + "赢得胜利")
} else if (mike > john && mike > mary) {
    console.log("Mike以" + mike.toFixed(1) + "赢得胜利")
} else if (mary > john && mary> mike) {
    console.log("Mary以" + mary.toFixed(1) + "赢得胜利")
} else {
    console.log("比赛为平局")
}


//mike胜利
var john = (99 + 136 + 112) / 3;
var mike = (130 + 126 + 134) / 3;
var mary = (97 + 134 + 105) / 3;
console.log("John的平均分为: " + john.toFixed(1), "Mike的平均分为: " + mike.toFixed(1), "Mary的平均分为: "+ mary.toFixed(1));

if (john > mike && john > mary) {
    console.log("John以 " + john.toFixed(1) + "赢得胜利")
} else if (mike > john && mike > mary) {
    console.log("Mike以" + mike.toFixed(1) + "赢得胜利")
} else if (mary > john && mary> mike) {
    console.log("Mary以" + mary.toFixed(1) + "赢得胜利")
} else {
    console.log("比赛为平局")
}


//Mary胜利
var john = (89 + 120 + 103) / 3;
var mike = (116 + 94 + 123) / 3;
var mary = (97 + 134 + 105) / 3;
console.log("John的平均分为: " + john.toFixed(1), "Mike的平均分为: " + mike.toFixed(1), "Mary的平均分为: "+ mary.toFixed(1));

if (john > mike && john > mary) {
    console.log("John以 " + john.toFixed(1) + "赢得胜利")
} else if (mike > john && mike > mary) {
    console.log("Mike以" + mike.toFixed(1) + "赢得胜利")
} else if (mary > john && mary> mike) {
    console.log("Mary以" + mary.toFixed(1) + "赢得胜利")
} else {
    console.log("比赛为平局")
}



//平局
var john = (98 + 88 + 90) / 3;
var mike = (86 + 98 + 120) / 3;
var mary = (90 + 114 + 100) / 3;
console.log("John的平均分为: " + john.toFixed(1), "Mike的平均分为: " + mike.toFixed(1), "Mary的平均分为: "+ mary.toFixed(1));

if (john > mike && john > mary) {
    console.log("John以 " + john.toFixed(1) + "赢得胜利")
} else if (mike > john && mike > mary) {
    console.log("Mike以" + mike.toFixed(1) + "赢得胜利")
} else if (mary > john && mary> mike) {
    console.log("Mary以" + mary.toFixed(1) + "赢得胜利")
} else {
    console.log("比赛为平局")
}










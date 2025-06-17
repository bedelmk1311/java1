// // 条件式が1つの場合
// if(a){
//   aaa
// }

// // 1つの条件式で、処理を2つに分ける場合
// if(a){
//   aaa
// } else{
//   bbb
// }

// // 2つの条件式で処理を分ける場合
// if(a){
//   aaa
// } else if(b){
//   bbb
// } else{
//   ccc
// }

// // aの時はaaa、bの時はbbb、abどちらも満たさないときはccc

let orange = 100;
let apple = 120;

if(orange < apple){
  alert("オレンジの値段がりんごより安い")
} else if(orange == apple){
  alert("オレンジとりんごは同じ値段")
} else{
  alert("オレンジの値段はりんごより高い")
}

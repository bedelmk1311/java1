// while 
// 条件式が真（true）である間は繰り返し処理が実行されます。

let max = 100;
let num = 1;
let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert("2をかけ続けて" + max + "を超えるのみ必要な回数は" + count + "回です");



// do...while文
// 真偽に関わらず、最初の1回だけは必ず処理が行われます。

// do{
//   最低1回は行われる処理
// }while(条件式);

do{
  alert("今回の計算で行われる計算の数は" + max + "回です");
} while(num < max){
  num = num * 2;
  count = count + 1;
}
alert("2をかけ続けて" + max + "を超えるのみ必要な回数は" + count + "回です");

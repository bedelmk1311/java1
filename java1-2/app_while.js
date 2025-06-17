// while 
// 条件式が真（true）である間は繰り返し処理が実行されます。


let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert("2をかけ続けて" + max + "を超えるのみ必要な回数は" + count + "回です");
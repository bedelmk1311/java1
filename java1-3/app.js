//引数と戻り値
// 関数（function）繰り返し使われる一連の処理を1つにまとめたもの

function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}

//引数　strA
//関数名　addString
//処理の中で使われる変数　addStr
// Helloと引数strAを結合する処理を行う
// addStr を関数の戻り値　＝　関数の結果として返す

let alertString;

alertString = addString("webcamp");
alert(alertString)





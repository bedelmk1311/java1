// JavaScriptの場合、変数宣言には種類があります。
// ボリュームのあるソースコードを記述する場面では変数宣言が重要となり、
// 変数宣言によって不要なエラーを生み出さずに済みやすくなります。


// varによる再宣言 できるのはvarのみ
var nickname = "taro"
console.log(nickname)
var nickname = "ichiro"
console.log(nickname)



// 再代入はvarとletで可能です。constでは再代入ができません。

//varによる再代入
var nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname)

// 変数にはスコープ（有効範囲）がある

// varでは関数スコープ（ローカルスコープ）、グローバルスコープの変数を宣言

var stc = "webcamp" //グローバルスコープ
function foo(){
  console.log(stc)
  var y = "hello" //関数スコープ
}
// グローバルスコープとはどこからでも参照できる変数
// 関数スコープは関数の中でvarによって宣言された変数
// 関数スコープの有効範囲は関数内

foo()
console.log(y)
//Uncaught ReferenceError: y is not defined
//yが定義がされていない参照エラー


//letではブロックスコープ（ローカルスコープ）の変数を宣言することができる
// ブロックとは() 、{}

function foo() {
  let x = "webcamp"
  {
    let y = "hello world"
  }
  console.log(x)
  console.log(y)
}

foo()
// Uncaught ReferenceError: y is not defined」と、参照エラー
// ブロック外から参照したためエラー
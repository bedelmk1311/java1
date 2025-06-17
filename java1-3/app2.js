// 複数の関数で表示できるようにする

// let user_hand = prompt ("じゃんけんの手をグー、チョキ、パーから選んでください。");
// alert("あなたの選んだ手は" + user_hand + "です");

// これだとじゃんけんの手を入力するプロンプト欄を作っただけ

// WinLose関数で勝ち負け判定
let user_hand =prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

//結果
alert("選んだ手は" + user_hand + "\njavascriptの選んだ手は" + js_hand + "です \n結果は" + judge + "です。");

// Math.floor( Math.random() * 3 )で0～2までのランダムな整数値を生成
// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user,js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}

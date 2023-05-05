// ウェブページの読み込みが完了したら実行する
window.onload = function() {
  // ボタン要素を取得する
  var button = document.getElementById('button');

  // ボタンがクリックされたら、アラートを表示する
  button.onclick = function() {
    alert('Thank you for visiting this site!');
  };
};

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // アクセスカウントを記録するファイルのパス
  const countFilePath = './count.txt';

  // アクセスカウントを取得する
  let count = 0;
  if (fs.existsSync(countFilePath)) {
    count = parseInt(fs.readFileSync(countFilePath, 'utf8'));
  }

  // アクセスカウントを1増やす
  count++;

  // アクセスカウントをファイルに保存する
  fs.writeFileSync(countFilePath, count.toString());

  // レスポンスのヘッダーを設定する
  res.writeHead(200, {'Content-Type': 'text/html'});

  // レスポンスのボディを設定する
  const body = `このページには、${count}人のユーザーがアクセスしました。`;
  res.end(body);
});

server.listen(3000, () => {
  console.log('Server listening on http://localhost:3000/');
});

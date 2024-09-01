以下はプラグインを実行するための手順です。また、以下のURLでも説明をご覧いただけます：

  https://www.figma.com/plugin-docs/plugin-quickstart-guide/

このプラグインテンプレートは、JavaScriptアプリケーション作成の標準的なツールであるTypescriptとNPMを使用しています。

まず、NPMが同梱されているNode.jsをダウンロードします。これにより、TypeScriptやその他のライブラリをインストールできるようになります。ダウンロードリンクは以下です：

  https://nodejs.org/en/download/

次に、以下のコマンドを使用してTypeScriptをインストールします：

  npm install -g typescript

最後に、プラグインのディレクトリで、以下のコマンドを実行してプラグインAPIの最新の型定義を取得します：

  npm install --save-dev @figma/plugin-typings

JavaScriptに慣れている方なら、TypeScriptは非常に馴染みやすいでしょう。実際、有効なJavaScriptコードは既に有効なTypescriptコードです。

TypeScriptは変数に型注釈を追加します。これにより、Visual Studio Codeなどのコードエディタがコードを書いている間にFigma APIに関する情報を提供したり、以前は気づかなかったバグを見つけるのに役立ちます。

詳細については、https://www.typescriptlang.org/ をご覧ください。

TypeScriptを使用するには、TypeScript（code.ts）をJavaScript（code.js）に変換するコンパイラが必要です。これによりブラウザで実行できるようになります。

Visual Studio Codeを使用してTypeScriptコードを書くことをお勧めします：

1. まだダウンロードしていない場合は、Visual Studio Codeをダウンロードします：https://code.visualstudio.com/
2. このディレクトリをVisual Studio Codeで開きます。
3. TypeScriptをJavaScriptにコンパイルします：「Terminal > Run Build Task...」メニュー項目を実行し、
   「npm: watch」を選択します。Visual Studio Codeを再度開くたびに、この操作を行う必要があります。

以上です！これで、保存するたびにVisual Studio CodeがJavaScriptファイルを再生成します。
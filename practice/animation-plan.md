# ボタンアニメーション練習 全30問

基礎編全6回の合格（第6回コミット `e47cf2f`）に続く追加練習。2026-10-27、ユーザーが第1問から順に同じ進め方で取り組むことを希望。

## 進め方

- AGENTS.mdとfrontend-ui-practiceスキルを適用する。見本を見る → ユーザーが実装 → 表示・操作の確認 → レビュー → 改善 → 任意の応用。
- 一度に1問だけ準備する。エージェントは見本・課題文・比較画面・実装用ひな形を担当し、解答を実装欄に書かない。
- 各問の準備完了時とレビュー合格時に対象ファイルだけをコミットする。
- 合格コミット後、同じプロジェクトに次の問用の新しいチャットを作り、元の課題READMEにチャットIDを記録してコミットする。既存チャットがあれば再利用する。
- 基礎編と番号が重複するため「アニメーション01〜30」と区別する。過去の実装を保全する。
- 第1〜15問は主にCSS、第16問以降は必要に応じてReact・SVG・JavaScriptを組み合わせる。最初からライブラリを追加しない。
- 前半は1問30〜60分を目安にする。上級問題は分割してよい。
- 各問でキーボード操作、押せる範囲の安定、360px・390px幅を確認する。動きを減らす設定でも結果が伝わるようにし、必要な方法は段階的に紹介する。
- hoverだけの装飾がなくても機能すること、フォーカスの輪を失わないことを確認する。
- 第30問合格後は、追加の希望がなければ次のチャットを作らない。

## 課題一覧

| 問 | 作るもの | 主に学ぶこと | 難易度 |
| --- | --- | --- | --- |
| 01 | じわっと色が変わる | transition、時間と速度曲線、hoverから戻る動き | 初級 |
| 02 | ふわっと浮く | 移動と影の連動 | 初級 |
| 03 | 押すと沈む | 縮小と影、押した感触 | 初級 |
| 04 | 矢印が進む | 内部のアイコンだけを動かす | 初級 |
| 05 | 下線が伸びる | 疑似要素、変形の起点 | 初級 |
| 06 | 左から塗られる | 背景レイヤーと疑似要素 | 初級〜中級 |
| 07 | 中央から塗られる | 中央を起点とした塗りの展開 | 初級〜中級 |
| 08 | 光が横切る | 斜めの光沢と表示範囲 | 初級〜中級 |
| 09 | 文字が入れ替わる | ラベルの上下移動と切り抜き | 初級〜中級 |
| 10 | アイコンが登場する | 複数要素のタイミング | 初級〜中級 |
| 11 | ぽんっと弾む | keyframes、一度だけの演出 | 中級 |
| 12 | ゼリーのように揺れる | 縦横で異なる拡大率 | 中級 |
| 13 | 色が流れる | グラデーション背景の移動 | 中級 |
| 14 | ネオンが灯る | 複数の影と光量 | 中級 |
| 15 | 文字が順番に跳ねる | 文字単位の時間差 | 中級 |
| 16 | いいねが弾む | 選択状態と一度だけの演出 | 中級 |
| 17 | メニューが×になる | 開閉の変形と逆再生 | 中級 |
| 18 | 波紋が広がる | クリック座標と装飾の後片付け | 中級 |
| 19 | チェックを描く | SVGの線のアニメーション | 中級 |
| 20 | 処理中から完了へ変わる | 状態と演出の同期、二重送信防止 | 中級 |
| 21 | くるっと裏返る | 遠近感と裏面の表示 | 中級〜上級 |
| 22 | 枠線が描かれる | SVGの外周を描く | 中級〜上級 |
| 23 | 光が枠を巡る | 回転する背景と重ね合わせ | 中級〜上級 |
| 24 | スポットライトが追う | ポインター座標とCSS変数 | 中級〜上級 |
| 25 | 立体的に傾く | 座標を回転角に変換する | 中級〜上級 |
| 26 | 磁石に引かれる | ボタンと文字の追従・復帰 | 上級 |
| 27 | 紙飛行機で送信する | 飛び立つアイコンと完了表示の連続演出 | 上級 |
| 28 | カートに商品が入る | 商品・カート・完了表示の同期 | 上級 |
| 29 | ゴムのような進捗表示 | SVGの形と模擬進捗の連動 | 上級 |
| 30 | 粒になって消え、戻る | 粒子の分解と再構成 | 上級 |

## 調査した資料

課題は資料の動きや技術を参考にした練習用の再構成。全問が資料中の同名デモに対応するわけではない。古い実例の依存関係をそのまま導入せず、課題の準備時に必要な実装方法を確認する。

- [MDN: CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Transitions/Using)
- [MDN: CSS animations](https://developer.mozilla.org/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [Codrops: Creative Button Styles](https://tympanus.net/codrops/2013/06/13/creative-button-styles/)
- [Codrops: Ideas for CSS Button Hover Animations](https://tympanus.net/codrops/2021/02/17/ideas-for-css-button-hover-animations/)
- [MDN: stroke-dashoffset](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/stroke-dashoffset)
- [MDN: Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [MDN: rotate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/transform-function/rotate3d)
- [MDN: conic-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/gradient/conic-gradient)
- [Codrops: Magnetic Buttons](https://tympanus.net/codrops/2020/08/05/magnetic-buttons/)
- [Aaron Iker: Add to cart button](https://codepen.io/aaroniker/full/VwjOEOv)
- [Codrops: Elastic Progress](https://tympanus.net/codrops/2015/09/23/elastic-progress/)
- [Codrops: Particle Effects for Buttons](https://tympanus.net/codrops/2018/04/25/particle-effects-for-buttons/)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion)

## 進捗

- アニメーション01：開始予定。専用チャットで準備する。
- アニメーション02〜30：未着手。

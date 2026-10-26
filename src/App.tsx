import { useState, type ReactNode } from 'react'
import InteractiveButtonExercise from './exercises/03-interactive-button/InteractiveButtonExercise'
import InteractiveButtonReference from './reference/InteractiveButtonReference'
import BasicButtonExercise from './exercises/01-basic-button/BasicButtonExercise'
import BasicButtonReference from './reference/BasicButtonReference'
import OutlineTextButtonsExercise from './exercises/02-outline-text-buttons/OutlineTextButtonsExercise'
import OutlineTextButtonsReference from './reference/OutlineTextButtonsReference'
import IconButtonsExercise from './exercises/04-icon-buttons/IconButtonsExercise'
import IconButtonsReference from './reference/IconButtonsReference'
import ButtonStatesExercise from './exercises/05-button-states/ButtonStatesExercise'
import ButtonStatesReference from './reference/ButtonStatesReference'
import SavePreview from './practice/SavePreview'
import ActionPreview from './practice/ActionPreview'
import ActionCombinationsExercise from './exercises/06-action-combinations/ActionCombinationsExercise'
import ActionCombinationsReference from './reference/ActionCombinationsReference'
import Animation01ColorExercise from './exercises/animation-01-color-transition/Animation01ColorExercise'
import Animation01ColorReference from './reference/Animation01ColorReference'
import './App.css'

const lessons = ['塗りつぶしボタン', '枠線・テキストボタン', '操作への反応', 'アイコンとボタン', '処理中・無効・完了', '用途に応じた組み合わせ']

function InteractionPreview({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="preview-stage" onClick={(event) => {
        if (event.target instanceof Element && event.target.closest('button')) {
          setCount((value) => value + 1)
        }
      }}>{children}</div>
      <p className="activation-count" role="status">操作回数：{count}回</p>
    </>
  )
}

export default function App() {
  return (
    <main className="practice-page">
      <header className="page-header">
        <p className="eyebrow">FRONTEND SANDBOX</p>
        <h1>ボタンから、UIを学ぶ。</h1>
        <p className="introduction">見て、作って、少しずつ整える。まずはひとつのボタンから。</p>
      </header>
      <nav aria-label="練習プラン" className="lesson-nav">
        <ol>
          {lessons.map((lesson, index) => (
            <li key={lesson}>
              <span className="lesson-number">{String(index + 1).padStart(2, '0')}</span>
              <span>{lesson}</span>
              <span className="lesson-status">レビュー合格</span>
            </li>
          ))}
        </ol>
      </nav>
      <section className="lesson" aria-labelledby="lesson-heading">
        <div className="lesson-heading">
          <div>
            <p className="eyebrow">ANIMATION 01 / 30</p>
            <h2 id="lesson-heading">じわっと色が変わるボタン</h2>
          </div>
          <span className="duration">目安 30〜60分</span>
        </div>
        <p className="lesson-description">背景色の変化に、短い時間を添えてみましょう。ポインターを重ねたときと離したとき、両方の変化を観察します。</p>
        <div className="comparison">
          <section className="preview-panel" aria-labelledby="reference-heading">
            <h3 id="reference-heading">見本 · 300ms / ease</h3>
            <InteractionPreview><Animation01ColorReference /></InteractionPreview>
            <p className="panel-caption">青から濃い青へ、約0.3秒。離すと同じ時間で戻ります。Tabで選んだときも色が変わり、輪が出ます。</p>
            <details className="animation-observation">
              <summary>時間と速度曲線を比べる</summary>
              <p className="panel-caption">まず上の見本と150msを比較。次に300ms同士でeaseとlinearを比較します。下の操作回数で比較用ボタンの反応も確認できます。</p>
              <InteractionPreview>
                <div className="animation-samples">
                  <div><span>150ms / ease（時間だけ変更）</span><Animation01ColorReference variant="quick" /></div>
                  <div><span>300ms / linear（速度曲線だけ変更）</span><Animation01ColorReference variant="linear" /></div>
                </div>
              </InteractionPreview>
            </details>
          </section>
          <section className="preview-panel" aria-labelledby="exercise-heading">
            <h3 id="exercise-heading">あなたの実装</h3>
            <InteractionPreview><Animation01ColorExercise /></InteractionPreview>
            <p className="panel-caption">ファイルを保存すると、この欄に反映されます。操作回数の表示は用意済みです。</p>
          </section>
        </div>
        <section className="instructions" aria-labelledby="task-heading">
          <h3 id="task-heading">今回の課題</h3>
          <ol>
            <li><code>src/exercises/animation-01-color-transition/Animation01ColorExercise.tsx</code>の案内文を「続ける」ボタンに置き換えます。</li>
            <li>同じフォルダの<code>Animation01ColorExercise.css</code>で見た目と背景色のtransitionを作ります。重ねる・離す両方を滑らかにしましょう。</li>
            <li>Tab・Enter・Space、360px・390px幅、動きを減らす設定で確認します。詳しい手順と完成条件はREADMEにあります。</li>
          </ol>
          <p>最初は見本の色の変わり方を観察しましょう。できたら「レビューして」と伝えてください。</p>
        </section>
      </section>
      <details className="previous-lesson">
        <summary>第6回：保存・削除・キャンセルの組み合わせ（レビュー合格済み）</summary>
        <div className="comparison">
          <section className="preview-panel" aria-label="第6回の見本">
            <h3>見本</h3>
            <ActionPreview Actions={ActionCombinationsReference} />
          </section>
          <section className="preview-panel" aria-label="第6回の実装">
            <h3>あなたの実装</h3>
            <ActionPreview Actions={ActionCombinationsExercise} />
          </section>
        </div>
      </details>
      <details className="previous-lesson">
        <summary>第5回：処理中・無効・完了のボタン（レビュー合格済み）</summary>
        <div className="comparison">
          <section className="preview-panel" aria-label="第5回の見本">
            <h3>見本</h3>
            <SavePreview Button={ButtonStatesReference} />
          </section>
          <section className="preview-panel" aria-label="第5回の実装">
            <h3>あなたの実装</h3>
            <SavePreview Button={ButtonStatesExercise} />
          </section>
        </div>
      </details>
      <details className="previous-lesson">
        <summary>第4回：アイコン付き・アイコンのみのボタン（レビュー合格済み）</summary>
        <div className="comparison">
          <section className="preview-panel" aria-label="第4回の見本">
            <h3>見本</h3>
            <InteractionPreview><div className="practice-actions"><IconButtonsReference /></div></InteractionPreview>
          </section>
          <section className="preview-panel" aria-label="第4回の実装">
            <h3>あなたの実装</h3>
            <InteractionPreview><div className="practice-actions"><IconButtonsExercise /></div></InteractionPreview>
          </section>
        </div>
      </details>
      <details className="previous-lesson">
        <summary>第3回：操作に反応するボタン（レビュー合格済み）</summary>
        <div className="comparison">
          <section className="preview-panel" aria-label="第3回の見本">
            <h3>見本</h3>
            <InteractionPreview><InteractiveButtonReference /></InteractionPreview>
          </section>
          <section className="preview-panel" aria-label="第3回の実装">
            <h3>あなたの実装</h3>
            <InteractionPreview><InteractiveButtonExercise /></InteractionPreview>
          </section>
        </div>
      </details>
      <details className="previous-lesson">
        <summary>第2回：枠線ボタン・テキストボタン（レビュー合格済み）</summary>
        <div className="comparison">
          <section className="preview-panel" aria-label="第2回の見本">
            <h3>見本</h3>
            <div className="preview-stage preview-stage-actions"><div className="practice-actions"><BasicButtonReference /><OutlineTextButtonsReference /></div></div>
          </section>
          <section className="preview-panel" aria-label="第2回の実装">
            <h3>あなたの実装</h3>
            <div className="preview-stage preview-stage-actions"><div className="practice-actions"><BasicButtonReference /><OutlineTextButtonsExercise /></div></div>
          </section>
        </div>
      </details>
      <details className="previous-lesson">
        <summary>第1回：基本の塗りつぶしボタン（レビュー合格済み）</summary>
        <div className="comparison">
          <section className="preview-panel" aria-label="第1回の見本">
            <h3>見本</h3>
            <div className="preview-stage"><BasicButtonReference /></div>
          </section>
          <section className="preview-panel" aria-label="第1回の実装">
            <h3>あなたの実装</h3>
            <div className="preview-stage"><BasicButtonExercise /></div>
          </section>
        </div>
      </details>
    </main>
  )
}

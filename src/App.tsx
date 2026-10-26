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
            <li key={lesson} aria-current={index === 4 ? 'step' : undefined}>
              <span className="lesson-number">{String(index + 1).padStart(2, '0')}</span>
              <span>{lesson}</span>
              <span className="lesson-status">{index < 4 ? 'レビュー合格' : index === 4 ? '今回の課題' : '今後の課題'}</span>
            </li>
          ))}
        </ol>
      </nav>
      <section className="lesson" aria-labelledby="lesson-heading">
        <div className="lesson-heading">
          <div>
            <p className="eyebrow">LESSON 05</p>
            <h2 id="lesson-heading">処理中・無効・完了のボタン</h2>
          </div>
          <span className="duration">目安 30〜60分</span>
        </div>
        <p className="lesson-description">保存の状態を文字と見た目で伝え、二重送信を防ぎましょう。文字が変わっても、ボタンの幅は一定に保ちます。</p>
        <div className="comparison">
          <section className="preview-panel" aria-labelledby="reference-heading">
            <h3 id="reference-heading">見本</h3>
            <SavePreview Button={ButtonStatesReference} />
            <p className="panel-caption">確認欄をチェックして保存。約2秒で完了します。幅176px・高さ48pxはどの状態でも同じです。</p>
          </section>
          <section className="preview-panel" aria-labelledby="exercise-heading">
            <h3 id="exercise-heading">あなたの実装</h3>
            <SavePreview Button={ButtonStatesExercise} />
            <p className="panel-caption">ファイルを保存すると、この欄に反映されます。</p>
          </section>
        </div>
        <section className="instructions" aria-labelledby="task-heading">
          <h3 id="task-heading">今回の課題</h3>
          <ol>
            <li><code>src/exercises/05-button-states/ButtonStatesExercise.tsx</code>にボタンと状態管理を書きます。確認欄と模擬保存は用意済みです。</li>
            <li>同じフォルダの<code>ButtonStatesExercise.css</code>で未確認・保存可能・処理中・完了の見た目を整えます。</li>
            <li>連打しても送信回数が1回に保たれるか、文字が変わっても幅が動かないかを確認します。Tab・Enter・Spaceでも試しましょう。</li>
          </ol>
          <p>できたら「レビューして」と伝えてください。詳しい完成条件は課題フォルダのREADMEにあります。</p>
        </section>
      </section>
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

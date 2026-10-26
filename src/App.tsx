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
            <li key={lesson} aria-current={index === 5 ? 'step' : undefined}>
              <span className="lesson-number">{String(index + 1).padStart(2, '0')}</span>
              <span>{lesson}</span>
              <span className="lesson-status">{index < 5 ? 'レビュー合格' : '今回の課題'}</span>
            </li>
          ))}
        </ol>
      </nav>
      <section className="lesson" aria-labelledby="lesson-heading">
        <div className="lesson-heading">
          <div>
            <p className="eyebrow">LESSON 06 · FINAL</p>
            <h2 id="lesson-heading">保存・削除・キャンセルの組み合わせ</h2>
          </div>
          <span className="duration">目安 30〜60分</span>
        </div>
        <p className="lesson-description">最終課題です。保存を主役に、キャンセルを脇役に、削除を慎重に選べる操作に。色・強弱・間隔で3つの役割を伝えましょう。</p>
        <div className="comparison">
          <section className="preview-panel" aria-labelledby="reference-heading">
            <h3 id="reference-heading">見本</h3>
            <ActionPreview Actions={ActionCombinationsReference} />
            <p className="panel-caption">保存とキャンセルを近づけ、削除との間隔を空けています。狭い画面ではグループごとに折り返します。</p>
          </section>
          <section className="preview-panel" aria-labelledby="exercise-heading">
            <h3 id="exercise-heading">あなたの実装</h3>
            <ActionPreview Actions={ActionCombinationsExercise} />
            <p className="panel-caption">ファイルを保存すると、この欄に反映されます。</p>
          </section>
        </div>
        <section className="instructions" aria-labelledby="task-heading">
          <h3 id="task-heading">今回の課題</h3>
          <ol>
            <li><code>src/exercises/06-action-combinations/ActionCombinationsExercise.tsx</code>に3つのボタンを作り、対応する操作関数をつなぎます。</li>
            <li>同じフォルダの<code>ActionCombinationsExercise.css</code>で役割ごとの強弱と配置を整えます。</li>
            <li>保存・キャンセルを近くに、削除を離して配置します。360〜390px幅とTab・Enter・Spaceで確認しましょう。</li>
          </ol>
          <p>できたら「レビューして」と伝えてください。詳しい完成条件は課題フォルダのREADMEにあります。</p>
        </section>
      </section>
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

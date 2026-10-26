import { useState, type ReactNode } from 'react'
import InteractiveButtonExercise from './exercises/03-interactive-button/InteractiveButtonExercise'
import InteractiveButtonReference from './reference/InteractiveButtonReference'
import BasicButtonExercise from './exercises/01-basic-button/BasicButtonExercise'
import BasicButtonReference from './reference/BasicButtonReference'
import OutlineTextButtonsExercise from './exercises/02-outline-text-buttons/OutlineTextButtonsExercise'
import OutlineTextButtonsReference from './reference/OutlineTextButtonsReference'
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
            <li key={lesson} aria-current={index === 2 ? 'step' : undefined}>
              <span className="lesson-number">{String(index + 1).padStart(2, '0')}</span>
              <span>{lesson}</span>
              <span className="lesson-status">{index < 2 ? 'レビュー合格' : index === 2 ? '今回の課題' : '今後の課題'}</span>
            </li>
          ))}
        </ol>
      </nav>
      <section className="lesson" aria-labelledby="lesson-heading">
        <div className="lesson-heading">
          <div>
            <p className="eyebrow">LESSON 03</p>
            <h2 id="lesson-heading">操作に反応するボタン</h2>
          </div>
          <span className="duration">目安 30〜60分</span>
        </div>
        <p className="lesson-description">「保存する」ボタンを作り、マウスを重ねる・押す・Tabで選ぶときの変化を観察しましょう。</p>
        <div className="comparison">
          <section className="preview-panel" aria-labelledby="reference-heading">
            <h3 id="reference-heading">見本</h3>
            <InteractionPreview><InteractiveButtonReference /></InteractionPreview>
            <p className="panel-caption">マウスを重ねると濃く、押している間はさらに濃くなり1px下がります。Tabで外側に輪が出ます。</p>
          </section>
          <section className="preview-panel" aria-labelledby="exercise-heading">
            <h3 id="exercise-heading">あなたの実装</h3>
            <InteractionPreview><InteractiveButtonExercise /></InteractionPreview>
            <p className="panel-caption">ファイルを保存すると、この欄に反映されます。</p>
          </section>
        </div>
        <section className="instructions" aria-labelledby="task-heading">
          <h3 id="task-heading">今回の課題</h3>
          <ol>
            <li><code>src/exercises/03-interactive-button/InteractiveButtonExercise.tsx</code>に「保存する」ボタンを書きます。</li>
            <li>同じフォルダの<code>InteractiveButtonExercise.css</code>で通常・hover・押下・フォーカスの見た目を整えます。</li>
            <li>マウスとTab・Enter・Spaceで試し、選択位置と押した反応が分かるか確かめます。操作回数は枠が自動で数えます。</li>
          </ol>
          <p>できたら「レビューして」と伝えてください。詳しい完成条件は課題フォルダのREADMEにあります。</p>
        </section>
      </section>
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

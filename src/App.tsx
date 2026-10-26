import { useState, type ReactNode } from 'react'
import InteractiveButtonExercise from './exercises/03-interactive-button/InteractiveButtonExercise'
import InteractiveButtonReference from './reference/InteractiveButtonReference'
import BasicButtonExercise from './exercises/01-basic-button/BasicButtonExercise'
import BasicButtonReference from './reference/BasicButtonReference'
import OutlineTextButtonsExercise from './exercises/02-outline-text-buttons/OutlineTextButtonsExercise'
import OutlineTextButtonsReference from './reference/OutlineTextButtonsReference'
import IconButtonsExercise from './exercises/04-icon-buttons/IconButtonsExercise'
import IconButtonsReference from './reference/IconButtonsReference'
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
            <li key={lesson} aria-current={index === 3 ? 'step' : undefined}>
              <span className="lesson-number">{String(index + 1).padStart(2, '0')}</span>
              <span>{lesson}</span>
              <span className="lesson-status">{index < 3 ? 'レビュー合格' : index === 3 ? '今回の課題' : '今後の課題'}</span>
            </li>
          ))}
        </ol>
      </nav>
      <section className="lesson" aria-labelledby="lesson-heading">
        <div className="lesson-heading">
          <div>
            <p className="eyebrow">LESSON 04</p>
            <h2 id="lesson-heading">アイコン付き・アイコンのみのボタン</h2>
          </div>
          <span className="duration">目安 30〜60分</span>
        </div>
        <p className="lesson-description">「追加する」と「その他の操作」のボタンを作り、アイコンの配置・間隔・押せる範囲・読み上げ用の名前を学びましょう。</p>
        <div className="comparison">
          <section className="preview-panel" aria-labelledby="reference-heading">
            <h3 id="reference-heading">見本</h3>
            <InteractionPreview><div className="practice-actions"><IconButtonsReference /></div></InteractionPreview>
            <p className="panel-caption">アイコンは20px、文字との間隔は8px。高さは両方48px、「…」のボタンは幅も48pxです。</p>
          </section>
          <section className="preview-panel" aria-labelledby="exercise-heading">
            <h3 id="exercise-heading">あなたの実装</h3>
            <InteractionPreview><div className="practice-actions"><IconButtonsExercise /></div></InteractionPreview>
            <p className="panel-caption">ファイルを保存すると、この欄に反映されます。</p>
          </section>
        </div>
        <section className="instructions" aria-labelledby="task-heading">
          <h3 id="task-heading">今回の課題</h3>
          <ol>
            <li><code>src/exercises/04-icon-buttons/IconButtonsExercise.tsx</code>に2種類のボタンを書きます。アイコン素材は用意済みです。</li>
            <li>同じフォルダの<code>IconButtonsExercise.css</code>でアイコンと文字の配置・間隔・押せる範囲を整えます。</li>
            <li>アイコンのみのボタンにも読み上げ用の名前を付けます。マウスとTab・Enter・Spaceで試し、操作回数とフォーカスを確認します。</li>
          </ol>
          <p>できたら「レビューして」と伝えてください。詳しい完成条件は課題フォルダのREADMEにあります。</p>
        </section>
      </section>
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

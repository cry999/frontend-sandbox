import BasicButtonExercise from './exercises/01-basic-button/BasicButtonExercise'
import BasicButtonReference from './reference/BasicButtonReference'
import OutlineTextButtonsExercise from './exercises/02-outline-text-buttons/OutlineTextButtonsExercise'
import OutlineTextButtonsReference from './reference/OutlineTextButtonsReference'
import './App.css'

const lessons = ['塗りつぶしボタン', '枠線・テキストボタン', '操作への反応', 'アイコンとボタン', '処理中・無効・完了', '用途に応じた組み合わせ']

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
            <li key={lesson} aria-current={index === 1 ? 'step' : undefined}>
              <span className="lesson-number">{String(index + 1).padStart(2, '0')}</span>
              <span>{lesson}</span>
              <span className="lesson-status">{index === 0 ? 'レビュー合格' : index === 1 ? '今回の課題' : '今後の課題'}</span>
            </li>
          ))}
        </ol>
      </nav>
      <section className="lesson" aria-labelledby="lesson-heading">
        <div className="lesson-heading">
          <div>
            <p className="eyebrow">LESSON 02</p>
            <h2 id="lesson-heading">枠線ボタン・テキストボタン</h2>
          </div>
          <span className="duration">目安 30〜60分</span>
        </div>
        <p className="lesson-description">「下書き保存」と「キャンセル」を作りましょう。用意済みの「保存する」と並べ、主役と脇役の強弱を表現します。</p>
        <div className="comparison">
          <section className="preview-panel" aria-labelledby="reference-heading">
            <h3 id="reference-heading">見本</h3>
            <div className="preview-stage preview-stage-actions"><div className="practice-actions"><BasicButtonReference /><OutlineTextButtonsReference /></div></div>
            <p className="panel-caption">塗りつぶし → 枠線 → 文字だけ。高さと余白も観察しましょう。</p>
          </section>
          <section className="preview-panel" aria-labelledby="exercise-heading">
            <h3 id="exercise-heading">あなたの実装</h3>
            <div className="preview-stage preview-stage-actions"><div className="practice-actions"><BasicButtonReference /><OutlineTextButtonsExercise /></div></div>
            <p className="panel-caption">ファイルを保存すると、この欄に反映されます。</p>
          </section>
        </div>
        <section className="instructions" aria-labelledby="task-heading">
          <h3 id="task-heading">今回の課題</h3>
          <ol>
            <li><code>src/exercises/02-outline-text-buttons/OutlineTextButtonsExercise.tsx</code>に2つのボタンを書きます。</li>
            <li>同じフォルダの<code>OutlineTextButtonsExercise.css</code>で見た目を整えます。</li>
            <li>「保存する」が主役になるよう、枠線・文字色・背景と余白を調整します。</li>
          </ol>
          <p>できたら「レビューして」と伝えてください。詳しい完成条件は課題フォルダのREADMEにあります。</p>
        </section>
      </section>
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

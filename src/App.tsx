import BasicButtonExercise from './exercises/01-basic-button/BasicButtonExercise'
import BasicButtonReference from './reference/BasicButtonReference'
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
            <li key={lesson} aria-current={index === 0 ? 'step' : undefined}>
              <span className="lesson-number">{String(index + 1).padStart(2, '0')}</span>
              <span>{lesson}</span>
              <span className="lesson-status">{index === 0 ? '今回の課題' : '今後の課題'}</span>
            </li>
          ))}
        </ol>
      </nav>
      <section className="lesson" aria-labelledby="lesson-heading">
        <div className="lesson-heading">
          <div>
            <p className="eyebrow">LESSON 01</p>
            <h2 id="lesson-heading">基本の塗りつぶしボタン</h2>
          </div>
          <span className="duration">目安 30〜60分</span>
        </div>
        <p className="lesson-description">見本を観察して、「保存する」ボタンを作りましょう。今回は文字・余白・角丸・配色に集中します。</p>
        <div className="comparison">
          <section className="preview-panel" aria-labelledby="reference-heading">
            <h3 id="reference-heading">見本</h3>
            <div className="preview-stage"><BasicButtonReference /></div>
            <p className="panel-caption">文字と周囲の余白のバランスを観察しましょう。</p>
          </section>
          <section className="preview-panel" aria-labelledby="exercise-heading">
            <h3 id="exercise-heading">あなたの実装</h3>
            <div className="preview-stage"><BasicButtonExercise /></div>
            <p className="panel-caption">ファイルを保存すると、この欄に反映されます。</p>
          </section>
        </div>
        <section className="instructions" aria-labelledby="task-heading">
          <h3 id="task-heading">今回の課題</h3>
          <ol>
            <li><code>src/exercises/01-basic-button/BasicButtonExercise.tsx</code>にボタンを書きます。</li>
            <li>同じフォルダの<code>BasicButtonExercise.css</code>で見た目を整えます。</li>
            <li>見本と見比べて、文字・余白・角丸・配色を調整します。</li>
          </ol>
          <p>できたら「レビューして」と伝えてください。詳しい完成条件は課題フォルダのREADMEにあります。</p>
        </section>
      </section>
    </main>
  )
}

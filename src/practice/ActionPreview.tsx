import { useState, type ComponentType } from 'react'

export type ActionExerciseProps = {
  onSave: () => void
  onCancel: () => void
  onDelete: () => void
}

export default function ActionPreview({ Actions }: { Actions: ComponentType<ActionExerciseProps> }) {
  const [result, setResult] = useState('まだ操作していません。')

  return (
    <>
      <div className="action-editor">
        <div className="action-editor-content">
          <p className="action-editor-label">記事の編集</p>
          <h4>週末の散歩メモ</h4>
          <p>公開済みの記事です。変更内容を確認し、操作を選んでください。</p>
          <p className="action-editor-warning">削除した記事は元に戻せません。</p>
        </div>
        <div className="action-editor-footer">
          <Actions
            onSave={() => setResult('保存しました（練習用）。')}
            onCancel={() => setResult('編集をキャンセルしました（練習用）。')}
            onDelete={() => setResult('記事を削除しました（練習用）。')}
          />
        </div>
      </div>
      <p className="action-result" role="status">{result}</p>
      <p className="panel-caption">操作結果だけを表示します。データの保存・削除や画面移動は行いません。</p>
    </>
  )
}

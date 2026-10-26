import type { ActionExerciseProps } from '../practice/ActionPreview'
import './ActionCombinationsReference.css'

export default function ActionCombinationsReference({ onSave, onCancel, onDelete }: ActionExerciseProps) {
  return (
    <div className="reference-action-bar">
      <button type="button" className="reference-action reference-action-delete" onClick={onDelete}>記事を削除</button>
      <div className="reference-action-main">
        <button type="button" className="reference-action reference-action-cancel" onClick={onCancel}>キャンセル</button>
        <button type="button" className="reference-action reference-action-save" onClick={onSave}>保存する</button>
      </div>
    </div>
  )
}

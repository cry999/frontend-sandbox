import type { ActionExerciseProps } from '../../practice/ActionPreview'
import './ActionCombinationsExercise.css'

// props.onSave / props.onCancel / props.onDelete は操作結果を表示する関数です。
// この案内文を、3つのボタンと配置用の要素に置き換えてください。
export default function ActionCombinationsExercise({ onSave, onCancel, onDelete }: ActionExerciseProps) {
  return <div className="btn-6-container">
    <button className="btn-6 btn-6-danger" type="button" onClick={onDelete}>記事を削除</button>
    <div className="btn-6-safety-container">
      <button className="btn-6 btn-6-secondary" type="button" onClick={onCancel}>キャンセル</button>
      <button className="btn-6 btn-6-primary" type="button" onClick={onSave}>保存する</button>
    </div>
  </div>
}

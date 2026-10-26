import type { SaveExerciseProps } from '../../practice/SavePreview'
import './ButtonStatesExercise.css'

// props.canSave: 確認欄がチェックされているか（boolean）。
// props.save(): 約2秒で完了する模擬保存。呼ぶたびに送信回数が増えます。
// ボタン・状態管理・状態を伝える文は、自分で実装してください。
export default function ButtonStatesExercise(props: SaveExerciseProps) {
  return <p className="exercise-placeholder">ここに状態が変わるボタンを作ります。<br />現在：{props.canSave ? '確認済み' : '未確認'}</p>
}

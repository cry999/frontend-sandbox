import { AddIcon, MoreIcon } from '../../icons/ButtonIcons'
import './IconButtonsExercise.css'

// アイコン素材は ../../icons/ButtonIcons から AddIcon と MoreIcon を読み込めます。
// この案内文を、自分で作る2種類のボタンに置き換えてください。
export default function IconButtonsExercise() {
  return <>
    <button className="btn-4 btn-4-primary" type="button"><AddIcon /><span className="btn-4-text">追加する</span></button>
    <button className="btn-4 btn-4-secondary" type="button" aria-label="その他の操作"><MoreIcon /></button >
  </>
}

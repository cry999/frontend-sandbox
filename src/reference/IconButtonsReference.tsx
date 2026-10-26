import { AddIcon, MoreIcon } from '../icons/ButtonIcons'
import './IconButtonsReference.css'

export default function IconButtonsReference() {
  return (
    <>
      <button type="button" className="reference-icon-button reference-icon-button-add"><AddIcon /><span>追加する</span></button>
      <button type="button" className="reference-icon-button reference-icon-button-more" aria-label="その他の操作"><MoreIcon /></button>
    </>
  )
}

import { useState } from 'react'
import type { SaveExerciseProps } from '../practice/SavePreview'
import './ButtonStatesReference.css'

export default function ButtonStatesReference({ canSave, save }: SaveExerciseProps) {
  const [status, setStatus] = useState<'idle' | 'saving' | 'done'>('idle')
  const label = status === 'saving' ? '保存中…' : status === 'done' ? '保存しました' : '保存する'

  async function handleSave() {
    if (!canSave || status !== 'idle') return
    setStatus('saving')
    await save()
    setStatus('done')
  }

  return (
    <div className="reference-save-group">
      <button
        type="button"
        className={`reference-save-button reference-save-button-${status}`}
        disabled={!canSave || status !== 'idle'}
        aria-busy={status === 'saving'}
        onClick={handleSave}
      >{label}</button>
      <p className="reference-save-status" role="status">
        {status === 'saving' ? '保存しています。しばらくお待ちください。' : status === 'done' ? '保存が完了しました。' : canSave ? '保存できます。' : '内容を確認すると保存できます。'}
      </p>
    </div>
  )
}

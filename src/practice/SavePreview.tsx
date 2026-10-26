import { useId, useState, type ComponentType } from 'react'

export type SaveExerciseProps = {
  canSave: boolean
  save: () => Promise<void>
}

export default function SavePreview({ Button }: { Button: ComponentType<SaveExerciseProps> }) {
  const checkboxId = useId()
  const [canSave, setCanSave] = useState(false)
  const [requests, setRequests] = useState(0)
  const [session, setSession] = useState(0)

  async function save() {
    setRequests((count) => count + 1)
    await new Promise<void>((resolve) => window.setTimeout(resolve, 2000))
  }

  return (
    <>
      <label className="save-confirmation" htmlFor={checkboxId}>
        <input id={checkboxId} type="checkbox" checked={canSave} onChange={(event) => setCanSave(event.target.checked)} />
        保存する内容を確認しました
      </label>
      <div className="preview-stage save-stage"><Button key={session} canSave={canSave} save={save} /></div>
      <p className="activation-count">送信回数：{requests}回</p>
      <button className="preview-reset" type="button" onClick={() => {
        setCanSave(false)
        setRequests(0)
        setSession((value) => value + 1)
      }}>最初から試す</button>
    </>
  )
}

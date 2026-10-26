import { useState } from 'react'
import type { SaveExerciseProps } from '../../practice/SavePreview'
import './ButtonStatesExercise.css'

type SaveState = "todo" | "wip" | "done"

// props.canSave: 確認欄がチェックされているか（boolean）。
// props.save(): 約2秒で完了する模擬保存。呼ぶたびに送信回数が増えます。
// ボタン・状態管理・状態を伝える文は、自分で実装してください。
export default function ButtonStatesExercise({ canSave, save }: SaveExerciseProps) {
  const [saveState, setSaveState] = useState<SaveState>("todo")
  const classNames = ["btn-5"]
  if (!canSave && saveState === 'todo') {
    classNames.push("btn-5-disabled")
  } else {
    classNames.push(`btn-5-${saveState}`)
  }
  const handleClick = async () => {
    switch (saveState) {
      case "todo":
        setSaveState("wip")
        await save()
        setSaveState("done")
    }
  }
  return <div className='btn-5-container'>
    <button
      className={classNames.join(" ")}
      type="button"
      aria-busy={saveState === "wip"}
      disabled={!canSave || saveState !== "todo"}
      onClick={handleClick}
    >
      {saveState === "todo" ? "保存する" : saveState === "wip" ? "保存中..." : "保存しました"}
    </button>
    <span className="text-5" role="status">
      {saveState === "todo" ?
        (!canSave ? "内容を確認すると保存できます。" : "保存できます。")
        : saveState === "wip" ? "保存しています。しばらくお待ちください。"
          : "保存が完了しました。"}
    </span>
  </div>
}

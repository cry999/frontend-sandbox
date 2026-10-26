import './Animation01ColorReference.css'

type Props = { variant?: 'standard' | 'quick' | 'linear' }

export default function Animation01ColorReference({ variant = 'standard' }: Props) {
  return <button type="button" className={`animation-01-reference animation-01-reference--${variant}`}>続ける</button>
}

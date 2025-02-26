export default function ImageSelector({ onImageChange }) {
  const blackSeal = '/images/cornell-seal-black.svg'
  const redSeal = '/images/cornell-seal-red.svg'

  return (
    <div className="selector">
      <button onClick={() => onImageChange(blackSeal)}>
        <img src={blackSeal} />
      </button>
      <button onClick={() => onImageChange(redSeal)}>
        <img src={redSeal} />
      </button>
      <button onClick={() => onImageChange(undefined)}>
        <em>None</em>
      </button>
    </div>
  )
}

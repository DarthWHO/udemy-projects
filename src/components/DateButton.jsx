export default function DateButton({ direction, handler }) {
  return <button className="btn" onClick={handler}>
      {direction}
    </button>
}
export default function TipReset({ bill, onReset }) {
  return bill !== 0 && <button onClick={onReset}>Reset</button>;
}

export default function TipSelector({ tipPercent, person, onTipPercent, children }) {
  return (
    <>
      {children}
      <select
        name="tip"
        id="tip"
        onChange={(event) => onTipPercent(person, Number(event.target.value))}
        value={tipPercent}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </>
  );
}

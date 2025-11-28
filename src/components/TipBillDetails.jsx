export default function TipBillDetails({ bill, onBillAmount }) {
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        type="text"
        name="bill"
        id="bill"
        value={bill}
        onChange={(event) => onBillAmount(Number(event.target.value))}
      />
    </div>
  );
}

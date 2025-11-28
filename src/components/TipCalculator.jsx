import TipBillDetails from "./TipBillDetails";
import TipSelector from "./TipSelector";
import TipDisplay from "./TipDisplay";
import TipReset from "./TipReset";
import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tipPercentOne, setTipPercentOne] = useState(0);
  const [tipPercentTwo, setTipPercentTwo] = useState(0);

  let averageTipPercent = ((tipPercentOne / 100) + (tipPercentTwo / 100)) / 2;
  let tip = Math.round(bill * averageTipPercent);
  let total = bill + tip;

  const handleBillAmount = (num) => {
    setBill(num);
  };

  const handleTipPercent = (person, percent) => {
    person === "one" ? setTipPercentOne(percent) : setTipPercentTwo(percent);
  };

  const handleReset = () => {
    setBill(0);
    setTipPercentOne(0);
    setTipPercentTwo(0);
  };

  return (
    <div>
      <h2>Tip Calculator</h2>
      <TipBillDetails bill={bill} onBillAmount={handleBillAmount} />
      <TipSelector tipPercent={tipPercentOne} person="one" onTipPercent={handleTipPercent}>
        <>
          <p>How did you like the service? </p>
        </>
      </TipSelector>
      <TipSelector tipPercent={tipPercentTwo} person="two" onTipPercent={handleTipPercent}>
        <>
          <p>How did your friend like the service? </p>
        </>
      </TipSelector>
      <TipDisplay bill={bill}>{`You pay $${total} ($${bill} + $${tip})`}</TipDisplay>
      <TipReset bill={bill} onReset={handleReset} />
    </div>
  );
}

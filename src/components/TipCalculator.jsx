import TipBillDetails from "./TipBillDetails";
import TipSelector from "./TipSelector";
import TipDisplay from "./TipDisplay";
import TipReset from "./TipReset";

export default function TipCalculator() {
  return (
    <div>
      <h2>Tip Calculator</h2>
      <TipBillDetails />
      <TipSelector />
      <TipDisplay />
      <TipReset />
    </div>
  );
}

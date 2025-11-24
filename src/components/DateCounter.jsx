import DateButton from "./DateButton";
import { useState } from "react";
import "../assets/styles/DateCounter.css";
import DateCounterMessage from "./DateCounterMessage";

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleStepChangeUp() {
    setStep((current) => setStep(current + 1));
  }

  function handleStepChangeDown() {
    step > 1 && setStep((current) => setStep(current - 1));
  }

  function handleCountChangeUp() {
    setCount((current) => setCount( current + step));
  }

  function handleCountChangeDown() {
    setCount((current) => setCount(current - step));
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="container">
      <h1>Date Calculator</h1>
      <DateButton direction="reset" handler={handleReset} />
      <div className="button-container">
        <DateButton direction="&minus;" handler={handleStepChangeDown} />
        <h2>Step: {step}</h2>
        <DateButton direction="+" handler={handleStepChangeUp} />
      </div>
      <div className="button-container">
        <DateButton direction="&minus;" handler={handleCountChangeDown} />
        <h2>Count: {count}</h2>
        <DateButton direction="+" handler={handleCountChangeUp} />
      </div>
      <DateCounterMessage count={count} />
    </div>
  );
}

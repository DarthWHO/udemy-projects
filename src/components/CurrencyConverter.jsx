import { useEffect, useState } from "react";
import "../assets/styles/CurrencyConverter.css";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("CAD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchExchangeRate = async (amount, fromCurrency, toCurrency) => {
    const response = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const getConvertedAmount = async () => {
      if (!amount) {
        setConvertedAmount(null);
        return;
      }

      if (fromCurrency === toCurrency) {
        setConvertedAmount(amount);
        return;
      }
      setIsLoading(true);
      const data = await fetchExchangeRate(amount, fromCurrency, toCurrency);
      setConvertedAmount(data.rates[toCurrency]);
      setIsLoading(false);
    };
    getConvertedAmount();
  }, [amount, fromCurrency, toCurrency]);

  console.log(convertedAmount);

  return (
    <div>
      <input
        type="text"
        value={amount}
        placeholder="Enter an amount..."
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        onChange={(e) => setFromCurrency(e.target.value)}
        value={fromCurrency}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        onChange={(e) => setToCurrency(e.target.value)}
        value={toCurrency}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {isLoading
          ? "converting..."
          : `${Number(convertedAmount).toLocaleString(undefined, {
              style: "currency",
              currency: toCurrency,
            })}`}
      </p>
    </div>
  );
}

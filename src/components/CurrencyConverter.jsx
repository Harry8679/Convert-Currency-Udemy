import React, { useState } from "react";
import CurrencySelector from "./CurrencySelector";

export default function CurrencyConverter({ rates }) {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(null);

  const convertCurrency = () => {
    if (!rates) return;
    const rate = rates[toCurrency] / rates[fromCurrency];
    setResult((amount * rate).toFixed(2));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <div className="flex flex-col gap-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border rounded"
        />

        <div className="flex gap-2">
          <CurrencySelector selected={fromCurrency} setSelected={setFromCurrency} rates={rates} />
          <span className="text-xl">➡️</span>
          <CurrencySelector selected={toCurrency} setSelected={setToCurrency} rates={rates} />
        </div>

        <button className="bg-blue-500 text-white p-2 rounded" onClick={convertCurrency}>
          Convertir
        </button>

        {result !== null && (
          <p className="text-xl font-bold mt-4">
            {amount} {fromCurrency} = {result} {toCurrency}
          </p>
        )}
      </div>
    </div>
  );
}
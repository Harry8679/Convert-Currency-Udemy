import React from "react";

export default function CurrencySelector({ selected, setSelected, rates }) {
  return (
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      className="p-2 border rounded"
    >
      {Object.keys(rates).map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
}
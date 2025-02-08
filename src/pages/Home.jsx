import React, { useState, useEffect } from "react";
import CurrencyConverter from "../components/CurrencyConverter";

const API_KEY = process.env.REACT_APP_CURRENCY_API_KEY;
const BASE_URL = "https://v6.exchangerate-api.com/v6";

export default function Home() {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    try {
      const response = await fetch(`${BASE_URL}/${API_KEY}/latest/USD`);
      const data = await response.json();
      if (data.result === "success") {
        setRates(data.conversion_rates);
      } else {
        alert("Erreur lors de la récupération des taux !");
      }
    } catch (error) {
      console.error("Erreur API :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">💱 Convertisseur de devises</h1>
      {loading ? <p>Chargement des taux...</p> : <CurrencyConverter rates={rates} />}
    </div>
  );
}
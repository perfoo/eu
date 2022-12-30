import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [iznos, setIznos] = useState(0);

  const clickHandler1 = () => {
    const x = document.getElementById("x").value;
    setIznos(
      (x / 7.5345).toLocaleString("hr-HR", {
        maximumFractionDigits: 2,
        style: "currency",
        currency: "EUR",
        currencyDisplay: "symbol",
      })
    );
  };

  const clickHandler2 = () => {
    const x = document.getElementById("x").value;
    setIznos(
      (x * 7.5345).toLocaleString("hr-HR", {
        maximumFractionDigits: 2,
        style: "currency",
        currency: "HRK",
        currencyDisplay: "symbol",
      })
    );
  };

  return (
    <div className="App">
      <h3>EURO konverter 7.53450</h3>
      <input type="text" name="x" id="x"></input>
      <div>
        <button onClick={clickHandler1}>KN =&gt; €</button>
        <button onClick={clickHandler2}>€ =&gt; KN</button>
      </div>
      <h1>{iznos}</h1>
      <p>&#169;VIDEONADZOR - Casino Cezar</p>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./app.css";  // Assuming you’re using this for general styling

const LCM = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [lcm, setLcm] = useState(null);

  const gcd = (x, y) => {
    while (y !== 0) {
      const r = x % y;
      x = y;
      y = r;
    }
    return x;
  };

  const calculateLCM = () => {
    const numA = parseInt(a);
    const numB = parseInt(b);

    if (!isNaN(numA) && !isNaN(numB) && numA > 0 && numB > 0) {
      const gcdValue = gcd(numA, numB);
      const lcmValue = (numA * numB) / gcdValue;
      setLcm(lcmValue);
    } else {
      setLcm("Please enter valid positive numbers!");
    }
  };

  return (
    <div className="container">
      <h2>LCM Calculator</h2>
      <div className="input-group">
        <label>Enter a number for A:</label>
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="Enter A"
        />
      </div>
      <div className="input-group">
        <label>Enter a number for B:</label>
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Enter B"
        />
      </div>
      <button onClick={calculateLCM}>Calculate LCM</button>
      {lcm !== null && <p>The LCM of {a} and {b} is {lcm}</p>}
    </div>
  );
};

export default LCM;

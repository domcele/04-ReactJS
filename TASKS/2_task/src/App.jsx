import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(500);

  const amounts = [10, 20, 50, 100];
  const errorMessage = count < 0 ? "Jusu balansas yra neigiamas" : "";

  return (
    <>
      <h1>Bankomatas</h1>
      <h3>Jusu likutis: {count}</h3>
      <br />
      <h4>Ideti pinigus:</h4>
      {amounts.map((amount) => (
        <button key={amount} onClick={() => setCount(count + amount)}>
          {amount}
        </button>
      ))}
      <br />
      <h4>Isimti pinigus:</h4>
      {amounts.map((amount) => (
        <button key={amount} onClick={() => setCount(count - amount)}>
          {amount}
        </button>
      ))}
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Isimti viska
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

export default App;

/* 
Sukurti bankomato funkcionaluma:
Sukurti mygtukus: issiimti 10, 20, 50, 100 euru; padeti 10, 20, 50, 100 euru; isiimti viska.
Pradine reiksme balansas = 500.
  - Padaryti funkcionalius mygtukus.
*/

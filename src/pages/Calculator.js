import { useState, useEffect } from "react";
import styled from "styled-components";
const zayıf =
  "Kilonuz düşük. Daha sık öğünlerle biraz kilo almanızı öneririz. ";
const normal = "Kilonuz normal. İşte bu. ";
const kilolu = "Eşiktesiniz. Daha fazla kilo almamanızı öneririz.";
const obese = "Kilonuz çok fazla. Düzenli bir diyete başlamanızı öneririz";
const overweight =
  "Kilonuz ciddi derecede yüksek. Acilen önlem almanızı öneririz.";

const Button = styled.button`
  border: none;
  background-color: teal;
  color: white;
  padding: 10px;
  font-size: 20px;
  border-radius: 15px;
  width: 100px;
  cursor: pointer;

  -webkit-box-shadow: 3px 2px 5px 7px rgba(0, 0, 0, 0.92);
  box-shadow: 3px 2px 5px 7px rgba(0, 0, 0, 0.92);
`;

const Calculator = () => {
  const [bmi, setBmi] = useState(localStorage.getItem("bmi") || null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (bmi < 18.5) {
      setResult(zayıf);
    } else if (bmi >= 18.5 && bmi < 25) {
      setResult(normal);
    } else if (bmi >= 25 && bmi < 30) {
      setResult(kilolu);
    } else if (bmi >= 30 && bmi < 35) {
      setResult(obese);
    } else if (bmi >= 35) {
      setResult(overweight);
    }
  }, [bmi]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const weight = e.target.weight.value;
    const height = e.target.height.value;
    const trueHeight = height / 100;
    const bmi = weight / (trueHeight * trueHeight);

    setBmi(bmi.toFixed(2));
    localStorage.setItem("bmi", bmi.toFixed(2));
  };
  return (
    <div>
      <div className="calculatorContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            id="height"
            name="height"
            placeholder="Boyunuz(cm cinsinden)"
          />
          <input
            type="number"
            id="weight"
            name="weight"
            placeholder="Kilonuz(kg cinsinden)"
          />
          <Button>Hesapla</Button>
        </form>
      </div>

      {bmi && (
        <div className="resultContainer">
          <div>
            <h1>BMI: {bmi}</h1>
            {result && <h4>{result}</h4>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;

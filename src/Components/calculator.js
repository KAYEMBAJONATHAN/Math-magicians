import './calculator.css';
import { useState } from 'react';
import calculators from '../Logic/calculators';

const Calculator = () => {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const eventHandler = (val) => {
    const Result = calculators(result, val.target.value);
    setResult(Result);
  };

  const displayValue = result.next || result.total || '0';
  return (
    <div className="main-calculator">
      <div className="row">
        <input className="header" type="number" value={displayValue} />
        <section className="calculator-wrapper">
          <button type="button" onClick={eventHandler} value="AC">AC</button>
          <button type="button" onClick={eventHandler} value="+/-" className="plus-moins">+/-</button>
          <button type="button" onClick={eventHandler} value="%" className="division">%</button>
          <button type="button" onClick={eventHandler} value="÷" className="color">&#247;</button>
          <button type="button" onClick={eventHandler} value="7">7</button>
          <button type="button" onClick={eventHandler} value="8">8</button>
          <button type="button" onClick={eventHandler} value="9">9</button>
          <button type="button" onClick={eventHandler} value="x" className="color">&#215;</button>

          <button type="button" onClick={eventHandler} value="4">4</button>
          <button type="button" onClick={eventHandler} value="5">5</button>
          <button type="button" onClick={eventHandler} value="6">6</button>
          <button type="button" onClick={eventHandler} value="-" className="color">-</button>

          <button type="button" onClick={eventHandler} value="1">1</button>
          <button type="button" onClick={eventHandler} value="2">2</button>
          <button type="button" onClick={eventHandler} value="3">3</button>
          <button type="button" onClick={eventHandler} value="+" className="color">+</button>

          <button type="button" onClick={eventHandler} value="0" className="mini">0</button>
          <button type="button" onClick={eventHandler} value=".">.</button>
          <button type="button" onClick={eventHandler} value="=" className="color">=</button>
        </section>
      </div>
    </div>
  );
};
export default Calculator;

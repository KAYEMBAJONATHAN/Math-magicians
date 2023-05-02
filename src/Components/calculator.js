import './calculator.css';
import Input from './input';

const Calculator = () => {
  const value = 0;
  return (
    <div className="main-calculator">
      <div className="row">
        <Input value={value} />
        <section className="calculator-wrapper">
          <button type="button">AC</button>
          <button type="button" className="plus-moins">+/-</button>
          <button type="button" className="division">%</button>
          <button type="button" className="color">&#247;</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="color">x</button>

          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="color">-</button>

          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="color">+</button>

          <button type="button" className="mini">0</button>
          <button type="button">.</button>
          <button type="button" className="color">=</button>
        </section>
      </div>
    </div>
  );
};
export default Calculator;

import './App.css';
import Button from './components/Button/Button';
import ButtonClear from './components/ButtonClear/ButtonClear';
import Display from './components/Display/Display';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import ButtonEqual from './components/ButtonEqual/ButtonEqual';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculeResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Enter values ​​to perform calculations.");
    }
  };

  return (
    <div className='App'>
      <div className='container-calculator'>
        <Display input={input} />
        <div className='content-btns'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <ButtonClear handleClear={() => setInput('')} />
        </div>
        <div className='content-btns'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='content-btns'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='container-equal'>
          <div>
            <ButtonEqual handleClick={calculeResult}>=</ButtonEqual>
          </div>

          <div className='wrap'>
            <Button handleClick={addInput}>0</Button>
            <Button handleClick={addInput}>*</Button>
            <Button handleClick={addInput}>.</Button>
            <Button handleClick={addInput}>/</Button>
          </div>

        </div>
      </div>
      <p className='madeby'>Made by Flavio Filho</p>
    </div>
  );
}

export default App;
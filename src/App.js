import './App.css';
import { useState } from 'react';
import Child from './Child';

function App() {

  const [tempObj, setTempObj] = useState({
    scale: 'celcius',
    temperature: 0,
  });

  const celsius = 0;
  const fahrenheit = 0;
  const kelvin = 0;

  function f2c(value) {
    return ((value - 32) * 5) / 9;
  }

  function k2c(value) {
    return value - 273;
  }

  function c2f(value) {
    return (value * 1.8) + 32;
  }

  function k2f(value) {
    return ((value - 273) * 1.8) + 32;
  }

  function c2k(value) {
    return value + 273;
  }

  function f2k(value) {
    return (((value - 32) * 5) / 9) + 273
  }

  
  function onCelciusChange() {
    setTempObj({
      scale: 'celcius',
      temperature: isNaN(tempValue) ? 0 : tempValue,
    });
  }

  function onFahreniteChange() {
    setTempObj({
      scale: 'fahrenite',
      temperature: isNaN(tempValue) ? 0 : tempValue,
    });
  }

  function onKelvinChange() {
    setTempObj({
      scale: 'kelvin',
      temperature: isNaN(tempValue) ? 0 : tempValue,
    });
  }

  return (
    <div style={{ "textAlign": "center" }}>
      <h2>Celsius: <Child temperature={celsius} onTemperatureChange={onCelciusChange} /></h2>
      <h2>Fahrenheit: <Child temperature={fahrenheit} onTemperatureChange={onFahreniteChange} /></h2>
      <h2>Kelvin: <Child temperature={kelvin} onTemperatureChange={onKelvinChange} /></h2>
    </div>
  );
}

export default App;

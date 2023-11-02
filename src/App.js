import './App.css';
import { useState } from 'react';
import Child from './Child';

function App() {
  const [tempObj, setTempObj] = useState({
    scale: 'celsius', // Corrected the initial scale spelling to 'celsius'
    temperature: 0,
  });

  // Temperature conversion functions
  function f2c(value) {
    return ((value - 32) * 5) / 9;
  }

  function k2c(value) {
    return value - 273.15; // Corrected the conversion formula
  }

  function c2f(value) {
    return (value * 1.8) + 32;
  }

  function k2f(value) {
    return (value * 1.8) - 459.67; // Corrected the conversion formula
  }

  function c2k(value) {
    return value + 273.15; // Corrected the conversion formula
  }

  function f2k(value) {
    return (value + 459.67) * 5 / 9; // Corrected the conversion formula
  }

  function onCelciusChange(tempValue) {
    setTempObj({
      scale: 'celsius',
      temperature: isNaN(tempValue) ? 0 : parseFloat(tempValue)
    });
  }

  function onFahrenheitChange(tempValue) {
    setTempObj({
      scale: 'fahrenheit',
      temperature: isNaN(tempValue) ? 0 : parseFloat(tempValue),
    });
  }

  function onKelvinChange(tempValue) {
    setTempObj({
      scale: 'kelvin',
      temperature: isNaN(tempValue) ? 0 : parseFloat(tempValue),
    });
  }

  const celsius = tempObj.scale === 'celsius' ? tempObj.temperature :
    tempObj.scale === 'fahrenheit' ? f2c(tempObj.temperature) : k2c(tempObj.temperature);

  const fahrenheit = tempObj.scale === 'fahrenheit' ? tempObj.temperature :
    tempObj.scale === 'celsius' ? c2f(tempObj.temperature) : k2f(tempObj.temperature);

  const kelvin = tempObj.scale === 'kelvin' ? tempObj.temperature :
    tempObj.scale === 'celsius' ? c2k(tempObj.temperature) : f2k(tempObj.temperature);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Celsius: <Child temperature={celsius} onTemperatureChange={onCelciusChange} /></h2>
      <h2>Fahrenheit: <Child temperature={fahrenheit} onTemperatureChange={onFahrenheitChange} /></h2>
      <h2>Kelvin: <Child temperature={kelvin} onTemperatureChange={onKelvinChange} /></h2>
    </div>
  );
}

export default App;

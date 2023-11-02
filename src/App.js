import './App.css';

function App() {

  const celsius = 0;
  const fahrenheit = 0;
  const kelvin = 0;

  function onCelciusChange() {

  }

  function onFahreniteChange() {

  }

  function onKelvinChange() {

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

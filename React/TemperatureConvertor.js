import { useState } from 'react';
const App = () => {
  // Edit this component
  const [temperature, setTemperature] = useState(0);

  const celToFar = (temp) => {
    return Math.round((temp * 9/5 + 32) * 100) / 100;
  }

 const celToKel = (temp) => {
    return Math.round((temp + 273.15) * 100) / 100;
  } 

  return (
    <div>
      <form>
        <input
          data-testid='input-id'
          name="input"
          type="number"
          value = {temperature}
          onChange = {(e) => setTemperature(parseFloat(e.target.value))}
        />
        <label for="input">°C</label>
      </form>
      <p data-testid='output'>
         {temperature}°C is {celToFar(temperature)}°F and {celToKel(temperature)}K.
      </p>
    </div>
  );
};

export default App;
import { useState, useEffect } from 'react';

const Temperature = () => {
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(Math.floor(Math.random() * 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Temperature</h1>
      <p>{temperature}</p>
    </div>
  );
}

export default Temperature;
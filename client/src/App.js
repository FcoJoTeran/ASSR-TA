import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js';
import './App.css';

function App() {
  const [usersByYear, setUsersByYear] = useState([]);
  const [tabletUsersByCountry, setTabletUsersByCountry] = useState([]);
  const [paymentsInUS, setPaymentsInUS] = useState(null);

  useEffect(() => {
    // Consulta para obtener el número de usuarios por año
    fetch('http://localhost:3001/users-by-year')
      .then(response => response.json())
      .then(data => {
        console.log(data);  // Agrega este log
        setUsersByYear(data);
      })
      .catch(error => console.error(error));
  
    // Consulta para obtener el número de usuarios de tablet por país
    fetch('http://localhost:3001/tablet-users-by-country')
      .then(response => response.json())
      .then(data => {
        console.log(data);  // Agrega este log
        setTabletUsersByCountry(data);
      })
      .catch(error => console.error(error));
  
    // Consulta para obtener el número de pagos en Estados Unidos
    fetch('http://localhost:3001/payments-in-us')
      .then(response => response.json())
      .then(data => {
        console.log(data);  // Agrega este log
        setPaymentsInUS(data[0].payment_count);
      })
      .catch(error => console.error(error));
  }, []);

  const chartData = {
    labels: tabletUsersByCountry.map(entry => entry.Country),
    datasets: [
      {
        label: 'Usuarios de Tablet por País',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.8)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: tabletUsersByCountry.map(entry => entry.user_count),
      },
    ],
  };

  return (
    <div className="App">
      <h1>Estadísticas de Netflix Userbase</h1>
      <div>
        <h2>Número de usuarios por año</h2>
        <ul>
          {usersByYear.map(item => (
            <li key={item.year}>{`${item.year}: ${item.user_count} usuarios`}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Usuarios de tablet por país</h2>
        <ul>
          {tabletUsersByCountry.map(item => (
            <li key={item.Country}>{`${item.Country}: ${item.user_count} usuarios de tablet`}</li>
          ))}
        </ul>
      </div>

      <div>
      <h1>Gráfico de Usuarios de Tablet por País</h1>
      <Bar data={chartData} />
      </div>

      <div>
        <h2>Número de pagos realizados por usuarios en Estados Unidos</h2>
        <p>{paymentsInUS}</p>
      </div>
    </div>
  );
}

export default App;

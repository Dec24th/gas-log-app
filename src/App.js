import { useState } from 'react'
import Header from './components/Header'
import Logs from './components/Logs'

function App() {
  const [logs, setLogs] = useState([
    {
      id: 1,
      date: '09172021',
      odometer: 82570,
      paid: 31.54,
      gallons: 9.859,
      pricePerGallon: 3.19
    },
    {
      id: 2,
      date: '09302021',
      odometer: 82872,
      paid: 29.59,
      gallons: 8.968,
      pricePerGallon: 3.29
    },
    {
      id: 3,
      date: '10122021',
      odometer: 83271,
      paid: 31.61,
      gallons: 9.880,
      pricePerGallon: 3.19
    },
    {
      id: 4,
      date: '10182021',
      odometer: 83512,
      paid: 5.00,
      gallons: 1.471,
      pricePerGallon: 3.72
    },

  ])

  return (
    <>
      <Header title={'Gas Log App'} subtitle={'Enter Fill Up'} />
      <Logs logs={logs}/>
    </>
  );
}

export default App;
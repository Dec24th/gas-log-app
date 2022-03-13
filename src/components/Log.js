import React from 'react'
import Logs from './Logs'

const Log = ({ log }) => {
  return (
    <div className='log'>
        <h1>{log.date}</h1>
        <h2>{log.odometer}</h2>
        <p>${log.paid.toFixed(2)}</p>
        <p>{log.gallons.toFixed(2)} gallons</p>
        <p>{log.pricePerGallon.toFixed(2)}/g</p>
    </div>
  )
}

export default Log
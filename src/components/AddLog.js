import React from 'react'
import { useState } from 'react'

const AddLog = ({ onAdd }) => {
    const [date, setDate] = useState('')
    const [odometer, setOdometer] = useState('00000')
    const [paid, setPaid] = useState('')
    const [gallons, setGallons] = useState('')
    const [pricePerGallon, setPricePerGallon] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!date) {
            alert('Please add date')
            return
        }
        onAdd({ date, odometer, paid, gallons, pricePerGallon })
        setDate('')
        setOdometer('')
        setPaid('')
        setGallons('')
        setPricePerGallon('')
    }

    return (
        //React form
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Date</label>
                <input
                    type='date'
                    placeholder='Date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)
                    }
                />
            </div>
            <div className='form-control'>
                <label>Odometer Reading</label>
                <input
                    type='number'
                    placeholder='Odometer Reading'
                    value={odometer}
                    onChange={(e) =>
                        setOdometer(e.target.value)
                    }
                />
            </div>
            <div className='form-control'>
                <label>Amount Paid</label>
                <input
                    type='number'
                    placeholder='Amount Paid'
                    value={paid}
                    onChange={(e) =>
                        setPaid(e.target.value)
                    }
                />
            </div>
            <div className='form-control'>
                <label>Gallons (g)</label>
                <input
                    type='number'
                    placeholder='Gallons'
                    value={gallons}
                    onChange={(e) =>
                        setGallons(e.target.value)
                    }
                />
            </div>
            <div className='form-control'>
                <label>Price Per Gallon</label>
                <input
                    type='number'
                    placeholder='Price per gallon'
                    value={pricePerGallon}
                    onChange={(e) =>
                        setPricePerGallon(e.target.value)
                    }
                />
            </div>

            <input
                type='submit'
                value='Save Log'
                className='btn btn-block'

            />

        </form>
    )
}


export default AddLog
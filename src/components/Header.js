import React from 'react'
import Button from './Button'

function Header({ title, subtitle }) {

    const onClick = () => {
        console.log('licked')
    }

    return (
        <>
            <div className='header-container'>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <Button
                    text={'Add Log'}
                    onClick={onClick} />
            </div>
        </>

    )
}

Header.defaultProps = {
    title: 'Gas Log App',
    subtitle: 'Enter log details'
}

export default Header
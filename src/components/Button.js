import React from 'react'

function Button({ text, onClick }) {


    return (
        <>
            <button
                className='btn'
                onClick={onClick}
            >
                {text}
            </button>
        </>
    )
}

Button.defaultProps = {
    text: 'Add Log'
}


export default Button
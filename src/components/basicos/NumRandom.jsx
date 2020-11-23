import React from 'react'

export default (props) =>{
    // Usando operador destructuring
    const {min, max} = props
    const valor = parseInt(Math.random() * (max - min)) + min
    return (
        <>
            <h2>Valor aleatório: {valor}</h2>        
        </>
    )
    
}

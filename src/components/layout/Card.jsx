import './Card.css'
import React from 'react'

export default props => {
    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }
    return (
        // Normalmente se usa class em html, porém como estamos usando a sintaxe JSON, class já é uma palavra reservada
        <div className='Card' style={cardStyle}>
            <div className='Title'>{props.titulo}</div>
                <div className='Content'>
                    {/* Acessa os filhos do componente, os componentes que estão dentro dele e suas propriedades passadas */}
                    {props.children}
                </div>
        </div>
    )
}
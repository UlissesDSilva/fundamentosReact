import React, { useState } from 'react'
import './Input.css'

export default props =>{
    // Primeiro se muda o 'estado' para quee a mudança seja refletida na interface
    // O componente está amarrado à um determinado 'estado'
    const [valor, setValor] = useState('Inicial')

    function changeValue(event){
        setValor(event.target.value)
    }

    return(
        <div className='Input'>
            <h2>{valor}</h2>
            <div className='input2'>
                <input value={valor} type="text" onChange={changeValue}/>
                <input value={valor} type="text" readOnly/>
                <input value={undefined}/>{/*Componente não controlado*/}
            </div>
        </div>
    )
}
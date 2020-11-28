import React from 'react'

export default props =>{
    //Passa-se via props os atributos do pai para o filho
    return(
        <div>
            <span>{props.nome} </span>
            <span><strong>{props.idade}</strong> </span>
            <span>{props.Uni ? 'UFC' : 'IFCE'}</span>
        </div>
    )
}
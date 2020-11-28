//Apartir do 'useState' pode se criar estados no componente
import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props =>{
    //'useState' retorna um array com duas posições, valor inicial e uma função que pode alterar o valor
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [uni, setUni] = useState(false)
    
    function getInformation(nome, idade, uni){
        setNome(nome)
        setIdade(idade)
        setUni(uni)
    }
    return(
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{uni ? 'UFC' : 'IFCE'}</span>
            </div>
            {/* Função via props para o filho. Após uma chamada de evento a informação é passada para o "Pai" */}
            <IndiretaFilho startClick={getInformation}></IndiretaFilho>
        </div>
    )
}
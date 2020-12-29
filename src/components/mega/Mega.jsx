import React, { useState } from 'react'
import './Mega.css'



export default props => {

    const [qtd, setQTD] = useState(props.qtd || 6)
    const startNumbers = generateNumbers(qtd)
    const [numbers, setNumbers] = useState(startNumbers)

    function change(event){
        setQTD(parseInt(event.target.value))
        setNumbers(generateNumbers(parseInt(event.target.value)))
    }

    function generateUnique(min, max, array){
        const random = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(random) ? generateUnique(max, min, array) : random
    } 

    function generateNumbers(qtd){
        // 'fill' Preenche todo o array com '0'
        const numbers = Array(qtd)
                        .fill(0)
                        .reduce((nums) =>{
                            const newNumber = generateUnique(1, 100, nums)
                            return [...nums, newNumber]
                        }, [])
                        .sort((n1, n2) => n1 - n2)

        return numbers
    }

    return(
        <div className="Mega">
            <h1>Sorteio da Mega!!!</h1>
            <h2>{numbers.join(' ')}</h2>
            <div>
                <label htmlFor="changeQTD">Quantidade de Nº: </label>
                <input id='changeQTD' type="number" 
                    onChange={change} value={qtd}
                    min="5" max="10"/>
            </div>
            <button onClick={() => setNumbers(generateNumbers(qtd))}>
                Sortear!!
            </button>
        </div>
    )
}


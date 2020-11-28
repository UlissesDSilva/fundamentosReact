import React from 'react'

export default props =>{
    const cb = props.startClick
    const min = 35
    const max = 60
    const idadeRandom = () => parseInt(Math.random() * (max - min)) + min
    const uniRandom = () => Math.random() > 0.5

    return(
        <div>
            <div>Filho</div>
            <button onClick={() => cb('Neil', idadeRandom(), uniRandom())}>
                Fornecer Informações
            </button>
        </div>
    )
}
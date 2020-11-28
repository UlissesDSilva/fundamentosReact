import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props =>{

    return(
        <div>
            <DiretaFilho nome='Ulisses' idade={26} Uni={true}/>
            <DiretaFilho nome='Josué' idade={18} Uni={false}/>
        </div>
    )
}
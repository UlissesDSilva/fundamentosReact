import React from  'react'

export default props =>{
    return(
        <div>
            <label htmlFor="unidade">Unidade: </label>
            <input id='unidade' type="number"
                value={props.valor}
                onChange={e => props.setUnid(parseInt(e.target.value))}/>
        </div>
    )
}
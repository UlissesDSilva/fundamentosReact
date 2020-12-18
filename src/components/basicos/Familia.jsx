import React, {cloneElement} from 'react'
// import FamiliaMembro from './FamiliaMembro'

export default props => {
    
    return(
        <div>
            {/* 
                O parametro do componente pai, não é passdo automaticamente para o componente filho
                <FamiliaMembro nome='Josué' sobrenome={props.sobrenome}/>
                operador spread, espalha as propriedades de um obejeto para uma determinada tag
                <FamiliaMembro nome='Isabel' {...props}/>
                <FamiliaMembro nome='Ulisses'sobrenome='Ferreira'/> 
            */}

            {/* {React.cloneElement(props.children)} */}
            {/* passando as props como segundo parametro no cloneElement */}
            {/* {cloneElement(props.children, props)} */}
            {   
                // o map irá para cada elemento de 'props.children, executar a função'
                props.children.map((child, i) => {
                    return cloneElement(child, {...props, key: i})
                })
            }
        </div>
    )
}
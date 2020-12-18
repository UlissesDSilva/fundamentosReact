import Primeiro from "../basicos/Primeiro"

export default props => {
    // elseChild: componente filho do IF
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0] 
    // por retorna um array, usasse o [0] para pegar o para pegar o primeiro else que encontrar

    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    // console.log(elseChild)

    if(props.test){
        // retorna todos os filhos de 'IF' que não seja o 'Else'
        return ifChildren
    }else if(elseChild){
        return elseChild
    }else {
        return false
    }
}

export const Else = props => props.children
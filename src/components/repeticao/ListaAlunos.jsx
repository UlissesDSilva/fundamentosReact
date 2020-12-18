import React from 'react'
import alunos from '../../data/alunos'

export default props => {
    const lista = alunos.map((aluno) =>{
        return(
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} - {aluno.nota}
            </li>
        )
    })//Transformando um lista de objetos js em trexos de jsx
    // por esta sendo usado uma lista é importante o uso de uma 'key', assim o react consegue detectar as mudanças que possam acontecer
    return(
        <div>
            <ul style={{listStyle: 'none'}}>
                {lista}
            </ul>
        </div>
    )
}
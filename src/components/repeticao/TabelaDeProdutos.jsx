import produtos from '../../data/produtos'
import './TabelaProduto.css'

import React from 'react'

export default props =>{
    function getTable(){
        //Parametros do map(valorAtual, indice, array)
        return produtos.map((produto, i) => {
            return(
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>
                        {produto.id}
                    </td>
                    <td>
                        {produto.produto}
                    </td>
                    <td>
                        R$ {produto.preco.toFixed(2).replace('.', ',')}
                    </td>
                </tr>
            )
        })
    }

    return(
        <div className='TableProd'>
            <table>
                <thead>
                    <tr>
                        <th>Identificação</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getTable()}
                </tbody>
            </table>
        </div>
    )
}
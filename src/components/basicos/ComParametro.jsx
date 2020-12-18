//Extensão jsx serve para IDE ajudar no desenvolvimento
import React from 'react'

export default function ComParametro(props){ 
    const status = props.nota >= 7 ? 'Aprovado' : ' de Recuperação'
    return (
        <div>
            {/* é presico usar chaves para a interpretação do dados como em JS */}
            {/* As props, propriedades são apenas de leitura */}
            {/* Apartir de outras estruturas, como o 'estado', podem ser usados para trabalha melhor os dados das props */}
            <p>
                <h2>{props.desc}</h2>
                <strong> {props.aluno} </strong>
                nota
                <strong> {props.nota} </strong>
                está
                <strong> {status} </strong>
            </p>
        </div>
    )
}
import './index.css'
import App from './App'
import ReactDOM from 'react-dom' //Apartir daqui vamos redenrinzar conteúdos na tela
import React from 'react' //JSX trabalha a sintaxe html dentro do contexto de JS

// Comentarios foram feitos para melhor explicação e para deixar registrado exemplos, para referencias futuras

const el = document.getElementById('root')
// const tag = <strong>Olá React!</strong>
//1º conteúdo, 2º local onde o conteúdo será colocado
//O JS vai gerar dinamicamente tudo que será apresentado no conteúdo da tag
ReactDOM.render(
    <App></App>,
    el
)
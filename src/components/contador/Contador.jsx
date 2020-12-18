import React, { Component }  from 'react'
import Display from './Display'
import PassoForm from './PassoForm'
import Button from './Button'
import './Contador.css'

class Contador extends Component {
    
    // usamos uma propriedade para trabalhar com os 'estados'
    //'this' esta apontando para a instacia dessa classe
    state = {
        number: this.props.numberStart || 0,
        unidade: this.props.unidade || 5
    }
    
    // 'setState' vem apartir do Component do react
    inc = () =>{ // faz com que o this aponte para o objeto correto
        this.setState({
            number: this.state.number + this.state.unidade
        })
    }
    dec = () =>{ // faz com que o this aponte para o objeto correto
        this.setState({
            number: this.state.number - this.state.unidade
        })
    }

    // changerUnid = (e) =>{
    //     this.setState({
    //         unidade: parseInt(e.target.value) 
    //     })
    // }
    changerUnid = (newUnid) =>{
        this.setState({
            unidade: newUnid
        })
    }
    render(){ // Componente chama o 'render' para renderizar 
    return(
        <div className='Contador'>
                <h2>Contador</h2>
                <Display number={this.state.number}/>
                <PassoForm valor={this.state.unidade} setUnid={this.changerUnid}/>
                <Button setInc={this.inc} setDec={this.dec}/>
            </div>
        )
    }
}

export default Contador
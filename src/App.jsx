import Primeiro from './components/basicos/Primeiro' //Usa referenciando como um componente, como uma tag
import ComParametro from './components/basicos/ComParametro'
import Fregmento from './components/basicos/Fragmento'
import NumRandom from './components/basicos/NumRandom'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Reac from 'react'
import './App.css'

export default () => {
    // O componente App não está usando propriedades vinda de outro componentes, por isso o uso de arrow function
    return (
        <div className="App">
            
            <h1>Fundamentos React!</h1>
            {/* Os componentes adjacentes devem está envolvidos por uma tag */}
            {/* JSX não precisa ter a tag de fechamento */}

            <div className="Cards">
                <Card titulo='#05 - Componente com Filhos' color='#00C8F8'>
                    <Familia sobrenome='Queiroz'>
                        <FamiliaMembro nome='Josué'/>
                        <FamiliaMembro nome='Isabel'/>
                        <FamiliaMembro nome='Ulisses'/>
                    </Familia>
                </Card>

                <Card titulo='#04 - Desafio Aleatório' color='#FA6900'>
                    <NumRandom min={1} max={100} />
                </Card>

                <Card titulo='#03 - Fragmento' color='#E94C6F'>
                    <Fregmento />
                </Card>

                <Card titulo='#02 - Componente com Parametro' color='#E8B71A'>
                    <ComParametro titulo="Segundo Componente" subtitulo="Componente recebendo parametro" />
                    <ComParametro desc="Situação do aluno" aluno="Ulisses" nota="6.3" />
                    <ComParametro desc="Situação do aluno" aluno="Ana" nota={9.9} />
                </Card>

                <Card titulo='#01 - Primeiro Componente' color='#588C73'>
                    <Primeiro></Primeiro>
                </Card>
            </div>      
        </div>
    )
}
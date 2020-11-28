import Reac from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro' //Usa referenciando como um componente, como uma tag
import ComParametro from './components/basicos/ComParametro'
import Fregmento from './components/basicos/Fragmento'
import NumRandom from './components/basicos/NumRandom'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaDeProdutos from './components/repeticao/TabelaDeProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'

export default () => {
    // O componente App não está usando propriedades vinda de outro componentes, por isso o uso de arrow function
    return (
        <div className="App">
            
            <h1>Fundamentos React!</h1>
            {/* Os componentes adjacentes devem está envolvidos por uma tag */}
            {/* JSX não precisa ter a tag de fechamento */}
        
            <div className="Cards">
                <Card titulo='10 - Comunicação Indireta' color='#8bad39'>
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo='09 - Comunicação Direta' color='#59323c'>
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo='08 - Renderização Condicional' color='#982395'>
                    <ParOuImpar numero={27}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Ulisses' }}></UsuarioInfo>
                    <UsuarioInfo usuario={{ email: '@ulisses.com' }}></UsuarioInfo>
                </Card>

                <Card titulo='07 - Repetição - Produto' color='#3a9ad9'>
                    <TabelaDeProdutos></TabelaDeProdutos>
                </Card>

                <Card titulo='06 - Repetição' color='#FF4c65'>
                    <ListaAlunos></ListaAlunos>
                </Card>

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
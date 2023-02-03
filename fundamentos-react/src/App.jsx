import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'


export default function App(props) {
    return (
        <div id="app">
            
            <h1>Fundamentos React</h1>

            <Card titulo="#4 Desafio Aleatório">
                <Aleatorio min={1} max={60}></Aleatorio>
            </Card>

            <Card titulo="#3 Fragmento">
                <Fragmento></Fragmento>
            </Card>
            
            <Card titulo="#2 Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>

            <Card titulo="#1 Com Parâmetro">
                <ComParametro titulo="Situação do Aluno:" aluno="Thiago J A Silva" nota={10.0}></ComParametro>
            </Card>

        </div>

    )
    
}
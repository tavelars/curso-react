import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default function App(props) {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Primeiro></Primeiro>
            <ComParametro titulo="Situação do Aluno:" aluno="Thiago J A Silva" nota={10.0}></ComParametro>
            <Fragmento></Fragmento>
        </div>
    )
}
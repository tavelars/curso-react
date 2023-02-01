import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const nome = <strong>Thiago J A Silva</strong>

ReactDOM.render(
    <div>
        <strong>Olá React,</strong> {nome}
        <br />
        <Primeiro></Primeiro>
        <ComParametro titulo="Segundo componente desenvolvido" subtitulo="React componentizando"></ComParametro>
        <ComParametro titulo="Customizando mensagens via parametro" subtitulo="Tudo parametrizado"></ComParametro>
    </div>,
    document.getElementById("root")
)
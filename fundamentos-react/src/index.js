import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro'

const nome = <strong>Thiago J A Silva</strong>

ReactDOM.render(
        <div>
            <strong>Olá React,</strong> {nome} 
            <br></br>
            <Primeiro></Primeiro>
        </div>, 
    document.getElementById("root")
)
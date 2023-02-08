import './App.css'

import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia';
import MembroFamiliaProps from './components/basicos/FamiliaMembroProps';
import FamiliaProps from './components/basicos/FamiliaProps';
import FamiliaMembroProps from './components/basicos/FamiliaMembroProps';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';

export default function App(props) {
    return (

        <div className="App">

            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#10 Usuário Info" color="#778899">
                    <UsuarioInfo usuario={{nome: 'Thiago'}}></UsuarioInfo>
                    <UsuarioInfo usuario={{nome: 'Marina'}}></UsuarioInfo>
                    <UsuarioInfo usuario={{nome: 'Isis'}}></UsuarioInfo>
                    <UsuarioInfo usuario={{email: 'a@gmail.com'}}></UsuarioInfo>
                </Card>

                <Card titulo="#9 Renderizacao Condicional" color="#00FFFF">
                    <ParOuImpar numero="20"></ParOuImpar>
                </Card>


                <Card titulo="#8 ETabela Produtos" color="#01070a">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#7 Estrutura Repetição" color="#24070a">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#6 Componente com filhos Props" color="#24076e">
                    <FamiliaProps sobrenome="Silva">
                        <FamiliaMembroProps nome="Thiago"></FamiliaMembroProps>
                        <FamiliaMembroProps nome="Marina" sobrenome="Ladeira"></FamiliaMembroProps>
                        <FamiliaMembroProps nome="Isis Ladeira"></FamiliaMembroProps>
                    </FamiliaProps>
                </Card>

                <Card titulo="#5 Componente com filhos" color="#946363">
                    <Familia sobrenome="Silva"></Familia>
                </Card>

                <Card titulo="#4 Desafio Aleatório" color="#efb914">
                    <Aleatorio min={1} max={60}></Aleatorio>
                    <Aleatorio min={1} max={60}></Aleatorio>
                    <Aleatorio min={1} max={60}></Aleatorio>
                    <Aleatorio min={1} max={60}></Aleatorio>
                    <Aleatorio min={1} max={60}></Aleatorio>
                    <Aleatorio min={1} max={60}></Aleatorio>
                </Card>

                <Card titulo="#3 Fragmento" color="#d69cbc">
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo="#2 Primeiro Componente" color="#fa4949">
                    <Primeiro></Primeiro>
                </Card>

                <Card titulo="#1 Com Parâmetro" color="#93c47d">
                    <ComParametro titulo="Situação do Aluno:" aluno="Thiago J A Silva" nota={10.0}></ComParametro>
                </Card>
            </div>

        </div>

    )

}
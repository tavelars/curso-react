import './Contador.css';
import React from "react";
import { Component } from "react";

class Contador extends Component {

    constructor(props) {

        super(props);

        this.state = {
            numero: props.numeroInicial,
            passo: props.passo,
        }

        this.inc = this.inc.bind(this);
    }

    /* Para resolver o problema do this e possivel utilizar uma funcao arrow.
        inc = () => {
            this.setState({
                numero: this.state.numero + 1,
            });
        }
    */


    inc() {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (event) => {
        this.setState({
            passo: +event.target.value,
        })
    }

    render() {
        return (
            <div styleClass="Contador">
                <h2>Contador</h2>
                
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input 
                        id="passoInput" 
                        type="number" 
                        value={this.state.passo} 
                        onChange={this.setPasso}/>
                </div>

                <h3>Valor Inicial: {this.state.numero}</h3>
                <button onClick={this.inc}> + </button>
                <button onClick={this.dec}> - </button>
            </div >
        )
    }

}

export default Contador
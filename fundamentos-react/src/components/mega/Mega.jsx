import React, { useState } from "react";
import './Mega.css'

export default props => {

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * ((max + 1) - min)) + min
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = Array(props.qtde || 6).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)


    return (
        <div className="Mega">
            <h3>Mega Sena</h3>

            <h2>{numeros.join(' ')}</h2>

            <div>
                <label>Qtde Números</label>
                <input type="number" value={qtde}
                    min="6" max="9"
                    onChange={e => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                    }} />
            </div>

            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Números</button>

        </div>
    )
}
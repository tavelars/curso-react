import React from "react"

export default function ComParametro(props) {
    
    return  (
        <div>
            <p><strong>{props.titulo} {props.aluno}</strong>, <strong> Nota: {props.nota}</strong></p>
        </div>
    )

}
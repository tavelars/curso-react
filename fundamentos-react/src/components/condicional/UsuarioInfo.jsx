import React from "react";
import IF from "./IF";

export default props => {
    const usuario = props.usuario;
    return (
        <div>
            <IF test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>
            </IF>
        </div>
    )

}
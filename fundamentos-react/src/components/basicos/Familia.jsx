import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default function Familia(props){
    
    return(
        <div>
            <FamiliaMembro nome="Thiago" {...props}></FamiliaMembro>
            <FamiliaMembro nome="Marina" sobrenome="Ladeira"></FamiliaMembro>
            <FamiliaMembro nome="Isis" sobrenome="Ladeira Silva"></FamiliaMembro>
        </div>
    )

}
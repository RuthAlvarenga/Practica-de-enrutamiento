import React from 'react'
import { useParams } from 'react-router-dom';

const Pagina2 = () => {
    const {number} = useParams();
    const showMessage= ()=>
    {
        if(isNaN(number)){
            return (
                <h1>El número es: Por favor, escriba un Número </h1>
            )
        }
        else{
            return (
                <h1>El número es: {number} </h1>
            )
        }
    }


    return (
        <div>
            {showMessage()}
        </div>
    );
}

export default Pagina2;
import React from 'react'
import { useParams } from 'react-router-dom';

const Pagina3 = () => {
    const {palabra, color2, color1} = useParams();
    const estilo = {
        backgroundColor: color2,
        color: color1,
        heigth: "100 px",
        padding: "10px",
    };

    const showMessage= ()=>
    {
        if((palabra)){
            return (
                <h1 >La palabra es: {palabra} </h1>
            )
        }
    }
    return (
        <div className='div' style={estilo}>
            {showMessage()}
        </div>
    )
}

export default Pagina3;
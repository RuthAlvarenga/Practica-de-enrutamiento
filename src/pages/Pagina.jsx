import React from 'react'
import { useParams } from 'react-router-dom'; 

const Pagina= () => {
        const {palabra} = useParams();
        return <h1> La Palabra es: {palabra}</h1>
}      

export default Pagina;
import React from 'react';
import Carrusel from '../components/InicioNoregistrados/Carrusel.jsx';
import NavBarfuera from '../components/InicioNoregistrados/NavBarfuera.jsx';
import Informacion from '../components/InicioNoregistrados/Informacion.jsx';
import LastButton from '../components/InicioNoregistrados/LastButton.jsx';
import Titulonoregistrado from '../components/InicioNoregistrados/Titulonoregistrados.jsx';
import Espacio from '../components/Admin/Espacio.jsx';
import Footer from '../components/repetidos/Footer.jsx'

class Bonhomiauno extends React.Component{
    render (){
        return(
        <div>
            <div>
                <NavBarfuera/>
            </div>

                <div>
                <Carrusel/>
                </div>
                <div>
                    <Espacio/>
                </div>
                <div>
                    <Titulonoregistrado/>
                </div>
                <div>
                    <Espacio/>
                </div>
                <div>
                    <Informacion/>
                </div>
                <div>
                    <Espacio />
                </div>
                <div>
                    <LastButton button='Regístrate'/>
                </div>
                <div>
                    <Footer/>
                </div>
        </div>
        
        ) 
    }
}
export default Bonhomiauno ;
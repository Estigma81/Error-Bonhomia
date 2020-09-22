import React from 'react';
import NavBardentro from '../components/repetidos/NavBardentro.jsx';
import Bannermusica from '../components/Musica/Bannermusica.jsx';
import Canciones from '../components/Musica/Canciones.jsx'
import Footer from '../components/repetidos/Footer.jsx'


class Bonhomiamusica extends React.Component{
    render (){
        return(
        <div>
            <div>
                <NavBardentro/>
            </div>
            <div>
                <Bannermusica/>
            </div>
            <div>
                <Canciones/>
            </div>
            <div>
                <Footer/>
            </div>

        </div>
        
        ) 
    }
}
export default Bonhomiamusica ;
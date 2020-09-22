import React from 'react';
import '../../styles/CardAdmin.css'
import Actividades from '../../images/Actividades.png';
import Musica from '../../images/Musica.png';



class Card1 extends React.Component {
    render() {
        return (
            <div class="card-group">
                <div class="card">
                    <img src={Actividades} className="Administrador__card"id="Imagencard_Admin" alt="..."/>
                        
                </div>
                    
                <div class="card">
                        <img src={Musica} className="Administrador__card" id="Imagencard_Admin2" alt="..."/>
                </div>
                    
            </div>
        )
    }
}
export default Card1;
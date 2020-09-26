import React from 'react';
import '../../styles/Tipografias.css';
import PerfilAdmin from '../../images/PerfilAdmin.png'
import '../../styles/Cardperfil_Admin.css';


class Cardperfil extends React.Component {
    render() {
        return (
            <div className="card-deck" >
                <div className="row justify-content-center h-200">
                <div className="card" id="Card-1">
                    <img src={PerfilAdmin}className="card-img-top"  id="Imagen-perfil" alt=""/>
                </div>
                </div>
               
                    <div className="card" id="Card-2">      
                            <div className="card-body">
                                <h5 className="card-title" id="Card-title">Bienvenido a tu perfil</h5>
                                <h5 className="card-title" id="Card-title-text">Nombre:<p className="card-text">Santiago Ramírez</p></h5>
                                <h5 className="card-title" id="Card-title-text">Nickname:<p className="card-text">Estigma81</p></h5>
                                <h5 className="card-title" id="Card-title-text">Email:<p className="card-text">santiagoa@iefedericoozanam.edu</p></h5>
                                <h5 className="card-title" id="Card-title-text">Fecha de cumpleaños:<p className="card-text">28/12/2003</p></h5>
                                <h5 className="card-title" id="Card-title-text">Mascotas:<p className="card-text">Si tiene</p></h5>
                                <h5 className="card-title" id="Card-title-text">Género:<p className="card-text">Masculino</p></h5>
                                
                            </div>
                    </div>
            </div>
        )
    }
}
export default Cardperfil;
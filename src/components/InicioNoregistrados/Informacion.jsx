import React from 'react';
import '../../styles/Informacion.css';
import Informacionimagen from '../../images/Informacion.png';

class Informacion extends React.Component {
    render() {
        return (
            <div className="card-deck" >
                <div className="card" id="CardInfo">
                    <img src={Informacionimagen} className="card-img-top" id="Imagen-perfil" alt="" />
                </div>
                <div className="card" id="CardInfo2">
                    <div className="card-body">
                        <p className='P__informacion'>Peter Salovey y John D. Mayer fueron los principales investigadores de la Inteligencia Emocional en 1990.
                <p className='P__informacion1'> En su influyente artículo “Inteligencia Emocional”, la definen como “el subconjunto de la inteligencia social que implica la capacidad de monitorizar los sentimientos y emociones propios y de los demás, de discriminar entre ellos y utilizar esta información para guiar el pensamiento de uno y acciones” (1990).</p>
                        </p>

                    </div>
                </div>
            </div>

        )
    }
}
export default Informacion;
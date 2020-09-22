import React from 'react';
import '../../styles/CategoriasAdmin.css';
import Arrowdown from '../../images/flechaabajo.png'


class CategoriasAdmin extends React.Component {
    render() {
        return (
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li classname="list-group-item" id="Categorias">

                        <h2 className="d-inline-block" id="Admin_Texto">CATEGORIAS</h2>
                        <img src={Arrowdown} className="Imagen_Categoria" height="30px" width="30px" alt="" />
                    </li>
                </ul>
            </div>

        )
    }
}
export default CategoriasAdmin;
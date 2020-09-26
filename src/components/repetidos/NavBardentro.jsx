
import React from "react";
import "../../styles/Tipografias.css";
import '../../styles/NavBardentro.css';
import Logo from "../../images/Logo.png";
import Logout from  "../../images/logout.png";
import PerfilUsuario from "../../images/Usuario.png";
import {Link} from 'react-router-dom'

class NavBardentro extends React.Component {
render() {
    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/bonhomia" className="navbar-brand">
                    <img className='navbar-brand_img' width="50px" height="50px" src={Logo} alt=""/>
                </Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <Link to="/bonhomia/actividades" className="nav-item nav-link">Actividades</Link>
                    <Link to="/bonhomia/musica" className="nav-item nav-link">Música</Link>
                    <Link to="/bonhomia/temporizador" className="nav-item nav-link">Temporizador</Link>
            </div>      
            <div className="navbar-brand" id="navbarNav">
                <Link to="" className="navbar-brand"><img className="navbar-brand_img" width="55px" height="55px" src={Logout} alt="Perfil" /></Link>
                <Link to="/bonhomia/perfiladmin" className="navbar-brand"><img className="navbar-brand_img" width="65px" height="65px" src={PerfilUsuario} alt="Perfil" /></Link>
            </div>
        </nav>
        </React.Fragment>
        );
    }
}
export default NavBardentro;
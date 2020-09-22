
import React from "react";
import "../../styles/Tipografias.css";
import '../../styles/NavBardentro.css';
import Logo from "../../images/Logo.png";
import Logout from  "../../images/logout.png";
import PerfilUsuario from "../../images/Usuario.png";

class NavBardentro extends React.Component {
render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
            <img className='navbar-brand_img' width="50px" height="50px" src={Logo} alt=""/>
        </a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <a className="nav-item nav-link" href="/home">Actividades</a>
            <a className="nav-item nav-link" href="/producto">Música</a>
            <a className="nav-item nav-link" href="/precio">Temporizador</a>
    </div>      
    <div className="navbar-brand" id="navbarNav">
        <a className="navbar-brand" href="/"><img className="navbar-brand_img" width="55px" height="55px" src={Logout} alt="Perfil" /></a>
        <a className="navbar-brand" href="/"><img className="navbar-brand_img" width="65px" height="65px" src={PerfilUsuario} alt="Perfil" /></a>
    </div>
</nav>
        );
    }
}
export default NavBardentro;
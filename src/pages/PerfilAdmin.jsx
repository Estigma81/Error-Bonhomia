import React from 'react';
import NavBardentro from '../components/repetidos/NavBardentro.jsx';
import Espacio from '../components/Admin/Espacio.jsx'
import Cardperfil from '../components/Admin_Perfil/Cards_Perfil.jsx'
import Footer from '../components/repetidos/Footer.jsx';
import Ancleperfil from '../components/Admin_Perfil/Ancle_Perfiladmin.jsx'


class PerfilAdmin extends React.Component {
    render() {
        return (
            <div>
                
                <div>
                    <NavBardentro/>
                </div>
                <div>
                    <Espacio/>
                </div>
                <div>
                    <Cardperfil/>
                </div>
                <div>
                    <Espacio/>
                </div>
                <div>
                    <Ancleperfil/>
                </div>
                <div>
                    <Espacio/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>

        )
    }
}
export default PerfilAdmin;
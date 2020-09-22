import React from 'react';
import NavBardentro from '../components/repetidos/NavBardentro.jsx';
import Categorias from '../components/Admin/Categorias_Admin.jsx'
import Espacio from '../components/Admin/Espacio.jsx'
import Banner from '../components/Admin/Banner_Admin.jsx'
import ButtonAdmin from '../components/Admin/Button_Admin.jsx'
import Footer from '../components/repetidos/Footer.jsx'


class Admin extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <NavBardentro />
                </div>
                <div>
                    <Espacio />
                </div>
                <div>
                    <Categorias />
                </div>
                <div>
                    <Banner/>
                </div>
                <div>
                    <ButtonAdmin/>
                </div>
                <div>
                    <Footer/>
                </div>





            </div>

        )
    }
}
export default Admin;
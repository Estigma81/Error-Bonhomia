import React from 'react';
import NavBardentro from '../components/repetidos/NavBardentro.jsx';
import Card1 from '../components/Admin_Actividades/Card1Admin.jsx'
import Footer from '../components/repetidos/Footer.jsx'


class Admin_Actividades extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <NavBardentro />
                </div>
                <div>
                    <Card1/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>

        )
    }
}
export default Admin_Actividades;
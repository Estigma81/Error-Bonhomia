import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Bonhomiauno from '../pages/Bonhomiauno.jsx';
import AdminPerfil from '../pages/PerfilAdmin.jsx'
import BonhomiaAdmin from '../pages/Bonhomiaadmin.jsx'
import BonhomiaAdminactividades from '../pages/Bonhomiaadminactividades.jsx'
import Musica from '../pages/Bonhomiamusica.jsx'

function Aplicacion (){
    return (
        <BrowserRouter>

        <Switch>  
            <Route exact path= '/bonhomia' component={Bonhomiauno}/>
            <Route exact path= '/bonhomia/admin' component={BonhomiaAdmin}/>
            <Route exact path= '/bonhomia/adminactividades' component={BonhomiaAdminactividades}/>
            <Route exact path= '/bonhomia/perfiladmin' component={AdminPerfil}/>
            <Route exact path= '/bonhomia/musica' component={Musica}/>
        </Switch>

        </BrowserRouter>

    )
}
export default Aplicacion;
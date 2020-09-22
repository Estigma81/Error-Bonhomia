import React from 'react';
import '../../styles/LastButton.css'
import {Link} from 'react-router-dom'

class LastButton extends React.Component{
    render (){
        return (
           <Link to="/bonhomia/perfil"><button type="button" id="Button" className="btn btn-primary btn-lg btn-block">{this.props.button}</button></Link>
          
        )
    }
}
export default LastButton;
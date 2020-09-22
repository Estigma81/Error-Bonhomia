import React from 'react';
import '../../styles/Footer.css';
import Derechos from '../../images/DerechosReservado.png';

class Footer extends React.Component {
    render() {
        return (
            <footer class="footer">
                <div className="icons-social">
                    <ul className="list-social">

                        <li className="icons-social__item"><a className="icons-social__link" href="/"><i className="icons-social__i fab fa-facebook"></i></a></li>
                        <li className="icons-social__item"><a className="icons-social__link" href="/"><i className="icons-social__i fab fa-instagram"></i></a></li>
                        
                        
                    </ul>
                </div>
                <div class="container-footer">
                    <p><img src={Derechos} className="Derechos" alt="/" />Todos los derechos reservados</p>
                </div>
            
        </footer >
            )
    }
}

export default Footer;
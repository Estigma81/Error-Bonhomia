import React from 'react';
import '../../styles/Carrusel.css';
import inteligencia from '../../images/1Carrusel.png'
import Objetivo from '../../images/2Carrusel.png'
import Quienes from '../../images/3Carrusel.png'

class Carrusel extends React.Component{
    render (){
        return (
         <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
        
            <div className="carousel-inner">
                <div className="item active">
                    <img src={inteligencia}  id="Carrusel__1" alt=""/>
                    
                </div>
                <div className="item">
                    <img src={Objetivo}  id="Carrusel__2" alt=""/>
                    
                </div>
                <div class="item">
            <img src={Quienes}  id="Carrusel__3" alt=""/>

        </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a clasName="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        )
    }
     
}
export default Carrusel;

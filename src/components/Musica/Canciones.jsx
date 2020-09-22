import React from 'react';

import Clair from '../../images/Clair.jpg'
import chopin from '../../images/chopin.jpg'
import Paul from '../../images/Paul.jpg'
import Tcha from '../../images/Tcha.jpg'
import Bach from '../../images/Bach.jpg'
import Schubert from '../../images/Schubert.jpg'
import Satie from '../../images/Satie.jpg'
import leftmusic from '../../images/leftmusic.png'
import pausemusic from '../../images/pausemusic.png'
import rightmusic from '../../images/rightmusic.png'
import '../../styles/Canciones.css'
import Cancion1 from '../repetidos/cancion1.jsx'

class Canciones extends React.Component{
    render (){
        return (
          <div>
              <Cancion1 idcancion="Cancion" imagenmusica={Clair} linkmusica="https://www.youtube.com/watch?v=CvFH_6DNRCY" nombrecancion="Clair de Lune" nombreautor="Claude Debussy" idautor="Autor__texto" idduracion="Duracion__texto" duracioncancion="5 minutos 2 segundos"/>
              <Cancion1 idcancion="Cancion1" imagenmusica={chopin} linkmusica="https://www.youtube.com/watch?v=9E6b3swbnWg" nombrecancion="Nocturne op.9 No.2" nombreautor="Frederic Chopin" idautor="Autor__texto2" idduracion="Duracion__texto2" duracioncancion="4 minutos 29 segundos"/> 
              <Cancion1 idcancion="Cancion" imagenmusica={Paul} linkmusica="https://www.youtube.com/watch?v=EFJ7kDva7JE" nombrecancion="Spring Waltz" nombreautor="Paul de Senneville" idautor="Autor__texto3" idduracion="Duracion__texto3" duracioncancion="5 minutos 11 segundos"/>
              <Cancion1 idcancion="Cancion1" imagenmusica={Tcha} linkmusica="https://www.youtube.com/watch?v=QxHkLdQy5f0" nombrecancion="Waltz of the flowers" nombreautor="Tchaikovsky" idautor="Autor__texto4" idduracion="Duracion__texto4" duracioncancion="7 minutos 30 segundos"/>
              <Cancion1 idcancion="Cancion" imagenmusica={Bach} linkmusica="https://www.youtube.com/watch?v=frxT2qB1POQ" nombrecancion="Prelude in C major" nombreautor="Joan Sebastian Bach" idautor="Autor__texto5" idduracion="Duracion__texto5" duracioncancion="2 minutos 44 segundos"/>
              <Cancion1 idcancion="Cancion1" imagenmusica={Schubert} linkmusica="https://www.youtube.com/watch?v=biUv4VLW0fc" nombrecancion="Serenade" nombreautor="Schubert" idautor="Autor__texto6" idduracion="Duracion__texto6" duracioncancion="5 minutos 48 segundos"/>
              <Cancion1 idcancion="Cancion" imagenmusica={Satie} linkmusica="https://www.youtube.com/watch?v=PLFVGwGQcB0" nombrecancion="Gnossienne No.1" nombreautor="Erik Satie" idautor="Autor__texto7" idduracion="Duracion__texto7" duracioncancion="3 minutos 24 segundos"/>
              <ul className="list-group list-group-flush">
              <li classname="list-group-item" id="Cancion1">
              <img src={leftmusic} id="Cancion__left" alt=""/>
              <img src={pausemusic} id="Cancion__pause" alt=""/>
              <img src={rightmusic} id="Cancion__right" alt=""/>
              </li>
              </ul>
          </div>
         

              
              

              
              
          
          
        )
    }
}
export default Canciones;
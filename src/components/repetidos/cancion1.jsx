import React from 'react';


class Cancion1 extends React.Component {
    render() {
        return (
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li classname="list-group-item" id={this.props.idcancion}>
                        <img src={this.props.imagenmusica} id="Cancion__img" alt="" />
        <p className="d-inline-block " id="Cancion__texto"><a href={this.props.linkmusica}>{this.props.nombrecancion}</a></p>
        <p className="d-inline-block " id={this.props.idautor}>{this.props.nombreautor}</p>
                        <p className="d-inline-block " id={this.props.idduracion}>{this.props.duracioncancion}</p>
                    </li>
                </ul>
            </div>
        )
    }

}
export default Cancion1;
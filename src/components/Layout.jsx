import React from 'react';
import footer from './repetidos/Footer.jsx'

function Layout(props){
    return(
        <React.Fragment>
            <footer/>
            {props.children}
        </React.Fragment>
    )
}
export default Layout;
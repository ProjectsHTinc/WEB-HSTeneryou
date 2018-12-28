import React, { Component } from 'react';
import Error_icon from './images/404_icon.png';

class Error extends Component {
    render() {
    return (
        <div className="container-fluid error_page_height">
        <div className="error_bg">
       
        <img src={Error_icon} alt="ENER YOU" className=""/> 
      
        </div>
        <center><p><a href="/">Back to Site</a></p> </center>
            

        </div>
    );
}
}

export default Error;
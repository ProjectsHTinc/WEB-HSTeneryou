import React, { Component } from 'react';


class Footer extends Component {
    render() {
    return (
        <div className="container-fluid wrapper footer_section">
            <div className="container ">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer_links">
                            <a href="">Imprint</a>
                            <a href="">Data Secuirty</a>
                            <a href="">Contact</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                    
                    </div>
                    <div className="col-md-4">
                    <div className="footer_links copyrights">
                            <a href="">ENER|YOU</a>
                          
                        </div>
                    </div>
            
                </div>        
            </div>
        </div>
    );
}
}

export default Footer;
import React, { Component } from 'react';


class Footer extends Component {
    render() {
    return (
        <div className="container-fluid wrapper footer_section">
            <div className="container ">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer_links">
                            <a href="">Impressum</a>
                            <a href="">Datenschutzerklärung</a>
                            <a href="">Kontakt</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                    
                    </div>
                    <div className="col-md-4">
                    <div className="footer_links copyrights">
                            <a href="">Ener|You</a>
                          
                        </div>
                    </div>
            
                </div>        
            </div>
        </div>
    );
}
}

export default Footer;
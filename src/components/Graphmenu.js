import React, { Component } from 'react';
class Graphmenu extends Component {

    render(){
        return(
            <div className="">
         
                <div className="container">
                    <div className="row" style={{marginTop:'10px'}}>
                        <div className="col-md-4">
                            <div className="tab_box_1">
                                <p><a href="/Energetic">Energetic Analysis</a></p>
                            </div>
                            
                        </div>
                        <div className="col-md-4">
                        <div className="tab_box_2">
                                <p><a href="/Economicgraph">Economic Analysis</a></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="tab_box_3">
                                <p><a href="/Emission">Ecological Analysis</a></p>
                            </div>
                        </div>
                    </div>
                </div>
          
        </div>
        )
    }
}
export default Graphmenu;
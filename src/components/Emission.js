import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import Graph_7 from './Graph_7';
import Graphmenu from './Graphmenu';
import form_bg_3 from './images/form_3_bg.png';


class Emission extends Component {


    constructor() {
        super();
        this.state = { tabIndex: 0 };
      }


    render(){
        return(
            <div className="container-fluid wrapper">
            <Header/>
            <h4 className="form_heading">Product Comparsion Graph  </h4>
                <div className="container" style={ { marginTop:'40px',marginBottom:'100px', backgroundImage: 'url(' + form_bg_3 + ')',
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 height:'600px',
                 backgroundRepeat: 'no-repeat' } }>
               
                <div className="row"  >
                <div className="graph_box">
                    <Graphmenu/>
                    <div className="graph_pic">
                    <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                        <Tab>Graph 1</Tab>
                    </TabList>
                        <TabPanel>
                            <Graph_7/>
                        </TabPanel>
                </Tabs>
                    </div>
                    
                </div>
               
                </div>
              
                </div>
            <Footer/>
        </div>
        )
    }
}
export default Emission;
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import Graph_1 from './Graph_1';
import Graph_2 from './Graph_2';
import Graphmenu from './Graphmenu';
import form_bg_3 from './images/form_3_bg.png';


class Energetic extends Component {


    constructor() {
        super();
        this.state = { tabIndex: 0 };
      }


    render(){
        return(
            <div className="container-fluid wrapper">
            <Header/>
            <h4 className="form_heading">Vergleich Ihrer Produktempfehlungen und Analyse  </h4>
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
                        <Tab>Elektrischer Autarkiegrad</Tab>
                        <Tab>Stromfluss</Tab>
                    </TabList>
                        <TabPanel>
                            <Graph_1/>
                        </TabPanel>
                    <TabPanel>
                            <Graph_2/>    
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
export default Energetic;
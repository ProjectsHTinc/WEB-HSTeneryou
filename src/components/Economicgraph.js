import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import Graph_1 from './Graph_1';

import Graphmenu from './Graphmenu';
import form_bg_3 from './images/form_3_bg.png';


class Economicgraph extends Component {


    constructor() {
        super();
        this.state = { tabIndex: 0 };
      }


    render(){
        return(
            <div className="container-fluid wrapper">
            <Header/>
            <h4 className="form_heading">Product Comparsion Graph  </h4>
                <div className="container" style={ { marginTop:'40px',marginBottom:'40px', backgroundImage: 'url(' + form_bg_3 + ')',
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
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                        <Tab>Tab 4</Tab>
                    </TabList>
                        <TabPanel>
                                <Graph_1/>
                        </TabPanel>
                    <TabPanel>
                        <Graph_1/>    
                     </TabPanel>
                   
                        <TabPanel>
                                <Graph_1/>
                        </TabPanel>
                    <TabPanel>
                        <Graph_1/>    
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
export default Economicgraph;
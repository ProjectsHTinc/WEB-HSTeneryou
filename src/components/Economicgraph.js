import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import Graph_3 from './Graph_3';
import Graph_4 from './Graph_4';
import Graph_5 from './Graph_5';
import Graph_6 from './Graph_6';
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
                        <Tab>Graph 3</Tab>
                        <Tab>Graph 4</Tab>
                        <Tab>Graph 5</Tab>
                        <Tab>Graph 6</Tab>
                    </TabList>
                        <TabPanel>
                                <Graph_3/>
                        </TabPanel>
                        <TabPanel>
                                <Graph_4/>    
                        </TabPanel>
                        <TabPanel>
                                <Graph_5/>
                        </TabPanel>
                        <TabPanel>
                                <Graph_6/>    
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
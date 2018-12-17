import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

import product_1 from './images/product_1.png';
import product_2 from './images/product_2.png';
import product_3 from './images/product_3.png';
import graph_img_1 from './images/graph_img_1.png';
import graph_img_2 from './images/graph_img_2.png';
import graph_img_3 from './images/graph_img_3.png';


class Product extends Component {

    constructor(props){
        super(props)
        this.state = {
            step :5,                  
           
        };
    }

    componentDidMount(){
        const {values: {roof_inclination,living_area,post_code,directionChange,construction_year,person_count,power_consumption,energy_demand,yearlyGasDemand,yearlyEnergyDemand,yearlyEnergyDemandOnWater,budget_value }} = this.props;
        let var_1=roof_inclination;
        alert(var_1);
        
       
    }

    render(){

        // const {values: {roof_inclination,living_area,post_code,directionChange,construction_year,person_count,power_consumption,energy_demand,yearlyGasDemand,yearlyEnergyDemand,yearlyEnergyDemandOnWater,budget_value }} = this.props;

        return(
            <div className="container-fluid wrapper">
            <Header/>

                <div className="container">
                  {/* {roof_inclination}{living_area}{post_code}{directionChange}{construction_year}{person_count}{power_consumption}{energy_demand}{yearlyGasDemand}{yearlyEnergyDemand}{yearlyEnergyDemandOnWater}{budget_value} */}
                  <h4 className="form_heading">Product Recommendation  </h4>
                  <div className="row product_recommendation">
                        <div className="col-md-4 col-sm-12">
                            <div className="product_img">
                                 <img src={product_1} circle/>
                            </div>
                            <div className="product_box_1_1">
                                <div className="product_heading">
                                <div className="row">
                                        <div className="col-md-4 col-sm-4"> <p>Component</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="product_box_1_2">
                                <div className="product_heading">
                                <div className="row">
                                        <div className="col-md-4 col-sm-4"> <p>Component</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>
                                </div>
                                <div className="product_heading">
                                <div className="row">
                                        <div className="col-md-4 col-sm-4"> <p>Component</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>
                                </div>
                                <div className="product_heading">
                                    <div className="row">
                                    <div className="col-md-4 col-sm-4"> <p>Component</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>
                                </div>

                            </div>
                            <div className="product_box_1_3">
                                <div className="product_heading">
                                <div className="row">
                                         <div className="col-md-4 col-sm-4"> </div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>
                                </div>
                                <div className="product_heading">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4"> </div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>                                  
                                </div>
                                <div className="graph_img">
                                     <a href="/Economicgraph"><img src={graph_img_1} circle/></a>
                                </div>
                               

                            </div>
                            
                        </div>
                        <div className="col-md-4">
                        <div className="product_img">
                                 <img src={product_2} circle/>
                            </div>
                            <div className="product_box_2_1">
                                <div className="product_heading">
                                <div className="row">
                                        <div className="col-md-4 col-sm-4"> <p>Component</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="product_box_2_2">
                                <div className="product_heading">
                                <div className="row">
                                <div className="col-md-4 col-sm-4"> <p>Component</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>
                                </div>
                                <div className="product_heading">
                                <div className="row">
                                <div className="col-md-4 col-sm-4"> <p>Component</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>
                                </div>
                                <div className="product_heading">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4"> <p>Component</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>
                                </div>

                            </div>
                            <div className="product_box_2_3">
                                <div className="product_heading">
                                <div className="row">
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>
                                </div>
                                <div className="product_heading">
                                    <div className="row">
                                    <div className="col-md-4"></div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>                                  
                                </div>
                                <div className="graph_img">
                                <a href="/Emission"><img src={graph_img_2} circle/></a>
                                </div>
                               

                            </div>

                        </div>
                        <div className="col-md-4">
                        <div className="product_img">
                                 <img src={product_3} circle/>
                            </div>
                            <div className="product_box_3_1">
                                <div className="product_heading">
                                <div className="row">
                                <div className="col-md-4 col-sm-4"> <p>Component</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="product_box_3_2">
                                <div className="product_heading">
                                <div className="row">
                                <div className="col-md-4 col-sm-4"> <p>Component</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>
                                </div>
                                <div className="product_heading">
                                <div className="row">
                                        <div className="col-md-4 col-sm-4"> <p>Component</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>
                                </div>
                                <div className="product_heading">
                                    <div className="row">
                                    <div className="col-md-4 col-sm-4"> <p>Component</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>
                                </div>

                            </div>
                            <div className="product_box_3_3">
                                <div className="product_heading">
                                <div className="row">
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>
                                </div>
                                <div className="product_heading">
                                    <div className="row">
                                    <div className="col-md-4"></div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Price</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>Product</p></div>
                                    </div>                                  
                                </div>
                                <div className="graph_img">
                                <a href="/Energetic"><img src={graph_img_3} circle/></a>
                                </div>
                               

                            </div>

                        </div>
                  </div>
                </div>
            <Footer/>
        </div>
        )
    }

}
export default Product;
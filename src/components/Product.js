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
            status:'',
            recommentations_value:[],
            systemCombinations_value:[],
        };
    }

    componentDidMount(){
        const {values: {roof_inclination,living_area,post_code,directionChange,construction_year,person_count,power_consumption,energy_demand,yearlyGasDemand,yearlyEnergyDemand,yearlyEnergyDemandOnWater,budget_value }} = this.props;
        let local_person_count = localStorage.getItem('person_count');
        //localStorage.setItem("budgetInput",budget_value);
    
      if (energy_demand === 'CONSTRUCTION_YEAR'){
        var data = {
            "building": {
                "postalCode": post_code,
                "constructionYear": construction_year,
                "livingSpace": living_area,
                "roofAlignment": directionChange,
                "roofTilt": roof_inclination
            },
            "energyDemand": {
                "personCount": local_person_count,
                "energyDemand": power_consumption,
                "headingDemandType": energy_demand
            }
          }
      } 

      if (energy_demand === 'GAS_OR_OIL_BILL'){
        var data = {
            "building": {
                "postalCode": post_code,
                "constructionYear": construction_year,
                "livingSpace": living_area,
                "roofAlignment": directionChange,
                "roofTilt": roof_inclination
            },
            "energyDemand": {
                "personCount": local_person_count,
                "energyDemand": power_consumption,
                "headingDemandType": energy_demand,
                "yearlyGasDemand": yearlyGasDemand
            }
          }
      } 
      
      if (energy_demand === 'ENERGY_CERTIFICATE'){ 
        var data = {
            "building": {
                "postalCode": post_code,
                "roofAlignment": directionChange,
                "roofTilt": roof_inclination
            },
            "energyDemand": {
                "energyDemand": power_consumption,
                "headingDemandType": energy_demand,
                "yearlyEnergyDemand": yearlyEnergyDemand,
                "yearlyEnergyDemandOnWater": yearlyEnergyDemandOnWater
            }
          }
      }

            fetch("http://18.222.103.21:8080/eneryou/api/recommentations",{
                method: 'POST',
                body:JSON.stringify(data),
                headers: {
                    'content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            })
            
            .then(response => {
                
                if (response.status === 200) {
                    response.json().then(response_data => {
                     this.setState({ 
                            recommentations_value: response_data.recommentations, 
                            systemCombinations_value:response_data.systemCombinations,
                            loading: true 
                            });
                    });
                } else if (response.status === 400) {
                            response.json().then(response_data => {
                        // console.log(response_data);
                            this.setState({ 
                             });
                     });
                    alert("invalid input values")
                } else if (response.status === 500) {
                    response.json().then(response_data => {
                        // console.log(response_data);
                         this.setState({ 
                             });
                     });
                    alert("General internal problems")
                }
            })
                
            .catch((error) => {
                console.error(error);
             })
    }

    render(){

        let i = 0;
        let recommentations_list_1 =[];
        let recommentations_list_1_furthering=[];
        let recommentations_list_1_investCost=[];
        let recommentations_list_1_operatingCost=[];
        let recommentations_list_2 =[];
        let recommentations_list_2_furthering=[];
        let recommentations_list_2_investCost=[];
        let recommentations_list_2_operatingCost=[];
        let recommentations_list_3 =[];
        let recommentations_list_3_furthering=[];
        let recommentations_list_3_investCost=[];
        let recommentations_list_3_operatingCost=[];
        
        
        for (i = 0; i < this.state.recommentations_value.length; i++) {
            if (i === 0){
                //recommentations_list_1_type.push(this.state.recommentations_value[0].type);
                recommentations_list_1_furthering.push(this.state.recommentations_value[0].furthering);
                recommentations_list_1_investCost.push(this.state.recommentations_value[0].investCost);
                recommentations_list_1_operatingCost.push(this.state.recommentations_value[0].operatingCost);
                //recommentations_list_1_systemCombinationPosition.push(this.state.recommentations_value[0].systemCombinationPosition);
                let j = 0;
                let products_1 =[];
                products_1 = this.state.recommentations_value[0].products;
                for (j = 0; j < this.state.recommentations_value[0].products.length; j++) {
                        let componentName_1 = products_1[j]['componentName'];
                        //let logoPath_1 = products_1[j]['logoPath'];
                        let price_1 = products_1[j]['price'];
                        //let productCode_1 = products_1[j]['productCode'];
                        let productName_1 = products_1[j]['productName'];
                        recommentations_list_1.push(<div className="row"><div className="col-md-4 col-sm-4"><p>{componentName_1}</p></div><div className="col-md-4 col-sm-4"><p>{productName_1}</p></div><div className="col-md-4 col-sm-4"><p>{price_1} € </p></div></div>);
                    }
            }
             if (i == 1){
                //recommentations_list_2_type.push(this.state.recommentations_value[1].type);
                recommentations_list_2_furthering.push(this.state.recommentations_value[1].furthering);
                recommentations_list_2_investCost.push(this.state.recommentations_value[1].investCost);
                recommentations_list_2_operatingCost.push(this.state.recommentations_value[1].operatingCost);
                //recommentations_list_2_systemCombinationPosition.push(this.state.recommentations_value[1].systemCombinationPosition);
                
                let k = 0;
                let products_2 =[];
                products_2 = this.state.recommentations_value[1].products;
                for (k = 0; k < this.state.recommentations_value[1].products.length; k++) {
                        let componentName_2 = products_2[k]['componentName'];
                       // let logoPath_2 = products_2[k]['logoPath'];
                        let price_2 = products_2[k]['price'];
                       // let productCode_2 = products_2[k]['productCode'];
                        let productName_2 = products_2[k]['productName'];
                        recommentations_list_2.push(<div className="row"><div className="col-md-4 col-sm-4"><p>{componentName_2}</p></div><div className="col-md-4 col-sm-4"><p>{productName_2}</p></div><div className="col-md-4 col-sm-4"><p>{price_2} € </p></div></div>);
                    }
            }
            if (i == 2){
                //recommentations_list_3_type.push(this.state.recommentations_value[2].type);
                recommentations_list_3_furthering.push(this.state.recommentations_value[2].furthering);
                recommentations_list_3_investCost.push(this.state.recommentations_value[2].investCost);
                recommentations_list_3_operatingCost.push(this.state.recommentations_value[2].operatingCost);
                //recommentations_list_3_systemCombinationPosition.push(this.state.recommentations_value[2].systemCombinationPosition);
                
                let l = 0;
                let products_3 =[];
                products_3 = this.state.recommentations_value[2].products;
                for (l = 0; l < this.state.recommentations_value[2].products.length; l++) {
                        let componentName_3 = products_3[l]['componentName'];
                        //let logoPath_3 = products_3[l]['logoPath'];
                        let price_3 = products_3[l]['price'];
                        //let productCode_3 = products_3[l]['productCode'];
                        let productName_3 = products_3[l]['productName'];
                        recommentations_list_3.push(<div className="row"><div className="col-md-4 col-sm-4"><p>{componentName_3}</p></div><div className="col-md-4 col-sm-4"><p>{productName_3}</p></div><div className="col-md-4 col-sm-4"><p>{price_3} € </p></div></div>);
                    }
            } 
        }


            let graph_1=[];
			let graph_2=[];
			let graph_3=[];
			let graph_3_1=[];
			let graph_3_2=[];
			let graph_4=[];
			let graph_5=[];
			let graph_6=[];
			let graph_7=[];
			let graph_7_1=[];
			let graph_7_2=[];

			for (i = 1; i < this.state.systemCombinations_value.length; i++) {
				let systemCombinationPosition = this.state.systemCombinations_value[i].systemCombinationPosition;
				let energeticValues = this.state.systemCombinations_value[i].energeticValues;
					let energeticSelfSufficiency = energeticValues['energeticSelfSufficiency'];	
					graph_1.push([systemCombinationPosition,energeticSelfSufficiency]);
			}

			for (i =0; i < this.state.systemCombinations_value.length; i++) {
				let systemCombinationPosition_0 = this.state.systemCombinations_value[0].systemCombinationPosition;
				let economicValues_0 = this.state.systemCombinations_value[0].economicValues;
				let annuityCost_0 = economicValues_0['annuityCost'];
				graph_3_1.push([systemCombinationPosition_0,annuityCost_0]);
				break;
			}
			for (i = 1; i < this.state.systemCombinations_value.length; i++) {
				let systemCombinationPosition = this.state.systemCombinations_value[i].systemCombinationPosition;
				let economicValues = this.state.systemCombinations_value[i].economicValues;
					let annuityCost = economicValues['annuityCost'];
					graph_3_2.push([systemCombinationPosition,annuityCost]);
			}

			for (i = 1; i < this.state.systemCombinations_value.length; i++) {
				let systemCombinationPosition = this.state.systemCombinations_value[i].systemCombinationPosition;
				let economicValues = this.state.systemCombinations_value[i].economicValues;
					let annuityCost = economicValues['annuityCost'];
					let investCost = economicValues['investCost'];
					graph_4.push([systemCombinationPosition,annuityCost,investCost]);
			}

			for (i = 1; i < this.state.systemCombinations_value.length; i++) {
				let systemCombinationPosition = this.state.systemCombinations_value[i].systemCombinationPosition;
				let economicValues = this.state.systemCombinations_value[i].economicValues;
					let annuityCost = economicValues['annuityCost'];
					let operatingCost = economicValues['operatingCost'];
					let yearlyFuelCost = economicValues['yearlyFuelCost'];
					graph_5.push([systemCombinationPosition,annuityCost,operatingCost,yearlyFuelCost]);
			}

			for (i = 0; i < this.state.systemCombinations_value.length; i++) {
				let systemCombinationPosition = this.state.systemCombinations_value[i].systemCombinationPosition;
				let economicValues = this.state.systemCombinations_value[i].economicValues;
					let annuityCost = economicValues['annuityCost'];
					let operatingCost = economicValues['monthlyHeadingCost'];
					let yearlyFuelCost = economicValues['monthlyEnergyCost'];
					graph_6.push([systemCombinationPosition,annuityCost,operatingCost,yearlyFuelCost]);
			}

			for (i = 0; i < this.state.systemCombinations_value.length; i++) {
				let systemCombinationPosition = this.state.systemCombinations_value[0].systemCombinationPosition;
				let ecologicValues = this.state.systemCombinations_value[0].ecologicValues;
					let yearlyCO2Equivalent = ecologicValues['yearlyCO2Equivalent'];
					let yearlyAbatementCosts = ecologicValues['yearlyAbatementCosts'];	
					graph_7_1.push([systemCombinationPosition,yearlyCO2Equivalent,yearlyAbatementCosts]);
					break;
			}

			for (i = 1; i < this.state.systemCombinations_value.length; i++) {
				let systemCombinationPosition = this.state.systemCombinations_value[i].systemCombinationPosition;
				let ecologicValues = this.state.systemCombinations_value[i].ecologicValues;
					let yearlyCO2Equivalent = ecologicValues['yearlyCO2Equivalent'];
					let yearlyAbatementCosts = ecologicValues['yearlyAbatementCosts'];	
					graph_7_2.push([systemCombinationPosition,yearlyCO2Equivalent,yearlyAbatementCosts]);
			}

			graph_1.sort(function(a,b){
					return b[1]  - a[1];
			})

			graph_3_2.sort(function(a,b){
				return a[1]  - b[1];
			})
			graph_3 = graph_3_1.concat(graph_3_2);

			graph_4.sort(function(a,b){
				return a[1]  - b[1];
			})

			graph_5.sort(function(a,b){
				return a[1]  - b[1];
			})

			graph_6.sort(function(a,b){
				return a[1]  - b[1];
			})

			graph_7_2.sort(function(a,b){
				return a[1]  - b[1];
			})
            graph_7 = graph_7_1.concat(graph_7_2);
            
            localStorage.setItem("google_graph1", JSON.stringify(graph_1));
            //localStorage.setItem("google_graph2", JSON.stringify(graph_1));
            localStorage.setItem("google_graph3", JSON.stringify(graph_3));
            localStorage.setItem("google_graph4", JSON.stringify(graph_4));
            localStorage.setItem("google_graph5", JSON.stringify(graph_5));
            localStorage.setItem("google_graph6", JSON.stringify(graph_6));
            localStorage.setItem("google_graph7", JSON.stringify(graph_7));
           
           
        return(
            <div className="container-fluid wrapper">
            <Header/>
                <div className="container">
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
                                <div className="product_heading" >
                                    <div className="res" id="product_result_1">
                                        {recommentations_list_1}
                                    </div>
                                </div>
                            </div>
                            <div className="product_box_1_3">
                            <div className="product_heading">
                                <div className="row">
                                         <div className="col-md-4 col-sm-4"> </div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Funding</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>{recommentations_list_1_furthering} €</p></div>
                                    </div>
                                </div>
                                <div className="product_heading">
                                <div className="row">
                                         <div className="col-md-4 col-sm-4"> </div>
                                        <div className="col-md-4 col-sm-4">  <p>Investment Cost</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>{recommentations_list_1_investCost} €</p></div>
                                    </div>
                                </div>
                                <div className="product_heading">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4"> </div>
                                        <div className="col-md-4 col-sm-4">  <p>Operation Cost</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>{recommentations_list_1_operatingCost} €</p></div>
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
                                    <div className="res" id="product_result_2">
                                        {recommentations_list_2}
                                    </div>
                                </div>
                                

                            </div>
                            <div className="product_box_2_3">
                            <div className="product_heading">
                                <div className="row">
                                         <div className="col-md-4 col-sm-4"> </div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Funding</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>{recommentations_list_2_furthering} €</p></div>
                                    </div>
                                </div>
                                <div className="product_heading">
                                <div className="row">
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4 col-sm-4">  <p>Investment Cost</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>{recommentations_list_2_investCost} €</p></div>
                                    </div>
                                </div>
                                <div className="product_heading">
                                    <div className="row">
                                    <div className="col-md-4"></div>
                                        <div className="col-md-4 col-sm-4">  <p>Operation Cost</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>{recommentations_list_2_operatingCost} €</p></div>
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
                                <div className="res" id="product_result_3">
                                        {recommentations_list_3}
                                    </div>
                                </div>
                            </div>
                            <div className="product_box_3_3">
                            <div className="product_heading">
                                <div className="row">
                                         <div className="col-md-4 col-sm-4"> </div>
                                        <div className="col-md-4 col-sm-4">  <p>Total Funding</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>{recommentations_list_3_furthering} €</p></div>
                                    </div>
                                </div>
                                <div className="product_heading">
                                <div className="row">
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4 col-sm-4">  <p>Investment Cost</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>{recommentations_list_3_investCost} €</p></div>
                                    </div>
                                </div>
                                <div className="product_heading">
                                    <div className="row">
                                    <div className="col-md-4"></div>
                                        <div className="col-md-4 col-sm-4">  <p>Operation Cost</p></div>
                                        <div className="col-md-4 col-sm-4">  <p>{recommentations_list_3_operatingCost} €</p></div>
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
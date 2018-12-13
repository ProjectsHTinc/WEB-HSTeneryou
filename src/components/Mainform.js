import React, {Component} from "react";
import Homedetails from './Homedetails';
import Person from './Persondetail';
import Enerydemand from './Enerydemand';
import Budget from './Budget';

export class Mainform extends Component{

    state = {
        step: 3,
        roof_inclination :'',
        living_area:'',
        post_code:'',
        directionChange:'',
        construction_year:'',
        person_count:'',
        power_consumption:'',
        enery_demand:'',
        yearlyGasDemand:'',
        yearlyEnergyDemand:'',
        yearlyEnergyDemandOnWater:'',
        // roof :'',

    }
 

    nextStep = () =>{
        const   { step } = this.state;
        this.setState ({
            step :step + 1
        })
    }

    prevStep = () =>{
        const   { step } = this.state;
        this.setState ({
            step :step - 1
        })
    }
 
    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
       
      }

    render(){

      
        const {step} = this.state;
        const { roof_inclination,living_area,post_code,directionChange,construction_year,person_count,power_consumption } = this.state;
        const values = { roof_inclination,living_area,post_code,directionChange,construction_year,person_count,power_consumption};
       
        switch(step){
            case 1:
                return (
                <Homedetails
                nextStep={this.nextStep}
                handleChange ={this.handleChange}  
                values={values}            
                />
                )
            case 2:
                return(
                    <Person
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange ={this.handleChange}  
                values={values}            
                />
                )
                
            case 3:
                 return (
                    <Enerydemand
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange ={this.handleChange}  
                values={values}            
                />
                )
            case 4:
                return (
                    <Budget
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange ={this.handleChange}  
                values={values}            
                />
                )
        }
    }
}

export default Mainform
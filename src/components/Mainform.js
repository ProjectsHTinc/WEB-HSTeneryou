import React, {Component} from "react";
import Homedetails from './Homedetails';
import Person from './Persondetail';


export class Mainform extends Component{

    state = {
        step: 1,
        // direction :'',
        // roof :'',
        // occupation :'',
        // pincode :'',
        // budget :'',
        // demandtype:''
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


    render(){

      
        const {step} = this.state;
        // const { direction, roof, occupation, pincode, budget, demandtype } = this.state;
        // const values = { direction, roof, occupation, pincode, budget, demandtype };
       
        switch(step){
            case 1:
                return (
                <Homedetails
                nextStep={this.nextStep}
                handleChange ={this.handleChange}  
                // values={values}            
                />
                )
            case 2:
                return(
                    <Person
                nextStep={this.nextStep}
                handleChange ={this.handleChange}  
                // values={values}            
                />
                )
                
            case 3:
                 return <div>Enerydemand</div>
            case 4:
                return <div>Budget</div>
        }
    }
}

export default Mainform
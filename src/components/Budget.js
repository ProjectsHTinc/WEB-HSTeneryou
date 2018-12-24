import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Line } from 'rc-progress';
import 'font-awesome/css/font-awesome.min.css'

import progress_img from './images/progress_home.png';
import character_4 from './images/character_form_4.png';
import euro_icon from './images/euro_icon.png';
import form_bg_3 from './images/form_3_bg.png';



class Budget extends Component {
    constructor(props){
        super(props)
        this.state = {
            step :3,
            budget_value:'',
            fields: {},
            errors: {},    
           
        };
    }
   
 
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;    
      
        let budget_value=this.budget_value.value;
        if (!budget_value.match(/^[1-9][0-9]*$/)) {
            formIsValid = false;            
            errors["budget_value"] = "Enter only numbers";
          }
        if(!budget_value){
        formIsValid = false;
        errors["budget_value"] = "Enter Budget";
        }
       
        if (budget_value <= 9999) {
            formIsValid = false;
            errors["budget_value"] = "*Greater Than Equal to 10000";
          }
       
     
        
      

        this.setState({errors: errors});
        return formIsValid;
    }
 

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    continue = e => {
        e.preventDefault();       
        if(this.handleValidation()){        
            this.props.nextStep();   
               
        }else{
            
        }
        
    }
  

    render() {
        // const { rating } = this.state;
        const { values } = this.props
       
   


        return (
        <div className="container-fluid wrapper">
        <Header/>
        <div className="container">
        <h4 className="form_heading">My Personal Preference </h4>
        <form>

                {/* Form section starts here */}
                <div className="row" >
                    <div className="col-md-2 col-lg-2 hide_tab">
                        <img src={character_4} className="character_4"/>
                    </div>
                    <div className="col-md-12 col-lg-8 text-center form_4_bg" style={ { backgroundImage: 'url(' + form_bg_3 + ')',
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 height:'417px',
                 backgroundRepeat: 'no-repeat' } }>

                  <div className="">
                    <div className="row energy_form">
                        <p className="budget_font">Budgetobergrenze (€)</p>
                        <div className="budget_icon">
                            <img src={euro_icon} circle className="coin_img" id=""/>   
                        </div>
                        <div className="budget_box">
                            <input type="text"  className="form-control"
                            name="budget_value" 
                            ref={(budget_value) => this.budget_value = budget_value}
                            onChange={this.props.handleChange('budget_value')}
                             className="budget_price" placeholder='Price' defaultValue={values.budget_value} />
                               <p  className="error_font">{this.state.errors["budget_value"]}</p>
                        </div>
                        <div className="form_btn">
                            <button  onClick={this.continue}  className="btn btn_submit">Speichern</button>
                        </div>
                      

                       
                       
                    </div>
                  </div>


                       
                            
                    </div>
                    <div className="col-md-2 col-lg-2 hide_tab">
                 
                    
                   
                    </div>
                </div>
                {/* Form section Ends here */}



                {/* Progress Bar section Starts here */}
                <div className="row progress_section"  style={{marginTop:'50px'}}>
                <div className="col-md-2">
                    <div className="char_next_btn_section">
                            <div className="">
                               
                                <div className="back_btn_form_2">
                                <button onClick={this.back} className="btn btn_next pull_right">Back  </button>
                                </div>
                        </div>              

                
                      
                     
                    </div>
                        
                </div>
                <div className="col-md-8">
                <div className="progress_bar">                   
                    {/* <button onClick={this.continue} className="btn  btn_next pull_left">Back   </button> */}
                    <img src={progress_img} className="" circle  style={ { position:'relative',top:'-15px',left:'83%'}} />
                     <Line percent="100" strokeWidth="1" trailColor="" strokeColor="#2171b9" strokeLinecap="square" className="progress_bar_line"/>
                     <p style={{color:'#000',marginLeft:'99%'}}>100%</p>
                </div>
                </div>
                <div className="col-md-2 text-center">    
                <div className="next_section">
                        {/* <button onClick={this.continue} className="btn btn_next pull_right">Next  </button> */}
                </div>                 
               
                </div> 
                </div>
               
                {/* Progress Bar section Ends here */}

         </form>
         </div>
        <Footer/>
        </div>
    );
}
}

export default Budget;
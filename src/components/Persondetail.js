import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Line } from 'rc-progress';
import StarRatingComponent from 'react-star-rating-component';
import 'font-awesome/css/font-awesome.min.css'

import progress_img from './images/progress_home.png';
import character_2 from './images/character_form_2.png';
import electric_img from './images/house_int.png';
import electric_board from './images/electric_board.png';
import electric_symbol from './images/electric_symbol.png';


class Persondetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            step :2,
            rating: 0,
            rating_half_star:0,
            person_count:'',
            power_consumption:'',
            power_val:'',
      
           
        };
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        let star_val=this.state.rating_half_star;        
        let power_val=this.power_consumption.value;  
       
        // if(star_val=='0'){
        //     formIsValid = false;
        //     this.setState({ star_errors: "Select the Person" });         
        //  } 

        //  if(power_val==''){
        //     formIsValid = false;
        //     this.setState({ power_error: "Power Error" }); 
        //  }


        this.setState({errors: errors});
        return formIsValid;

    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating_half_star: nextValue});
        localStorage.setItem('no_of_person',this.state.rating_half_star);
      }

      continue = e => {
        e.preventDefault();
        if(this.handleValidation()){        
            this.props.nextStep();         
           
        }else{
            alert("error");
        }
        
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
   
      
    render() {
        const { rating_half_star,selectedOption } = this.state;
           const { values } = this.props

    return (
        <div className="container-fluid wrapper">
        <Header/>
        <div className="container">
        <h4 className="form_heading">My Electricity Demand  {selectedOption} </h4>
        <form>

                {/* Form section starts here */}
                <div className="row">
                    <div className="col-md-2">
                    <div className="form_char_img">
                        <img src={character_2} className=""/>
                     </div>
                    </div>
                    <div className="col-md-8 text-center" style={ { backgroundImage: 'url(' + electric_img + ')',
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 height:'417px',
                 backgroundRepeat: 'no-repeat' } }>

                    <div className="p_box">
                        <div className="p_form_label">
                         No.Of.Person
                        
                        </div>
                        <span className="p_icon">  
                        <StarRatingComponent 
                                            name="person_count"
                                            className=""                                                                                  
                                            onStarClick={this.props.handleChange('person_count')}
                                            starCount={6}
                                            starColor='#2171b9'
                                            emptyStarColor="#a7a9ac"
                                            // value={rating}
                                            value={this.state.rating_half_star}
                                            renderStarIcon={(index, value) => {
                                                return (
                                                  <span>
                                                    <i className={index <= value ? 'fa fa-user person_ic' : 'fa fa-user person_ic'} />
                                                  </span>
                                                );
                                              }}                                        
                                            renderStarIcon={() => <span className="person_icon">
                                            
                                             <i class="fa fa-user person_ic"></i>
                                             </span>}
                                            onStarClick={this.onStarClick.bind(this)}
                                        /></span>
                    <div className="p_form_label" style={{marginLeft:'20px',borderLeft:'3px solid #2171b9'}}>{rating_half_star}</div>
                    
                    </div>
                    <p style={{marginTop:'20px'}} className="error_font">{this.state.star_errors}</p>


                       
                            
                    </div>
                    <div className="col-md-2">
                    <p className="text-center">Power <br></br> Consumption</p>
                                <div className="" style={{backgroundImage: 'url(' + electric_board + ')',
                 backgroundPosition: 'center',
                backgroundSize:'contain',
                 height:'250px',
                 backgroundRepeat: 'no-repeat' }}>
                 
                 <div className="power_meter_box">
                        <input type="text" name="power_consumption" className="power_consumption" minLength="5" maxLength='5'
                         placeholder='power_consumption' ref={(power_consumption) => this.power_consumption = power_consumption}
                         onChange={this.props.handleChange('power_consumption')}
                         defaultValue={values.power_consumption} />                                
                    </div>
                   
                   
                           
                 <div className="electric_symbol_class">
                    <img src={electric_symbol} circle className="blink-image"/>
                 </div>
                            
                            
                            </div>
                            <p style={{textAlign:"center"}} className="error_font">{this.state.power_error}</p>
                    </div>
                </div>
                {/* Form section Ends here */}



                {/* Progress Bar section Starts here */}
                <div className="row progress_section">
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
                    <img src={progress_img} className="" circle  style={ { position:'relative',top:'12px',left:'50%'}} />
                     <Line percent="53" strokeWidth="1" trailColor="" strokeColor="#2171b9" strokeLinecap="square" className="progress_bar_line"/>
                     <p style={{color:'#000',marginLeft:'49%'}}>50%</p>
                </div>
                </div>
                <div className="col-md-2 text-center">    
                <div className="next_section">
                        <button onClick={this.continue} className="btn btn_next pull_right">Next  </button>
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

export default Persondetail;
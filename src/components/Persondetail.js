import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Line } from 'rc-progress';
import StarRatingComponent from 'react-star-rating-component';



import Rating  from 'react-rating';
import 'font-awesome/css/font-awesome.min.css'

import progress_img from './images/progress_home.png';
import character_2 from './images/character_form_2.png';
import electric_img from './images/house_int.png';
import electric_board from './images/electric_board.png';
import electric_symbol from './images/electric_symbol.png';


import number_person_error from './images/number_person_error.png';
import power_consumption_error from './images/power_consumption_error.png';

import select from './images/select.png';
import unselect from './images/unselect.png';
import { Tooltip } from 'react-lightweight-tooltip';

class Persondetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            step :2,
            character_2:character_2,
            person:localStorage.getItem('person_count'),
            power_consumption:'',
            power_val:'',
            star_errors:'',
      
           
        };
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        let star_val=localStorage.getItem('person_count');        
        let power_val=this.power_consumption.value;  
       
        if(star_val=='0' || star_val==null){
            formIsValid = false;
            this.setState({ star_errors: "Bitte wählen die Personenanzahl aus" });     
            this.setState({ character_2: number_person_error});     
         } 
         if (!power_val.match(/^[1-9][0-9]*$/)) {
            formIsValid = false;
            this.setState({ power_error: "Bitte geben Sie nur Zahlen ein" });
          }
          if (power_val <= 1999) {
            formIsValid = false;
            this.setState({ power_error: "Größer als 2000"});
          }
          if (power_val >= 8001) {
            formIsValid = false;          
            this.setState({ power_error: "Nicht mehr als 8000"});
          }
         if(power_val==''){
            formIsValid = false;
            this.setState({ power_error: "Bitte geben Sie Ihre jährlicher Strombedarf ein" }); 
            this.setState({ character_2: power_consumption_error});  
         }
        


        this.setState({errors: errors});
        return formIsValid;

    }


      continue = e => {
        e.preventDefault();       
        if(this.handleValidation()){        
            this.props.nextStep();         
           
        }else{
            
        }
        
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
   
    handleRate (rate) {
        this.setState({ person: rate });
        localStorage.setItem("person_count",rate);
        let person_value=rate;
        if(person_value=='6'){
            this.power_consumption.focus();
             document.getElementById("power_consumption").value = "6000";           
           }else if(person_value=='5'){
            this.power_consumption.focus();
            document.getElementById("power_consumption").value = "5000";   
           }else if(person_value=='4'){
            this.power_consumption.focus();
            document.getElementById("power_consumption").value = "4000";   
            }else if(person_value=='3'){
                this.power_consumption.focus();
                document.getElementById("power_consumption").value = "3000";   
            }else if(person_value=='2'){
                this.power_consumption.focus();
                document.getElementById("power_consumption").value = "2000";   
            }
            else if(person_value=='1'){
                this.power_consumption.focus();
                document.getElementById("power_consumption").value = "2000";   
            }else{
                document.getElementById("power_consumption").value = "";   
           }
      }
    componentDidMount(){
  

    }
    render() {
        const { rating_half_star,person,character_2 } = this.state;
        const { values } = this.props
        const tooltipStyle = {
            content: {
              backgroundColor: '',
              color: '#fff',
              fontSize:'12px',
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              borderRadius: '1px solid #000',  
              textAlign: 'center',        
            
            },
           
          };

    return (
        <div className="container-fluid wrapper">
        <Header/>
        <div className="container">
        <h4 className="form_heading">Mein Strombedarf  </h4>
        <form>

                {/* Form section starts here */}
                <div className="row">
                    <div className="col-md-2">
                    <div className="form_char_img">
                        <img src={character_2} className="char_img_2"/>
                     </div>
                    </div>
                    <div className="col-md-8 text-center" style={ { backgroundImage: 'url(' + electric_img + ')',
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 height:'417px',
                 backgroundRepeat: 'no-repeat' } }>


                       <div className="p_box">
                     <div className="p_form_label">
                        Personenanzahl
                        
                        </div>
                        <span className="p_icon"> 
                        <Tooltip styles={tooltipStyle} content="Bitte wählen Sie die Anzahl an Personen aus die in Ihrem Haus wohnen">                   
<Rating name="person"  stop={6} initialRating={localStorage.getItem('person_count')}
 emptySymbol={<img src={unselect} className="icon" />}
 fullSymbol={<img src={select} className="icon" />}
  onChange={rate => this.handleRate(rate)}
/> </Tooltip>
                    
                                        </span>
                    <div className="p_form_label" style={{borderLeft:'3px solid #2171b9'}}>{person}</div>
                    
                    </div>
                   
                    <p style={{marginTop:'20px'}} className="error_font">{this.state.star_errors}</p>


                       
                            
                    </div>
                    <div className="col-md-2">
                    <p className="text-center power_text">Jährlicher Strombedarf</p>
                                <div className="" style={{backgroundImage: 'url(' + electric_board + ')',
                 backgroundPosition: 'center',
                backgroundSize:'contain',
                 height:'250px',
                 backgroundRepeat: 'no-repeat' }}>
                 
                 <div className="power_meter_box">
                 <Tooltip styles={tooltipStyle} content="Bitte geben Sie Ihren jährlichen Stormbedarf in kWh an ">    <input type="text" name="power_consumption" id="power_consumption" className="power_consumption" minLength="5" maxLength='5'
                         placeholder='power_consumption' ref={(power_consumption) => this.power_consumption = power_consumption}
                         onBlur={this.props.handleChange('power_consumption')}
                         defaultValue={values.power_consumption} />    </Tooltip>                            
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
                <div className="row progress_section" style={{marginTop:'25px'}}>
                <div className="col-md-2 col-sm-2">
                    <div className="char_next_btn_section">
                            <div className="">
                               
                                <div className="back_btn_form_2">
                                <button onClick={this.back} className="btn btn_next pull_right">zurück   </button>
                                </div>
                        </div>              

                
                      
                     
                    </div>
                        
                </div>
                <div className="col-md-8 col-sm-8">
                <div className="progress_bar">                   
                    {/* <button onClick={this.continue} className="btn  btn_next pull_left">Back   </button> */}
                    <img src={progress_img} className="" circle  style={ { position:'relative',top:'9px',left:'50%'}} />
                     <Line percent="53" strokeWidth="1" trailColor="" strokeColor="#2171b9" strokeLinecap="square" className="progress_bar_line"/>
                     <p style={{color:'#000',marginLeft:'50%'}}>50%</p>
                </div>
                </div>
                <div className="col-md-2  col-sm-2 text-center">    
                <div className="next_section">
                        <button onClick={this.continue} className="btn btn_next pull_right">weiter  </button>
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
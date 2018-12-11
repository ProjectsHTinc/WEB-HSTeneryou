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
            // direction:'',           
            // fields: {},
            // errors: {}
           
        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }

      continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
      
    render() {
        const { rating } = this.state;
     

    return (
        <div className="container-fluid wrapper">
        <Header/>
        <div className="container">
        <h4 className="form_heading">My Electricity Demand </h4>
        <form>

                {/* Form section starts here */}
                <div className="row">
                    <div className="col-md-2">
                       
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
                        <span className="p_icon">  <StarRatingComponent 
                                            name="rate1"
                                            className=""
                                            starCount={6}
                                            value={rating}
                                            renderStarIcon={() => <span className="person_icon">
                                            
                                             <i class="fa fa-user person_ic"></i>
                                             </span>}
                                            onStarClick={this.onStarClick.bind(this)}
                                        /></span>
                    <div className="p_form_label" style={{marginLeft:'20px'}}>3</div>
                    
                    </div>


                        {/* <div className="person_box">
                            <div className="form-group person_form">
                                <label className="label_box_person"> No.Of.Person</label>
                                <div className="rating_div">
                                     <StarRatingComponent 
                                            name="rate1"
                                            className="rating_icon"
                                            starCount={6}
                                            value={rating}
                                            renderStarIcon={() => <span className="person_icon">
                                            
                                             <i class="fa fa-user person_ic"></i>
                                             </span>}
                                            onStarClick={this.onStarClick.bind(this)}
                                        />
                                </div>
                                <div className="">
                                <label className="label_box_person" style={{paddingTop:'15px'}}>3</label>
                                </div>
                               

                            </div>
                        </div> */}
                            
                    </div>
                    <div className="col-md-2">
                    <p className="text-center">Power <br></br> Consumption</p>
                    <div className="power_meter_box">
                                <input type="text" name="power" className="power_consumption" maxLength='5' />
                            </div>
                    <div className="" style={{backgroundImage: 'url(' + electric_board + ')',
                 backgroundPosition: 'center',
                backgroundSize:'contain',
                 height:'236px',
                 backgroundRepeat: 'no-repeat' }}>
                 <div className="electric_symbol_class">
                    <img src={electric_symbol} circle className="blink-image"/>
                 </div>
                            
                            
                            </div>
                    </div>
                </div>
                {/* Form section Ends here */}



                {/* Progress Bar section Starts here */}
                <div className="row progress_section">
                <div className="col-md-2">
                    <div className="char_next_btn_section">
                            <div className="form_char_img">
                                <img src={character_2} className=""/>
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
                     <Line percent="52" strokeWidth="1" trailColor="" strokeColor="#2171b9" strokeLinecap="square" className="progress_bar_line"/>
                     <p style={{color:'#000',marginLeft:'50%'}}>50%</p>
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
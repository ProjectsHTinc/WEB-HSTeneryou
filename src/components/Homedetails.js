import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Line } from 'rc-progress';


import compass from './images/n_compass.png';
import east from './images/east.png';
import west from './images/west.png';
import south from './images/south.png';
import south_west from './images/south_west.png';
import south_east from './images/south_east.png';

import imgUrl from './images/house_1.png';
import house_year from './images/house_year.png';
import postbox from './images/postbox.png';
import Character from './images/character_fields.png';
import progress_img from './images/progress_home.png';


class Homedetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            step :1,
            NormalCompass:compass,
            // direction:'',           
            // fields: {},
            // errors: {}
           
        };
      
       
    }


    continue = e => {
        // let fields = this.state.fields;
        // let direction=this.direction.value; 
        e.preventDefault();
        // if(this.handleValidation()){ 
           // localStorage.setItem("direction",direction);
            this.props.nextStep();
        //  }else{           
           
        //  }        
       
    }

    directionChange = (event) => {
        let directionval=event.target.value;
        if(directionval==='east'){
            this.setState({ NormalCompass: east });
        }else if(directionval==='west'){
            this.setState({ NormalCompass: west });
        }else if(directionval==='south_west'){
            this.setState({ NormalCompass: south_west });
        }else if(directionval==='south_east'){
            this.setState({ NormalCompass: south_east });
        }else if(directionval==='south'){
            this.setState({ NormalCompass: south });
        }else{
            this.setState({ NormalCompass: compass });
        }
       
      
    };



    render() {

        const { options, NormalCompass } = this.state;

    return (
      
        <div className="container-fluid wrapper">
          <Header/>
          <div className="container">
        <h4 className="form_heading">Building Details</h4>
        <h4 className="text-center small_heading">Roof Inclination</h4>
        <form>

                {/* First section start Here */}
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-8">
                   
                    <div className="row radio-toolbar">
                   
                    <div className="col-md-2 col-sm-6">
                    {/* <label for="female">Female</label> */}
                    <div className="radio_box inputGroup" for="female">
                            <input type="radio" value="0" id ="0" name="gender" /> <span className="radio_label"> 0</span>
                            <p className="radio_image">
                                <img src={require('./images/0.png')} alt="" className=""/>
                            </p>
                    </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="radio_box inputGroup" for="15">
                            <input type="radio" value="15" name="gender"  id="15"/> <span className="radio_label">15</span>
                            <p className="radio_image">
                                <img src={require('./images/15.png')} alt="" className=""/>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="radio_box inputGroup" for="25">
                            <input type="radio" value="25" id="25" name="gender" /><span className="radio_label">25</span>
                            <p className="radio_image">
                                <img src={require('./images/25.png')} alt="" className=""/>
                            </p>
                    </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="radio_box inputGroup" for="30"> 
                            <input type="radio" value="30" id="30" name="gender" /><span className="radio_label">30</span>
                            <p className="radio_image">
                                <img src={require('./images/30.png')} alt="" className=""/>
                            </p>
                    </div>
                    </div>
                    <div className="col-md-2 col-sm-6"> 
                        <div className="radio_box inputGroup" for="35">
                            <input type="radio" value="35" id="35" name="gender" /> <span className="radio_label">35</span>
                            <p className="radio_image">
                                <img src={require('./images/35.png')} alt="" className=""/>
                            </p>
                    </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className=" radio_box inputGroup" for="45">
                            <input type="radio" value="45" id="45" name="gender" /><span className="radio_label">45</span>
                            <p className="radio_image">
                                <img src={require('./images/45.png')} alt="" className=""/>
                            </p>
                    </div>
                    </div>
                    </div>

                    </div>
                    <div className="col-md-3">
                        <p className="img_compass">
                        {/* <img src={require('./images/n_compass.png')} alt="" className=""/> */}
                        <img src={NormalCompass} className="" circle  />
                       
                        </p>

                    </div>
                    
                </div>   
                 {/* First section Ends Here */}

                 {/* Second Section Starts Here */}

                 <div className="row">
                 <div className="col-md-2 " style={ { backgroundImage: 'url(' + house_year + ')',
                 backgroundPosition: 'center',
                marginTop:'50px',
                 height:'127px',
                 backgroundRepeat: 'no-repeat' } }>
                 <div className="year_box">
                 <label className="year_label">Construction Year</label>
                  <select className="house_year_drop_box " name="year" >
                        <option value=" ">Select-Year</option>
                        <option value="B">Banana</option>
                        <option value="C">Cranberry</option>
                </select>
                </div>
                <div className="character_img">
                    <p> <img src={Character} className="" circle  /></p>
                 </div>
               
                 </div>
                 <div className="col-md-8" style={ { backgroundImage: 'url(' + imgUrl + ')',
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 height:'400px',
                 backgroundRepeat: 'no-repeat' } }>
                 <div className="living_box">
                 <label className="living_label">Living Area</label>
                        <input type="text" name="post_code" className="living_textbox"/>
                </div>
                
                 
                 </div>
                 <div className="col-md-2">
                 <div className="direction_box">
                    <select className="direction_drop_box " onChange={this.directionChange} value={this.state.value}>
                            <option>Select-Direction</option>
                            <option value="east">East</option>
                            <option value="west">West</option>
                            <option value="south">South</option>
                            <option value="south_east">South-East</option>
                            <option value="south_west">South-West</option>
                    </select>
                 </div>

                 <div className="postbox_text">
                   
                 

                 </div>
                 <div className="post_text_box">
                 <label className="post_code_text">Post Code</label>
                        <input type="text" name="post_code" className="post_textbox"/>
                   </div>
                 <div className="postbox_img">
                    <p> <img src={postbox} className="" circle  /></p>
                 </div>
                
                 </div>

                 
                 </div>

                 {/* Second Section Ends Here */}
                

                {/* Progress Bar section Starts here */}
                <div className="row progress_section">
                <div className="col-md-1">                     
                </div>
                <div className="col-md-1">                     
                </div>
                <div className="col-md-8">
                <div className="progress_bar">                   
                    {/* <button onClick={this.continue} className="btn  btn_next pull_left">Back   </button> */}
                    <img src={progress_img} className="" circle  style={ { position:'relative',top:'12px',left:'25%'}} />
                     <Line percent="28" strokeWidth="1" trailColor="" strokeColor="#2171b9" strokeLinecap="square" className="progress_bar_line"/>
                     <p style={{color:'#000',marginLeft:'25%'}}>25%</p>
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

export default Homedetails;
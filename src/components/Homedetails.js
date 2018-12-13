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
            NormalCompass:east,
            roof_inclination:'', 
            living_area:'',
            post_code:'',
            direction:'',
            fields: {},
            errors: {},
           
        };
             
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        let post_code=this.post_code.value; 
        let living_area=this.living_area.value;   
        // let directionChange=this.directionChange.value;         
       
        if(!post_code){
           formIsValid = false;
           errors["post_code"] = "Enter Post Code";           
        } 
        if(!living_area){
            formIsValid = false;
            errors["living_area"] = "Enter living Area";           
         }  
    
        //  if(!directionChange){
        //     formIsValid = false;
        //     errors["directionChange"] = "Select Direction";           
        //  }  
    
    
       this.setState({errors: errors});
       return formIsValid;
   }


    continue = e => {
        let fields = this.state.fields;
         e.preventDefault();
        // alert(this.state.roof_inclination);
        // this.props.nextStep();
        if(this.handleValidation()){ 
         
            this.props.nextStep();
         }else{           
           alert("error");
         }        
       
    }

    direction_call = (event) => {
        let directionval=event.target.value;  
        // alert(directionval)     
        localStorage.setItem('direct',directionval)
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
            // this.setState({ NormalCompass: east });
            this.setState({ NormalCompass: compass });
        }
       
      
    };

    componentDidMount(){
        // Direction function
        let directionval=localStorage.getItem('direct');
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
       
    }


    render() {

        const { options, NormalCompass } = this.state;
        const { values } = this.props

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
                            <input type="radio" value="0" id ="0"  ref="roof_inclination"  name="roof_inclination"  onChange={this.props.handleChange('roof_inclination')}  /> 
                            <span className="radio_label"> 0</span>
                            <p className="radio_image">
                                <img src={require('./images/0.png')} alt="" className=""/>
                            </p>
                    </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="radio_box inputGroup" for="15">
                            <input type="radio" value="15" name="roof_inclination"  id="15"  ref="roof_inclination"  onChange={this.props.handleChange('roof_inclination')}  /> 
                            <span className="radio_label">15</span>
                            <p className="radio_image">
                                <img src={require('./images/15.png')} alt="" className=""/>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="radio_box inputGroup" for="25">
                            <input type="radio" value="25" id="25" name="roof_inclination"  ref="roof_inclination" onChange={this.props.handleChange('roof_inclination')}  />
                            <span className="radio_label">25</span>
                            <p className="radio_image">
                                <img src={require('./images/25.png')} alt="" className=""/>
                            </p>
                    </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="radio_box inputGroup" for="30"> 
                            <input type="radio" value="30" id="30" name="roof_inclination"  ref="roof_inclination"  onChange={this.props.handleChange('roof_inclination')} />
                            <span className="radio_label">30</span>
                            <p className="radio_image">
                                <img src={require('./images/30.png')} alt="" className=""/>
                            </p>
                    </div>
                    </div>
                    <div className="col-md-2 col-sm-6"> 
                        <div className="radio_box inputGroup" for="35">
                            <input type="radio" value="35" id="35" name="roof_inclination"  ref="roof_inclination" onChange={this.props.handleChange('roof_inclination')}/>
                             <span className="radio_label">35</span>
                            <p className="radio_image">
                                <img src={require('./images/35.png')} alt="" className=""/>
                            </p>
                    </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className=" radio_box inputGroup" for="45">
                            <input type="radio" value="45" id="45" name="roof_inclination"  ref="roof_inclination"  onChange={this.props.handleChange('roof_inclination')}  />
                            <span className="radio_label">45</span>
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
                  <select className="house_year_drop_box " name="construction_year" 
                   onChange={this.construction_year} 
                   onClick={this.props.handleChange('construction_year')}                    
                   defaultValue={values.construction_year} 
                  >
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
                        <input type="text" name="living_area" className="living_textbox" placeholder='living_area' ref={(living_area) => this.living_area = living_area}
                        onChange={this.props.handleChange('living_area')}
                        defaultValue={values.living_area}/>
                          <p className="error_font" style={{textAlign:'right'}}>{this.state.errors["living_area"]}</p>
                </div>
                
                 
                 </div>
                 <div className="col-md-2">
                 <div className="direction_box">
                    <select className="direction_drop_box " name="directionChange"
                    onChange={this.direction_call} 
                    onClick={this.props.handleChange('directionChange')}                    
                    defaultValue={values.directionChange}               
                     >
                            <option value="">Select-Direction</option>
                            <option value="east">East</option>
                            <option value="west">West</option>
                            <option value="south">South</option>
                            <option value="south_east">South-East</option>
                            <option value="south_west">South-West</option>
                    </select>
                    <p className="error_font">{this.state.errors["directionChange"]}</p>
                    
                 </div>

                 <div className="postbox_text">
                   
                 

                 </div>
                 <div className="post_text_box">
                 <label className="post_code_text">Post Code</label>
                        <input type="text" name="post_code" className="post_textbox"  placeholder='post_code' ref={(post_code) => this.post_code = post_code}
                        onChange={this.props.handleChange('post_code')}
                        defaultValue={values.post_code}/>
                        <p className="error_font">{this.state.errors["post_code"]}</p>
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
import React, { Component } from 'react';
import $ from "jquery";
import Header from './Header';
import Footer from './Footer';
import Stepper from 'react-stepper-horizontal';

import imgUrl from './images/house_1.png';
import house_year from './images/house_year.png';
import progress_img from './images/progress_home.png';


class Homedetails extends Component {

    constructor(props) {
        super(props)    
        this.state = {
            step: 1,
            roof_inclination: '',
            living_area: '',
            post_code: '',
            roof_error: '',
            directionChange: '',
            house_con_year: '',
            //fields: {},
            errors: {},

        };


    }



    handleValidation() {
        // let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        let post_code = this.post_code.value;
        let living_area = this.living_area.value;
        let directionChange = this.refs.direction_compass.value;
        let house_con_year = this.refs.house_construction_year.value;



        if (!post_code.match(/^[0-9]{5}$/)) {
            formIsValid = false;
            errors["post_code"] = "Bitte geben Sie nur Zahlen ein";
           
        }
        if (!post_code) {
            formIsValid = false;
            errors["post_code"] = "Bitte geben Sie Ihre Postleitzahl ein";
           
        }

        if (living_area.length <= 1) {
            formIsValid = false;
            errors["living_area"] = "Zahlen mit maximal 2 Zeichen";
        }

        if (living_area <= 49) {
            formIsValid = false;
            errors["living_area"] = "Größer als 50";
        }
        if (living_area >= 301) {
            formIsValid = false;
            errors["living_area"] = "Nicht mehr als 300";
        }
        if (living_area.length > 3) {
            formIsValid = false;
            errors["living_area"] = "Zahlen mit maximal 3 Zeichen";
        }
        if (!living_area.match(/^[1-9][0-9]*$/)) {
            formIsValid = false;
            errors["living_area"] = "Bitte nur Nummern eingeben";
        }
        if (!living_area) {
            formIsValid = false;
            errors["living_area"] = "Bitte geben Sie die Wohnfläche ein";
           
        }


        if (!directionChange) {
            formIsValid = false;
            errors["directionChange"] = "Bitte wählen Sie die Dachneigung aus";
            
        }
        if (!house_con_year) {
            formIsValid = false;
            errors["house_con_year"] = "Bitte wählen Sie das Baujahr aus";
          
        }

        this.setState({ errors: errors });
        return formIsValid;
    }


    continue = e => {
        //let fields = this.state.fields;
        e.preventDefault();
        // this.props.nextStep();
        if (this.handleValidation()) {
            this.props.nextStep();
        } else {
          
        }
    }





    direction_call = (event) => {
        let directionval = event.target.value;
        localStorage.setItem('direct', directionval)
     
    };

    componentDidMount() {

        $('input:radio').change(function(){
            var $this = $(this);
            $this.closest('.radio-toolbar').find('div.highlight').removeClass('highlight');
            $this.closest('.inputGroup').addClass('highlight');
            // $this.closest('.radio_house').addClass('radio_image_house');
            $(this).find('.radio_image').addClass('radio_image_house');
        });
        
        const { values: { directionChange } } = this.props;
        let directionval = directionChange;
        
       
      
    }







    render() {

        const { options, NormalCompass, Character } = this.state;
        const { values } = this.props
   
        //const {roof} = this.state


        return (

            <div className="container-fluid wrapper">
                <Header />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 col-sm-12">
                        <Stepper activeStep={ 0 }  titleFontSize={'14px'} completeColor={'#2171b9' } activeColor={'#2171b9'} completeBarColor={'#5096ff'} steps={ [{title: 'Meine Gebäudedaten '}, {title: 'Mein Strombedarf'}, {title: 'Mein Wärmebedarf'}, {title: 'Meine Präferenz'}] } />
                        </div>
                        
                    </div>            
                </div>
                <div className="container">
                    <h4 className="form_heading">Meine Gebäudedaten</h4>
                  
                    {/* <h4 className="text-center small_heading">  Dachneigung</h4> */}
                    <form onSubmit={this.continue}>

                        {/* First section start Here */}
                        <div className="row">
                           
                            <div className="col-md-12 col-lg-12">
                            <div className="row">
                                <div className="col-md-4"><p className="label_question">Welchen Neigungswinkel hat das Dach?</p>
                                </div>
                                <div className="col-md-4 text-center">
                                <span className="label_heading">Dachneigung</span>
                                </div>
                            </div>
                     
                                <div className="row radio-toolbar">

                                    <div className="col-md-2 col-sm-6">
                                        {/* <label for="female">Female</label> */}
                                        <div className="radio_box inputGroup" for="0">
                                            <input type="radio"
                                                value="DEGREES_0"
                                                id="0"
                                                name="roof_inclination"
                                                onChange={this.props.handleChange('roof_inclination')}
                                                checked={values.roof_inclination === "DEGREES_0"}

                                            />
                                            <span className="radio_label"> 0 &#176; </span>
                                            <p className="radio_image">
                                            <img src={require('./images/0.png')} alt="" className="radio_house" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-6">
                                        <div className="radio_box inputGroup" for="15">
                                            <input type="radio"
                                                value="DEGREES_15"
                                                name="roof_inclination"
                                                id="15"
                                                onChange={this.props.handleChange('roof_inclination')}
                                                checked={values.roof_inclination === "DEGREES_15"}
                                            />
                                            <span className="radio_label">15 &#176; </span>
                                            <p className="radio_image">
                                            <img src={require('./images/15.png')} alt="" className="radio_house" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-6">
                                        <div className="radio_box inputGroup" >
                                            <input type="radio"
                                                value="DEGREES_25"

                                                refs="roof_inclination"
                                                name="roof_inclination"
                                                onChange={this.props.handleChange('roof_inclination')}
                                                checked={values.roof_inclination === "DEGREES_25"}
                                            />
                                            <span className="radio_label">25 &#176; </span>
                                            <p className="radio_image">
                                            <img src={require('./images/25.png')} alt="" className="radio_house" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-6">
                                        <div className="radio_box inputGroup" >
                                            <input type="radio"
                                                value="DEGREES_30"
                                                id="30"
                                                name="roof_inclination"
                                                onChange={this.props.handleChange('roof_inclination')}

                                                checked={values.roof_inclination === "DEGREES_30"}
                                            />
                                            <span className="radio_label">30 &#176; </span>
                                            <p className="radio_image">
                                            <img src={require('./images/30.png')} alt="" className="radio_house" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-6">
                                        <div className="radio_box inputGroup">
                                            <input type="radio"
                                                value="DEGREES_35"
                                                id="35"
                                                name="roof_inclination"
                                                onChange={this.props.handleChange('roof_inclination')}
                                                checked={values.roof_inclination === "DEGREES_35"}
                                            />
                                            <span className="radio_label">35 &#176; </span>
                                            <p className="radio_image">
                                            <img src={require('./images/35.png')} alt="" className="radio_house" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-6">
                                        <div className=" radio_box inputGroup">
                                            <input type="radio"
                                                value="DEGREES_45"
                                                id="45"
                                                name="roof_inclination"
                                                onChange={this.props.handleChange('roof_inclination')}

                                                checked={values.roof_inclination === "DEGREES_45"}
                                            />
                                            <span className="radio_label">45 &#176; </span>
                                            <p className="radio_image">
                                        <img src={require('./images/45.png')} alt="" className="radio_house" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="error_font" style={{ textAlign: 'right' }}>{this.state.errors["roof_error"]}</p>
                            </div>
                            {/* <div className="col-md-12 col-lg-3">

                                <p className="img_compass">
                                  <Tooltip  styles={tooltipStyle} content="Bitte wählen Sie die Himmelsrichtung des Daches aus, dass für die Installation von einer Photovoltaikanlage oder einer Solarthermie infrage kommt "><img src={NormalCompass} circle />
                                    </Tooltip> 
                                    <div className="direction_box">
                                        <select className="direction_drop_box " name="directionChange"
                                            onClick={this.direction_call}
                                            onChange={this.props.handleChange('directionChange')}
                                            defaultValue={values.directionChange}
                                            ref="direction_compass"
                                        >
                                            <option value="">Dachausrichtung</option>
                                            <option value="EAST">Ost</option>
                                            <option value="WEST">West</option>
                                            <option value="SOUTH">Süd</option>
                                            <option value="SOUTHEAST">Süd-Ost</option>
                                            <option value="SOUTHWEST">Süd-West</option>
                                        </select>
                                        <p className="error_font">{this.state.errors["directionChange"]}</p>

                                    </div>
                                </p>

                            </div> */}

                        </div>
                        {/* First section Ends Here */}

                        {/* Second Section Starts Here */}

                        <div className="row">
                            <div className="col-md-12 col-lg-3 "> 
                            <p className="label_question">Wie alt ist das Gebäude?</p>
                             <div className="year_box form_1_bg_1" style={{
                                backgroundImage: 'url(' + house_year + ')',
                                backgroundSize:'contain',
                                marginTop: '0px',
                                height: '151px',
                                backgroundRepeat: 'no-repeat'
                            }}  >
                           
                            <div className="construction_year">
                            <p className="c_label">Baujahr bzw. letztes Modernisierungsjahr</p>
                            <select className="house_year_drop_box " name="construction_year"
                                        onClick={this.construction_year}
                                        onChange={this.props.handleChange('construction_year')}
                                        defaultValue={values.construction_year}
                                        ref="house_construction_year"
                                    >
                                        <option value="">Bitte auswählen</option>
                                        <option value="UP_TO1859">bis 1859</option>
                                        <option value="FROM_1860_TO1918">von 1860 bis 1918</option>
                                        <option value="FROM1919_TO1948">von 1919 bis 1948</option>
                                        <option value="FROM1949_TO1957">von 1949 bis 1957</option>
                                        <option value="FROM1958_TO1968">von 1958 bis 1968</option>
                                        <option value="FROM1969_TO1978">von 1969 bis 1978</option>
                                        <option value="FROM_1979_TO1983">von 1979 bis 1983</option>
                                        <option value="FROM1984_TO1994">von 1984 bis 1994</option>
                                        <option value="FROM1995_TO2001">von 1995 bis 2001</option>
                                        <option value="FROM2002_TONOW">seit 2002</option>
                                    </select>
                            </div>
                                  



                                </div>
                                <p className="error_msg"> <p className="error_font" style={{ textAlign: 'left' }}>{this.state.errors["house_con_year"]}</p></p>
                                

                             
                              {/* <div className="post_text_box">
                                    <label className="post_code_text">Postleitzahl</label>
                                     <input type="text" name="post_code" className="post_textbox " maxlength='5' minLength='5'
                                        placeholder='' ref={(post_code) => this.post_code = post_code}
                                        onChange={this.props.handleChange('post_code')}

                                        defaultValue={values.post_code} />
                                    <p className="error_font">{this.state.errors["post_code"]}</p>
                                </div> */}
                                <p className="label_question"> Wo steht das Gebäude?</p>
                                <div className="p_text_box">
                                    <p className="p_label">Postleitzahl</p>
                                        <input type="text" name="post_code" className="post_code_text_box" maxlength='5' minLength='5'
                                        placeholder='' ref={(post_code) => this.post_code = post_code}
                                        onChange={this.props.handleChange('post_code')}
                                        defaultValue={values.post_code} />
                                        
                                
                                </div>
                                <p className="error_msg"> <p className="error_font">{this.state.errors["post_code"]}</p></p>
                                
                                <p className="label_question" style={{marginTop:'30px'}}> Welche Ausrichtung hat das Dach?</p>
                                <div className="d_direction_div">
                                <p className="p_label">Dachausrichtung</p>
                                <select className="direction_drop_box " name="directionChange"
                                            onClick={this.direction_call}
                                            onChange={this.props.handleChange('directionChange')}
                                            defaultValue={values.directionChange}
                                            ref="direction_compass"
                                        >
                                            <option value="">Dachausrichtung</option>
                                            <option value="EAST">Ost</option>
                                            <option value="WEST">West</option>
                                            <option value="SOUTH">Süd</option>
                                            <option value="SOUTHEAST">Süd-Ost</option>
                                            <option value="SOUTHWEST">Süd-West</option>
                                        </select>
                                        
                                
                                </div>
                                <p className="error_msg"> <p className="error_font">{this.state.errors["directionChange"]}</p></p>
                                

{/* 
                                <div className="direction_div">
                                <p className="img_compass">
                                  
                                    <div className="direction_box">
                                        <select className="direction_drop_box " name="directionChange"
                                            onClick={this.direction_call}
                                            onChange={this.props.handleChange('directionChange')}
                                            defaultValue={values.directionChange}
                                            ref="direction_compass"
                                        >
                                            <option value="">Dachausrichtung</option>
                                            <option value="EAST">Ost</option>
                                            <option value="WEST">West</option>
                                            <option value="SOUTH">Süd</option>
                                            <option value="SOUTHEAST">Süd-Ost</option>
                                            <option value="SOUTHWEST">Süd-West</option>
                                        </select>
                                        <p className="error_font">{this.state.errors["directionChange"]}</p>

                                    </div>
                                </p>
                                </div> */}
                             
                               

                            </div>
                            <div className="col-lg-9 col-md-11 form_1_bg">
                            <div className="living_area_box"  style={{
                                backgroundImage: 'url(' + imgUrl + ')',
                                backgroundPosition: 'center',
                                backgroundSize: 'contain',
                                height: '450px',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            {/* <div className="living_box">
                                    <p className="living_label">Wohnfläche</p>
                                    <input type="text" name="living_area" className="living_textbox"

                                        placeholder='Wohnfläche in m2 ein' ref={(living_area) => this.living_area = living_area}
                                        onChange={this.props.handleChange('living_area')}
                                        defaultValue={values.living_area} />
                                    <p className="error_font" style={{ textAlign: 'right' }}>{this.state.errors["living_area"]}</p>
                            </div> */}

                            <div className="l_living_box">
                              
                                <div class="row justify-content-center">
                                
                                    <div class="col-6">
                                    <p className="label_question living_area_question"> Wie groß ist die Wohnfläche?</p>
                                        <div className="living_box_house">
                                        
                                             <p className="l_living_label">Wohnfläche</p>
                                             <input type="text" name="living_area" className="living_text_box"

                                        placeholder='Wohnfläche in m2 ein' ref={(living_area) => this.living_area = living_area}
                                        onChange={this.props.handleChange('living_area')}
                                        defaultValue={values.living_area} />
                                        <p><small>in qm eingeben</small></p>
                                         
                                        </div> 
                                        <p className="error_font" style={{ textAlign: 'center' }}>{this.state.errors["living_area"]}</p>                                       
                                   
                                    </div>
                                </div>

                            </div>

                            </div>    
                            </div>
                            


                        </div>

                        {/* Second Section Ends Here */}


                     
                        <div className="row progress_section">
                            <div className="col-10">
                            </div>                          
                         
                            <div className="col-2 pull-right">
                                <div className="next_section">
<button type="submit" className="btn btn_next pull_right">weiter &nbsp; <i class="fa fa-angle-right fa-1x" aria-hidden="true"></i> </button>
                                </div>
                            </div>
                        </div>

                    





                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Homedetails;
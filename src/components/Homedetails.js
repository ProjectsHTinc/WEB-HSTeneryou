import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Line } from 'rc-progress';
import { Tooltip } from 'react-lightweight-tooltip';


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
import char_error from './images/char_error.png';
import char_error_1 from './images/char_error_1.png';
import post_code_error from './images/post_code_error.png';
import living_area_error from './images/living_area_error.png';
import direction_error from './images/direction_error.png';
import construction_year_error from './images/construction_year_error.png';

class Homedetails extends Component {

    constructor(props) {
        super(props)    
        this.state = {
            step: 1,
            NormalCompass: east,
            Character: Character,
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
            this.setState({ Character: post_code_error });
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
            this.setState({ Character: living_area_error });
        }


        if (!directionChange) {
            formIsValid = false;
            errors["directionChange"] = "Bitte wählen Sie die Dachneigung aus";
            this.setState({ Character: direction_error });
        }
        if (!house_con_year) {
            formIsValid = false;
            errors["house_con_year"] = "Bitte wählen Sie das Baujahr aus";
            this.setState({ Character: construction_year_error });
            // this.setState({ Character: char_error });
        }


        this.setState({ errors: errors });
        return formIsValid;
    }


    continue = e => {
        //let fields = this.state.fields;
        e.preventDefault();

        if (this.handleValidation()) {
            this.props.nextStep();
        } else {
            // this.setState({ Character: char_error });
            //alert("error");
        }
    }





    direction_call = (event) => {
        let directionval = event.target.value;
        localStorage.setItem('direct', directionval)
        if (directionval === 'EAST') {
            this.setState({ NormalCompass: east });
        } else if (directionval === 'WEST') {
            this.setState({ NormalCompass: west });
        } else if (directionval === 'SOUTHWEST') {
            this.setState({ NormalCompass: south_west });
        } else if (directionval === 'SOUTHEAST') {
            this.setState({ NormalCompass: south_east });
        } else if (directionval === 'SOUTH') {
            this.setState({ NormalCompass: south });
        } else {

            this.setState({ NormalCompass: compass });
        }


    };

    componentDidMount() {

        const { values: { directionChange } } = this.props;
        let directionval = directionChange;
        if (directionval === 'EAST') {
            this.setState({ NormalCompass: east });
        } else if (directionval === 'WEST ') {
            this.setState({ NormalCompass: west });
        } else if (directionval === 'SOUTHWEST') {
            this.setState({ NormalCompass: south_west });
        } else if (directionval === 'SOUTHEAST') {
            this.setState({ NormalCompass: south_east });
        } else if (directionval === 'SOUTH') {
            this.setState({ NormalCompass: south });
        } else {
            this.setState({ NormalCompass: compass });
        }

    }







    render() {

        const { options, NormalCompass, Character } = this.state;
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
        //const {roof} = this.state


        return (

            <div className="container-fluid wrapper">
                <Header />
                <div className="container">
                    <h4 className="form_heading">Meine Gebäudedaten</h4>
                  
                    <h4 className="text-center small_heading">  <Tooltip  styles={tooltipStyle} content="Bitte wählen Sie die Neigung des Daches Ihres Hauses aus">Dachneigung</Tooltip></h4>
                    <form onSubmit={this.continue}>

                        {/* First section start Here */}
                        <div className="row">
                            <div className="col-md-1 hide_tab"></div>
                            <div className="col-md-12 col-lg-8">

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
                                            <span className="radio_label"> 0</span>
                                            <p className="radio_image">
                                                <img src={require('./images/0.png')} alt="" className="" />
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
                                            <span className="radio_label">15</span>
                                            <p className="radio_image">
                                                <img src={require('./images/15.png')} alt="" className="" />
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
                                            <span className="radio_label">25</span>
                                            <p className="radio_image">
                                                <img src={require('./images/25.png')} alt="" className="" />
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
                                            <span className="radio_label">30</span>
                                            <p className="radio_image">
                                                <img src={require('./images/30.png')} alt="" className="" />
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
                                            <span className="radio_label">35</span>
                                            <p className="radio_image">
                                                <img src={require('./images/35.png')} alt="" className="" />
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
                                            <span className="radio_label">45</span>
                                            <p className="radio_image">
                                                <img src={require('./images/45.png')} alt="" className="" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="error_font" style={{ textAlign: 'right' }}>{this.state.errors["roof_error"]}</p>
                            </div>
                            <div className="col-md-12 col-lg-3">

                                <p className="img_compass">
                                    {/* <img src={require('./images/n_compass.png')} alt="" className=""/> */}
                                    <Tooltip  styles={tooltipStyle} content="Bitte wählen Sie die Himmelsrichtung des Daches aus, dass für die Installation von einer Photovoltaikanlage oder einer Solarthermie infrage kommt "><img src={NormalCompass} circle />
                                    </Tooltip> 
                                    <div className="direction_box">
                                        <select className="direction_drop_box " name="directionChange"
                                            // onChange={this.direction_call} 
                                            // onClick={this.props.handleChange('directionChange')}
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

                            </div>

                        </div>
                        {/* First section Ends Here */}

                        {/* Second Section Starts Here */}

                        <div className="row">
                            <div className="col-md-6 col-lg-2 form_1_bg_1" style={{
                                backgroundImage: 'url(' + house_year + ')',
                                backgroundPosition: 'center',
                                marginTop: '0px',
                                height: '151px',
                                backgroundRepeat: 'no-repeat'
                            }}>
                              <Tooltip  styles={tooltipStyle} content="Bitte gegen Sie das Baujahr oder das Jahr in dem die letzte energestische Sanierung an Ihrem Haus durchgeführt wurde ein">
                             <div className="year_box">
                                    <label className="year_label">Baujahr bzw. letztes Modernisierungsjahr
</label>
                                    <select className="house_year_drop_box " name="construction_year"
                                        //    onChange={this.construction_year} 
                                        //    onClick={this.props.handleChange('construction_year')}  
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
                                </Tooltip>
                                <p className="error_font" style={{ textAlign: 'center' }}>{this.state.errors["house_con_year"]}</p>

                             
                              <div className="post_text_box">
                                    <label className="post_code_text">Postleitzahl</label>
                                    <Tooltip  styles={tooltipStyle} content="Bitte geben Sie Ihre fünfstellige Postleitzahl ein"> <input type="text" name="post_code" className="post_textbox " maxlength='5' minLength='5'
                                        placeholder='' ref={(post_code) => this.post_code = post_code}
                                        onChange={this.props.handleChange('post_code')}

                                        defaultValue={values.post_code} /></Tooltip>
                                    <p className="error_font">{this.state.errors["post_code"]}</p>
                                </div>
                             
                                <div className="postbox_img">
                                    <p>  <img src={postbox} className="" circle /></p>
                                </div>

                            </div>
                            <div className="col-lg-8 col-md-10 form_1_bg" style={{
                                backgroundImage: 'url(' + imgUrl + ')',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                height: '400px',
                                backgroundRepeat: 'no-repeat'
                            }}>
                                <div className="living_box">
                                    <label className="living_label">Wohnfläche</label>
                                    <Tooltip  styles={tooltipStyle} content="Bitte geben Sie Ihre Wohnfläche in m2 ein"> <input type="text" name="living_area" className="living_textbox"

                                        placeholder='Wohnfläche in m2 ein' ref={(living_area) => this.living_area = living_area}
                                        onChange={this.props.handleChange('living_area')}
                                        defaultValue={values.living_area} /></Tooltip>
                                    <p className="error_font" style={{ textAlign: 'right' }}>{this.state.errors["living_area"]}</p>
                                </div>








                            </div>
                            <div className="col-md-2 col-lg-2 hide_tab">


                                <div className="character_img">
                                    <p> <img src={Character} className="" circle /></p>
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
                                    <img src={progress_img} className="" circle style={{ position: 'relative', top: '-15px', left: '25%' }} />
                                    <Line percent="29" strokeWidth="1" trailColor="" strokeColor="#2171b9" strokeLinecap="square" className="progress_bar_line" />
                                    <p style={{ color: '#000', marginLeft: '25%' }}>25%</p>
                                </div>
                            </div>
                            <div className="col-md-2 text-center">
                                <div className="next_section">
                                    <button type="submit"
                                        // onClick={this.continue} 
                                        className="btn btn_next pull_right">weiter  </button>

                                </div>

                            </div>
                        </div>

                        {/* Progress Bar section Ends here */}





                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Homedetails;
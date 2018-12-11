import React, { Component } from 'react';
import  VideoCover  from 'react-video-cover';



class Homepage extends Component {
  render() {
    const videoOptions = {
      src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      autoPlay: true,
      muted:true, 
      loop: false,
      ref: videoRef => {
        this.videoRef = videoRef;
      }

    };
    return (
     
      <div className="container-fluid wrapper">
      <div className="row ">
      <div className="logo">
     <a href="/">
     <img src={require('./images/home_logo.png')} alt="ENER YOU" className="blink-image"/>
     </a> 
      
      </div>
      </div>
   
        <div style={{
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }}>
          <VideoCover autoPlay
            videoOptions={videoOptions}
          />
        </div>
        <div className="container">
        <div class="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <div className="home_box">
           <p className="home_desc text-center">
           <a href="/Form">
           <img src={require('./images/home_icon.png')} alt="ENER YOU" className=""/> 
           </a>
           <p className="home_text">Find your personalized Energy Solutions for your house</p>
           </p>
          
        </div>
        </div>
        
        <div className="col-md-2"></div>
        </div>
       
        </div>
      </div>
      
    );
  }
}

export default Homepage;

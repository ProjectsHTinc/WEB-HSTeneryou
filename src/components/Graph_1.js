import React, {Component} from "react";
import Chart from "react-google-charts";

class Graph_1 extends  Component{

    render(){
        const graph1_values = JSON.parse(localStorage.getItem('google_graph1'));
       
        return(
            <div className="container">
            <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <div className="container">
            <Chart id='Graph 1'
                width={'100%'}
                height={'440px'}
                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={graph1_values}
                 // Set chart options
                options = {{
                    title : 'Comparison of Electrical Self Sufficiency',
                    chartArea: { width: '60%' },
                    vAxis: {title: 'Self Sufficiency',format: '#\'%\''},
                    hAxis: {title: 'System Combination'} ,
                    seriesType: 'bars',
                    colors: ['#cba550'],
                    animation: {
                        startup: true,
                        duration: 1500,
                        easing: 'out',
                    },
                }} 
            />
            </div>
            <div className="col-md-1"></div>
             </div>
         
                
                </div>
            </div>
           
        )
    }
}

export default Graph_1;
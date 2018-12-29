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
            <div className="graph_example">
            <Chart id='Graph 1'
                width={'100%'}
                height={'380px'}
                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={graph1_values}
                 // Set chart options
                options = {{
                    title : 'Comparison of Electrical Self Sufficiency',
                    titleTextStyle: {color: '#000000',fontSize : 16},
                    fontName: "Roboto",
                    legendTextStyle: {color: '#000000',fontSize : 10},
                    chartArea: { width: '60%' },
                    vAxis: {title: 'Self Sufficiency',format: '#\'%\'',textStyle:{color: '#000000',fontSize : 13},titleTextStyle: {
                        fontSize: 13,
                        italic: false
                    }},
                    hAxis: {title: 'System Combination',textStyle:{color: '#000000',fontSize : 13},titleTextStyle: {
                        fontSize: 13,                      
                        italic: false
                    }} ,
                    seriesType: 'bars',
                    colors: ['#cba550'],
                    animation: {
                        startup: true,
                        duration: 1500,
                        easing: 'out',
                    }
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
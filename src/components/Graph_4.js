import React, {Component} from "react";
import Chart from "react-google-charts";

class Graph_4 extends  Component{

    render(){
        const graph4_values = JSON.parse(localStorage.getItem('google_graph4'));
        
        return(
            <div className="container">
            <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <div class="graph_example">
            <Chart id='Graph 4'
                width={'800px'}
                height={'380px'}
                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={graph4_values}
                 // Set chart options
                options = {{
                    title : 'Comparison of Investment Costs including Installation €',
                    chartArea: { width: '60%' },
                    vAxis: {title: 'Investment Costs in €'},
                    hAxis: {title: 'System Combination'} ,
                    seriesType: 'bars',
                    colors: ['#20801b','#000000'],
                    animation: {
                        startup: true,
                        duration: 1500,
                        easing: 'out',
                    },
                    series: { 1: { type: 'line' } },
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

export default Graph_4;
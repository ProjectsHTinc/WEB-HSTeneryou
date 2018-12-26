import React, {Component} from "react";
import Chart from "react-google-charts";

class Graph_2 extends  Component{

    render(){
        const graph2_values = JSON.parse(localStorage.getItem('google_graph2'));
        
        return(
            <div className="container">
            <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <div class="graph_example">
            <Chart id='Graph 2'
                width={'100%'}
                height={'380px'}
                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={graph2_values}            
                 // Set chart options
                options={{
                    title: 'Comparison of Self Consumption, Feed-In and Grid Consumption',
                    chartArea: { width: '60%' },
                    isStacked: true,
                    seriesType: 'bars',
                    colors: ['#cba550', '#9851b9', '#239b03', '#039b92', '#4170aa'],
                    animation: {
                        startup: true,
                        duration: 1500,
                        easing: 'out',
                    },
                    hAxis: {
                    title: 'System Combination',
                    minValue: 0,
                    },
                    vAxis: {
                    title: 'Electricity in kWh',
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

export default Graph_2;
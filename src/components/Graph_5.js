import React, {Component} from "react";
import Chart from "react-google-charts";

class Graph_5 extends  Component{

    render(){
        const graph5_values = JSON.parse(localStorage.getItem('google_graph5'));

        return(
            <div className="container">
            <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <div class="graph_example">
            <Chart id='Graph 5'
                width={'100%'}
                height={'380px'}
                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={graph5_values}
                 // Set chart options
                options={{
                    title: 'Comparison of Operating & Yearly Fuel Costs for your Elecricity and Heat Supply',
                    chartArea: { width: '60%' },
                    vAxis: {title: 'Operating Costs & Fuel Costs in €/a'},
                    hAxis: {title: 'System Combination'} ,
                    isStacked: true,
                    seriesType: 'bars',
                    colors: ['#0a6705','#0a9b03'],
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

export default Graph_5;
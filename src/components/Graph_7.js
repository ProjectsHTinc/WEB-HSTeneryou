import React, {Component} from "react";
import Chart from "react-google-charts";

class Graph_7 extends  Component{

    render(){
        const graph7_values = JSON.parse(localStorage.getItem('google_graph7'));

        return(
            <div className="container">
            <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <div class="graph_example">
            <Chart id='Graph 7'
                 width={'100%'}
                height={'380px'}
                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={graph7_values}
                // Set chart options
                options={{
                    title: 'CO2-Emissionsvergleich',
                    chartArea: { width: '60%' },
                    hAxis: { title: 'Anlagenkombinationen' },
                    seriesType: 'bars',
                    colors: ['#f2a614','#cc0303'],
                    animation: {
                        startup: true,
                        duration: 1500,
                        easing: 'out',
                    },
                    pointsVisible: true	,
                    series: {
                        0: {targetAxisIndex: 0},
                        1: {targetAxisIndex: 1, type: 'line'},
                    },
                    vAxes: {
                        0: {title: 'CO2-Äquivalent in t/a'},
                        1: {title: 'CO2 Abatement Costs in €/t'},
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

export default Graph_7;
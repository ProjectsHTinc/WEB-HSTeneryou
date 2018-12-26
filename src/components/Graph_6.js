import React, {Component} from "react";
import Chart from "react-google-charts";

class Graph_6 extends  Component{

    render(){
            const graph6_values = JSON.parse(localStorage.getItem('google_graph6'));

        return(
            <div className="container">
            <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <div class="graph_example">
            <Chart id='Graph 6'
                 width={'100%'}
                height={'380px'}
                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={graph6_values}
                 // Set chart options
                options={{
                    title: 'Vergleich der monatlichen Elektrizitäts- und Heizkosten',
                    chartArea: { width: '60%' },
                    vAxis: { title: 'Monatliche Kosten in €/Monat' },
                    hAxis: { title: 'Anlagenkombinationen' },
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

export default Graph_6;
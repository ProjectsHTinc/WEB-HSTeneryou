import React, {Component} from "react";
import Chart from "react-google-charts";

class Graph_3 extends  Component{

    render(){
        const graph3_values = JSON.parse(localStorage.getItem('google_graph3'));
        
        return(
            <div className="container">
            <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <div class="graph_example">
            <Chart id='Graph 3'
                width={'100%'}
                height={'380px'}
                chartType="ComboChart"
                loader={<div>Loading Chart</div>}
                data={graph3_values}
                
                 // Set chart options
                options = {{
                    title : 'Vergleich der Annuitätskosten',
                    chartArea: { width: '60%' },
                    vAxis: {title: 'Annuitätische Kosten in €/a'},
                    hAxis: {title: 'Anlagenkombinationen'} ,
                    seriesType: 'bars',
                    colors: ['#0a9b03'],
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

export default Graph_3;
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
                    title: 'Comparison of Monthly Electricity & Heating Costs',
                    titleTextStyle: {color: '#000000',fontSize : 16},
                    fontName: "Roboto",
                    legendTextStyle: {color: '#000000',fontSize : 10},
                    chartArea: { width: '60%' },
                    vAxis: { title: 'Monthly Costs in €/Month' ,textStyle:{color: '#000000',fontSize : 13},titleTextStyle: {
                        fontSize: 13,
                        italic: false
                    }},
                    hAxis: { title: 'System Combination' ,textStyle:{color: '#000000',fontSize : 13},titleTextStyle: {
                        fontSize: 13,
                        italic: false
                    }},
                    seriesType: 'bars',
                    colors: ['#113969','#4170aa'],
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
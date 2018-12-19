import React, {Component} from "react";
import Chart from "react-google-charts";
//import {Bar, Line, Pie} from 'react-chartjs-2';

class Graph_1 extends  Component{

    constructor(props){
        super(props);
        this.state={
            chartData :{
                labels:['chennai','cbe','salem','trichy','madurai','ooty'],
                datasets : [
                    {
                        label:'population',
                        data:[
                            1200,2000,3000,2000,4000,2000
                        ],
                        backgroundColor:[
                            'red','blue','green','black','orange','blue'
                        ]

                }
            ]
            },
            SalesData :{
                labels:['chennai','cbe','salem','trichy','madurai','ooty'],
                datasets : [
                    {
                        label:'population',
                        data:[
                            1200,2000,3000,2000,1000,2000
                        ],
                        backgroundColor:[
                            'red','blue','green','black','orange','blue'
                        ]

                }
            ]
            }
        }
    }

    render(){
        return(
            <div className="container">
            <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
            <div class="graph_example">
            <Chart id='Graph 2'
        width={'800px'}
        height={'380px'}
        chartType="ComboChart"
        loader={<div>Loading Chart</div>}
        data={[
            ['', 'aa','bb','cc','dd','ee'],
            ['9',  1669.47,0,3330.66,0,-14423.38],
            ['7',  1858.14,3319.70,0,-1552.82,0],
            ['5',  2995.76,3866.30,0,-1008.70,0],
            ['3',  2677.65,3411.79,0,-1460.95,0],
            ['4',  2995.76,2004.38,0,-2870.56,0],
            ['6',  2995.76,2004.38,0,-2870.56,0],
            ['2',  3794.66,2120.29,0,-2754.66,0],
            ['8',  3337.97,0,1662.17,0,-703.57],
        ]}
        options={{
            title: 'Comparison of Self Consumption, Feed-In and Grid Consumption in kWh,el',
            chartArea: { width: '50%' },
            isStacked: true,
            hAxis: {
            title: 'System Combination',
            minValue: 0,
            },
            vAxis: {
            title: 'Self Consumption, Feed-In & Grid Consumption in kWh,el',
            },
            seriesType: 'bars',
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
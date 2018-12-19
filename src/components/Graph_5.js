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
            <Chart id='Graph 5'
        width={'800px'}
        height={'500px'}
        chartType="ComboChart"
        loader={<div>Loading Chart</div>}
        data={[
            ['', 'Fuel Costs', 'Maintenance Costs'],
            ['6', 457.15, 1071.14],
            ['7', 457.15, 1071.14],
            ['4', 287.31, 1077.56],
            ['5', 457.15, 1359.06],
            ['2', 484.52, 1423.11],
            ['8', 554.30, 1820.46],
            ['3', 455.94, 1423.11],
            ['9', 1259.11, 2611.87],
        ]}
        options={{
            title: 'Comparison of Operating & Yearly Fuel Costs for your Elecricity and Heat Supply',
            chartArea: { width: '50%' },
            isStacked: true,
            hAxis: {
            title: 'System Combination',
            minValue: 0,
            },
            vAxis: {
            title: 'Operating Costs & Fuel Costs in €/a ',
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
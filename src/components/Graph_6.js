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
            <Chart id='Graph 6'
        width={'800px'}
        height={'500px'}
        chartType="ComboChart"
        loader={<div>Loading Chart</div>}
        data={[
            [
            'Month',
            'Electricity Costs',
            'Heating Costs',
            ],
            ['1', 112.86, 217.50],
            ['6', 89.41, 24.69],
            ['7', 112.34, 24.69],
            ['4', 89.41, 155.68],
            ['5', 105.31, 189.55],
            ['2', 91.58, 249.62],
            ['8', 105.20, 254.03],
            ['3', 117.12, 247.24],
            ['9', 329.16, 212.47],

        ]}
        options={{
            title: 'Comparison of Monthly Electricity & Heating Costs',
            chartArea: { width: '50%' },
            vAxis: { title: 'Monthly Electricity & Heating Costs in €/Month' },
            hAxis: { title: 'System Combination' },
            seriesType: 'bars',
            series: { 2: { type: 'line' } },
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
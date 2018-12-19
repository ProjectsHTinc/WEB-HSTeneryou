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
            <Chart id='7'
        width={'800px'}
        height={'380px'}
        chartType="ComboChart"
        loader={<div>Loading Chart</div>}
        data={[
            [
            '',
            'CO2 Emissions',
            'CO2 Abatement Cost',
            ],
            ['1', 11.51, 0],
            ['4', 1.25, -99.73],
            ['2', 3.33, 15.89],
            ['3', 3.52, 51.04,],
            ['9', 4.59, 366.48],
            ['6', 6.44, -512.14],
            ['7', 6.64, -476.40],
            ['5', 8.60, -146.22,],
            ['8', 10.44, 324.05],
        ]}
        options={{
            title: 'Comparison of Monthly Electricity & Heating Costs',
            chartArea: { width: '50%' },
            vAxis: { title: 'Monthly Electricity & Heating Costs in €/Month' },
            hAxis: { title: 'System Combination' },
            seriesType: 'bars',
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

export default Graph_1;
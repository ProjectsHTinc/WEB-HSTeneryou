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
            <Chart id='Graph 4'
        width={'800px'}
        height={'380px'}
        chartType="ComboChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['', 'Investment Costs','Budget - 15,000'],
          ['6', 23385.08,15000],
          ['7', 29807.18,15000],
          ['4', 15341.35,15000],
          ['5', 14669.48,15000],
          ['2', 24084.26,15000],
          ['8', 18705.77,15000],
          ['3', 30506.36,15000],
          ['9', 59312.95,15000],
        ]}
        options = {{
            title : 'Comparison of Investment Costs including Installation €',
            chartArea: { width: '50%' },
            vAxis: {title: 'Investment Costs in €'},
            hAxis: {title: 'System Combination'} ,
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
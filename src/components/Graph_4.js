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
        height={'500px'}
        chartType="ComboChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['', 'Investment Costs'],
          ['6', 23385.08],
          ['7', 29807.18],
          ['4', 15341.35],
          ['5', 14669.48],
          ['2', 24084.26],
          ['8', 18705.77],
          ['3', 30506.36],
          ['9', 59312.95],
        ]}
        options = {{
            title : 'Comparison of Investment Costs including Installation €',
            vAxis: {title: 'Investment Costs in €'},
            hAxis: {title: 'System Combination'} ,
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
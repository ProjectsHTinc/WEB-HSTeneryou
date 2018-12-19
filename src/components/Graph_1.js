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
            <Chart id='Graph 1'
        width={'800px'}
        height={'380px'}
        chartType="ComboChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['', 'Self Sufficiency'],
          ['9',  67],
          ['7',  63],
          ['5',  56],
          ['3',  55],
          ['4',  40],
          ['6',  40],
          ['2',  36],
          ['8',  33]
        ]}
        options = {{
            title : 'Comparison of Electricial Self Sufficiency',
            chartArea: { width: '50%' },
            vAxis: {title: 'Self Sufficiency in (%)'},
            hAxis: {title: 'System Combination'} ,
            chartArea: { width: '50%' },
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
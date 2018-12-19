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
            <Chart id='Graph 3'
        width={'800px'}
        height={'500px'}
        chartType="ComboChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['', 'Annuity Costs'],
          ['1',  3964.39],
          ['6', 1369.22],
          ['7', 1644.39],
          ['4', 2941.18],
          ['5', 3538.39],
          ['2', 4094.49],
          ['8', 4310.84],
          ['3', 4372.43],
          ['9', 6499.69],
        ]}
        options = {{
            title : 'Comparison of Annuity Costs €/a',
            vAxis: {title: 'Annuity Costs in €/a'},
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
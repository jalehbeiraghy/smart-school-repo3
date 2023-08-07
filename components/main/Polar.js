import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});



class Polar extends React.Component {
   
    constructor(props) {
        super(props);

        this.state = {
        
          series: [42, 47, 52, 58, 65],
           

          options: {
            chart: {
              width: 280,
              type: 'polarArea'
              
            },
           labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
           
            fill: {
              opacity: 1
              
            },
            stroke: {
              width: 1,
              colors: ['blue','red','green','gray','yellow']
            },
            yaxis: {
              show: false
            },
            // legend: {
              
            //   position: ''
            // },
            plotOptions: {
              polarArea: {
                rings: {
                  strokeWidth: 0
                },
                spokes: {
                  strokeWidth: 0
                },
              }
            },
            theme: {
              monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.6
              }
            }
          },
        
        
        };
      }

    

      render() {
        return (
          


    <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="polarArea" width={280} />
</div>
  


        );
      }
    }



export default Polar;
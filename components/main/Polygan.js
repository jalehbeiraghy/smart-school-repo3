import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});



class Polygon extends React.Component {
   
      constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'Series 1',
            data: [20, 20, 12, 16,10, 20, 20],
          }],
          options: {
            chart: {
              height: 200,
             
              type: 'radar',
            },
            dataLabels: {
              enabled: true
            },
            plotOptions: {
              radar: {
                size: 80,
                polygons: {
                  strokeColors: '#e9e9e9',
                  fill: {
                    colors: ['#f8f8f8', '#fff']
                  }
                }
              }
            },
            title: {
              text: 'Radar with Polygon Fill'
            },
            colors: ['#FF4560'],
            markers: {
              size: 4,
              colors: ['#fff'],
              strokeColor: '#FF4560',
              strokeWidth: 2,
            },
            tooltip: {
              y: {
                formatter: function(val) {
                  return val
                }
              }
            },
            xaxis: {
              categories: ['Math', 'physics', 'Art', 'English', 'literature', 'Sport', 'Music']
            },
            yaxis: {
              tickAmount: 7,
              labels: {
                formatter: function(val, i) {
                  if (i % 2 === 0) {
                    return val
                  } else {
                    return ''
                  }
                }
              }
            }
          },
        
        
        };
      }

    

      render() {
        return (
          


    <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radar"  height={200} />
</div>
  



      );
    }
  }




export default Polygon;
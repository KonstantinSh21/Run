import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import './Gragh.css'





export default class Graph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/Lrffmzfc/';

  render() {
    // const data = [
    //   {
    //     name: this.props.arr[0].date, distants: this.props.arr[0].distance , pv: 2300, amt: 1540,
    //   },
    //   {
    //     name: this.props.arr[1].date, distants: this.props.arr[1].distance , pv: 2300, amt: 1540,
    //   },
    //   {
    //     name: this.props.arr[2].date, distants: this.props.arr[2].distance , pv: 2300, amt: 1540,
    //   }

    //]
    //тоже ну видит его
    // const data = this.props.arr.map((item) => {
    //   [
    //   {name: item.date, distants: item.distance , pv: 2300, amt: 1540,}
    //   ]
    // })

    //Не видит его data 
    // for (let i = 0; i++; i = this.props.arr.lenging){
    //   const data = [
    //     {
    //      name: this.props.arr[i].date, distants: this.props.arr[i].distance , pv: 2300, amt: 1540,
    //     },
    //   ]
    // }

        
    return (

  <div>
    <div className='wrapper-graph'>
     
      
        <AreaChart
        width={500}
        height={400}
        data={this.props.arr}
        margin={{
          top: 10, right: 30, left:0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="distance" stroke="#D11546" fill="#EC174F" />
      </AreaChart>
        <div className='block-graph'>
          <span className='block-max-grapt'>Максимальное значение: </span>
          <span className='block-mix-grapt'>Минимальное значение: </span>
          <span className='block-sum-grapt'>Общее пройденное расстояние: </span>
        </div>
      </div>
  </div>  
      
    );
  }
}

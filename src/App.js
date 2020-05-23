import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Window from './Components/Window/Window'
import Graph from './Components/Graph/Graph'
import './App.css';

export default class App extends Component {


state = {
  walking: [
          {
            id: 1,
            dayWeek: "Понедельник",
            date: "2019-07-24",
            distance: 12500
          },
          {
            id: 2,
            dayWeek: "Пятница ",
            date: "2019-06-08",
            distance: 7500
          },
          {
            id: 3,
            dayWeek: "Среда",
            date: "2019-05-09",
            distance: 21000
          },
          {
            id: 4,
            dayWeek: "Вторник",
            date: "2020-04-24",
            distance: 6050
          },
        ],

    open: false,
  
        }
     
      
        //Открытие окна закрытие 
        openWindow = () => {
            this.setState(() => {
              let oldState = this.state.open
              
              return{
                open: !oldState
              }
            }
          )
        }

      //Удаление элемента
      deleteItem = (id) => {
      this.setState(({walking}) => { 
      const index = walking.findIndex(elem => elem.id === id );
      const before = walking.slice(0, index);
      const after = walking.slice(index + 1)
      const newArr = [...before, ...after]

      return {  
        walking : newArr
      }
        });
      }
      


      
      
      //новая функция который переписывает старый state c 
      // новым данным точнее добавляется новый объект в state c этим данными
      newArrAdd = (answerDayWeek, answerDist, answerDate ) => {
        this.setState(({walking}) => {
          const newArr = {
            id: 100,
            dayWeek: answerDayWeek ,
            date: answerDate,
            distance: answerDist
          }
          //К старому массиву припиливаем новый объект в него (массив)
          const newItem = [ ...walking, newArr]
          

          return{
            walking: newItem
            
          }
        }
        )
        
      }
      // определяет самое большое число 
        // maxNumber = ({walking}) =>{
        //   for (let i = 0; i++; i < walking.length){
            
        //     console.log(walking[i].distance)
        //   }
          
          
            
        // }
          
  

      // определяет самое маленькое число


      //определяет сумму всех чисел



  render(){    
    const {walking} = this.state
    
    return(
    <div>
      
      <Header />
      

      
      <Body

      // Функции которые идут дальше у элемеетам

      //Удаление и открытие окна
      deleteItem={this.deleteItem}
      openWindow={this.openWindow}
      

      // Отправляю массив для его изменения
      arr={walking}


      />

      <Graph 
        arr={walking}
      />


      {/* Показывает или прячем окно с вводом */}
      {/* Условие если состояние тру по объект покажется если нет то null */}
      {this.state.open === true ? 
      <Window 
      // Функции идут для получание ответов
      newArrAdd={this.newArrAdd}

      // Функция идет закрывать window из самого window
      openWindow={this.openWindow}
      /> : null}


      
    </div>
    )
    
  }
};



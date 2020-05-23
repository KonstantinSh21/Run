import React, {Component} from 'react'

import '../Window/Window.css'


export default class Window extends Component {



    hearAnswerDist = (event) => {
        const a = event.target.value
        
    }





      
    render(){
        const {newArrAdd, openWindow} = this.props
        return(
            <div className='wrapper-window'> 


                <div className='header-window'> 
                    <span>Введите свои данные</span>
                </div>


                <div className='dist-window'>
                    <div className='dist-window-app'>
                    Введите сколько вы пробежали?
                    </div>

                    <i className="fas fa-running"></i>

                    {/* дистанция  */}
                    <input
                    type='text' 
                    placeholder='5000'
                    onChange={this.hearAnswerDist}
                    ></input>

                    <span className='metrov'> метров</span>
                    
                </div>

                <div className='dist-window'>
                    <div className='dist-window-app'>
                    Какого числа?
                    </div>
                    <i className="fas fa-running"></i>

                    {/* дата число */}
                    <input 
                    type='text' 
                    placeholder='01-01-2021'
                    onChange={this.hearAnswerDay}
                    
                    
                    ></input>
                    
                </div>


                <div className='dist-window'>
                    <div className='dist-window-app'>
                        В какой день недели
                    </div>
                    <i className="fas fa-running"></i>


                    {/* день недели */}
                    <input type='text'
                     placeholder='Понедельник'
                     onChange={this.hearAnswerDayWeek}

                     ></input>
                    
                </div>


                <button onClick={() => newArrAdd(this.addDayWeek, 4500, '20-05-2020' )}>
                        Добавить
                </button>

                <button
                onClick={openWindow}
                >Закрыть</button>
                


            </div>
     )
     
}

}
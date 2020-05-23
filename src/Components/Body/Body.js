import React from 'react';
import ItemWhite from '../Item-white/Item-white'



import '../Body/Body.css'
let classNames = 'wrapper-body-item'





 
const Body = ({arr, deleteItem, openWindow}) => {
    
    const itemMap = arr.map((item) => {
        return(
        <div>
            <hr className='line'></hr>
            <ItemWhite
                deleteItem={() => {deleteItem(item.id)}} 
                key={item.id}
                date={item.date}
                dayWeek={item.dayWeek}
                distants={item.distance}
                arr={arr}
                
                />
            
        </div>
            
        )
        
    }
    )
    
            
    return(
    <div>
        <div className='wrapper-body'>
            <div className={classNames}>
               {itemMap}
       
            </div>
        
       
        </div>
        
        <button
        className='button-wrapper'
        onClick={openWindow}>
               Добавить запись
         </button>
        </div>
    )
}
export default Body
import React from 'react'
import '../Item-white/Item-white.css'

const ItemWhite = ({deleteItem, dayWeek, date, distants}) => {

        return(
            <div className="item-white-wrapper">
                <div className='item-center'>
                    <div className='item-white-date'>
                        {dayWeek}
                    </div>
                    <div className='item-white-dateNumber'>
                        {date}
                    </div>
                </div>

                <div className='item-center right'>
                    <div className='dist'>
                        {distants} метров
                    </div>

                </div>
                    

                <div
                 className='wrapper-trash'
                 onClick={deleteItem}
                >
                    <i className="fa fa-trash-o trash"></i>
                </div>
            </div>
            )}
 
export default  ItemWhite
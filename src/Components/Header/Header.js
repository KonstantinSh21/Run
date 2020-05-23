import React from 'react'
import '../Header/Header.css'

const Header = () => {
    return(
        <div className='wrapper-header'>
            <div className='wrapper-header-date'>Дата</div>
            <div className='wrapper-header-dist'>Дистанция</div>
        </div>
    )
}
export default Header
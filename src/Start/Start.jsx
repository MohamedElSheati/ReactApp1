import React from 'react'

import avataaars from '../assets/images/avataaars.svg'

export default function Start() {
  return <>
  <header className=' d-flex justify-content-center align-items-center text-center '>
    <div>
        <img src={avataaars} className='w-75' />
        <h2 className='fw-bold fs-1 text-uppercase'>start framework</h2>
        <div className='d-flex justify-content-between align-items-center '>
            <div className='line'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line'></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </header>
  </>
}

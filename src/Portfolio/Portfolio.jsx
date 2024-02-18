import React from 'react'
import port1 from '../assets/images/port1.png'
import port2 from '../assets/images/port2.png'
import port3 from '../assets/images/port3.png'

export default function Portfolio() {
  let imgList=[
    {src:'../assets/images/port1.png',id:'img1'},
    {src:'../assets/images/port2.png',id:'img2'},
    {src:'../assets/images/port3.png',id:'img3'},
    {src:'../assets/images/port3.png',id:'img4'},
    {src:'../assets/images/port2.png',id:'img5'},
    {src:'../assets/images/port1.png',id:'img6'},
  ]
  return <>
  <section className=' d-flex justify-content-center align-items-center text-center  py-3 '>
    <div className='container text-center'>
        <h2 className='fw-bold fs-1 py-2 text-dark-emphasis '>PORTFOLIO COMPONENT</h2>
        <div className='d-flex justify-content-center align-items-center  py-3'>
            <div className='line me-3 bg-dark'></div>
            <i className="fa-solid fa-star text-dark display-5  "></i>
            <div className='line ms-3 bg-dark'></div>
        </div>
        <div className='row g-4'>
          <div className="col-md-4   ">
            <div className='position-relative '>
              <img src={port1} className='w-100 rounded-3' />
            <div className='layer position-absolute top-0 start-0 end-0 bottom-0 rounded-3  d-flex justify-content-center align-items-center  '>
              <i className="fa-solid fa-plus fw-bold display-1 "></i>
            </div>
            </div>
          </div>
          <div className="col-md-4   ">
            <div className='position-relative '>
              <img src={port2} className='w-100 rounded-3' />
            <div className='layer position-absolute top-0 start-0 end-0 bottom-0 rounded-3  d-flex justify-content-center align-items-center  '>
              <i className="fa-solid fa-plus fw-bold display-1 "></i>
            </div>
            </div>
          </div>
          <div className="col-md-4   ">
            <div className='position-relative '>
              <img src={port3} className='w-100 rounded-3' />
            <div className='layer position-absolute top-0 start-0 end-0 bottom-0 rounded-3  d-flex justify-content-center align-items-center  '>
              <i className="fa-solid fa-plus fw-bold display-1 "></i>
            </div>
            </div>
          </div>
          <div className="col-md-4   ">
            <div className='position-relative '>
              <img src={port3} className='w-100 rounded-3' />
            <div className='layer position-absolute top-0 start-0 end-0 bottom-0 rounded-3  d-flex justify-content-center align-items-center  '>
              <i className="fa-solid fa-plus fw-bold display-1 "></i>
            </div>
            </div>
          </div>
          <div className="col-md-4   ">
            <div className='position-relative '>
              <img src={port2} className='w-100 rounded-3' />
            <div className='layer position-absolute top-0 start-0 end-0 bottom-0 rounded-3  d-flex justify-content-center align-items-center  '>
              <i className="fa-solid fa-plus fw-bold display-1 "></i>
            </div>
            </div>
          </div>
          <div className="col-md-4   ">
            <div className='position-relative '>
              <img src={port1} className='w-100 rounded-3' />
            <div className='layer position-absolute top-0 start-0 end-0 bottom-0 rounded-3  d-flex justify-content-center align-items-center  '>
              <i className="fa-solid fa-plus fw-bold display-1 "></i>
            </div>
            </div>
          </div>
          
        </div>
    </div>
  </section>
  </>
}

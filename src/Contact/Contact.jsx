import React from 'react'

export default function Contact() {
  return <>
  <section className='d-flex justify-content-center align-items-center text-center  py-3 '>
      <div className='w-50'>
        <h2 className='fw-bold fs-1 py-2 text-dark-emphasis '>CONATCT SECTION</h2>
        <div className='d-flex justify-content-center align-items-center  py-3'>
            <div className='line me-3 bg-dark'></div>
            <i className="fa-solid fa-star text-dark display-5  "></i>
            <div className='line ms-3 bg-dark'></div>
        </div>
        <form >
          <div >
            <label for="exampleFormControlInput1" className="form-label">Username</label>
            <input type="text" className="form-control w-100 border-0 border-bottom" id="exampleFormControlInput1" placeholder="userName"/>
          </div>
          <div >
            <label for="exampleFormControlInput1" className="form-label">UserAge</label>
            <input type="number" className="form-control w-100 border-0 border-bottom" id="exampleFormControlInput1" placeholder="userAge"/>
          </div>
          <div >
            <label for="exampleFormControlInput1" className="form-label">UserPassword</label>
            <input type="password" className="form-control w-100 border-0 border-bottom" id="exampleFormControlInput1" placeholder="userPassword"/>
          </div>
          <div >
            <label for="exampleFormControlInput1" className="form-label">UserEmail</label>
            <input type="email" className="form-control w-100 border-0  border-bottom" id="exampleFormControlInput1" placeholder="userEmail"/>
          </div>
          <button className='btn send text-white my-3'>Send massage</button>
        </form>
      </div>
      
  </section>      
  </>
}

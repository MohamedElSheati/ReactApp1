import React from 'react'

export default function About() {
  return <>
  <section className='vh-100 d-flex justify-content-center align-items-center text-center about py-4'>
    <div className='w-75 '>
        <h2 className='fw-bold fs-1 py-2'>ABOUT COMPONENT</h2>
        <div className='d-flex justify-content-center align-items-center '>
            <div className='line me-3'></div>
            <i className="fa-solid fa-star"></i>
            <div className='line ms-3'></div>
        </div>
        <div className='d-flex justify-content-between py-2 gap-4 '>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

        </div>
    </div>
  </section>
  </>
}

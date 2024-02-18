import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className=' w-100 text-center contain  '>
        <div className='container  mb-5 p-5'>
            <div className='row g-2'>
                <div className='col-md-4'>
                    <h2>Location</h2>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className='col-md-4 text-center'>
                    <h2>AROUND THE WEB</h2>
                    <div className='  d-flex justify-content-center align-items-center py-3 '>
                        <div className='me-3 social  d-flex justify-content-center align-items-center  '>
                            <i className="fa-brands fa-facebook fa-xl"></i>
                        </div>
                        <div className='me-3 social  d-flex justify-content-center align-items-center '>
                            <i className="fa-brands fa-twitter fa-xl "></i>
                        </div>
                        <div className='me-3 social  d-flex justify-content-center align-items-center '>
                            <i className="fa-brands fa-linkedin-in fa-xl "></i>
                        </div>
                        <div className='me-3 social  d-flex justify-content-center align-items-center '>
                            <i className="fa-solid fa-globe fa-xl "></i>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <h2>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
        <div className='copy text-center p-3 '>
            <p>Copyright © Your Website 2021</p>
        </div>
    </footer>
    </>
  );  
}

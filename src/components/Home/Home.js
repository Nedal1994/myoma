import React from 'react'
import '../Home/Home.css'
import About from '../About'
import Services from '../Services/Services'
import Contact from '../Contact'

function Home() {
  return (
    <div>
        <section id='home'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8 mt-5'>
                        <h1 className='display-4 fw-bolder mb-4 text-center text-white'>Myoma</h1>
                        <p className='lead text-center fs-4 mb-5 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className='buttons d-flex justify-content-center'>
                            <button className='btn btn-outline-light me-4 rounded-pill px-4 py-2' to='/services'>Our services</button>
                            <button className='btn btn-light me-4 rounded-pill px-4 py-2' to='/contact'>Get quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <About/>
        <Services/>
        <Contact/>
    </div>
  )
}
export default Home

import React from 'react'

function About() 
{
  return (
    <div>
        <section id='about'>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                      <img src='/assets/handyman.jpg' alt='About' className='w-75 mt-5'/>
                    </div>
                    <div className='col-md-6'>
                      <h3 className='fs-5 mb-0'>About Us</h3>
                      <h1 className='display-6 mb-2'>Who <b>We</b> Are</h1>
                      <hr className='w-50'/>
                      <p className='lead mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                      non proident, 
                      sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                      <button className='btn btn-primary rounded-pil px-4 py-2'>Get started</button>
                      <button className='btn btn-outline-primary rounded-pil px-4 py-2 ms-2'>Contact us</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
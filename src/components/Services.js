import React from 'react'
import '../components/css/Services.css'
import { BsTools, BsWrench } from "react-icons/bs";
import { MdElectricalServices, MdElectricCar ,MdCarpenter} from "react-icons/md";
import { GiPaintRoller, GiSewingMachine } from "react-icons/gi";

function Services() {
    return (
        <div>
            <section id='service'>
                <div className='container my-5 py-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='fs-5 text-center mb-0'>Our services</h3>
                            <h1 className='display-6 text-center mb-4'>Our <b>Awesome</b> Services</h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-4'>
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <BsTools id='icon'/>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Handy services</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    {/* <i class="fa fa-cogs fa-4x mb-4 text-primary"></i> */}
                                    <BsWrench id='icon'/>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Plumbing</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    {/* <i class="fa fa-cogs fa-4x mb-4 text-primary"></i> */}
                                    <MdElectricalServices id='icon'/>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Electrical Services</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-4'>
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    {/* <i class="fa fa-cogs fa-4x mb-4 text-primary"></i> */}
                                    <MdElectricCar id='icon'/>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Car Services</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    {/* <i class="fa fa-cogs fa-4x mb-4 text-primary"></i> */}
                                    <GiPaintRoller id='icon'/>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Painting</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    {/* <i class="fa fa-cogs fa-4x mb-4 text-primary"></i> */}
                                    <GiSewingMachine id='icon'/>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Tailoring</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-4'>
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    {/* <i class="fa fa-cogs fa-4x mb-4 text-primary"></i> */}
                                    <img id='welder'src='/assets/welder.png' className='fa-4x mb-4 text-primary'/>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Welding</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    {/* <i class="fa fa-cogs fa-4x mb-4 text-primary"></i> */}
                                    <img id='welder'src='/assets/ac.png' className='fa-4x mb-4 text-primary'/>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Air conditioning</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    {/* <i class="fa fa-cogs fa-4x mb-4 text-primary"></i> */}
                                    <img id='welder'src='/assets/electronics.png' className='fa-4x mb-4 text-primary'/>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Electronics</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-4'>
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    {/* <i class="fa fa-cogs fa-4x mb-4 text-primary"></i> */}
                                    <img id='welder'src='/assets/appliances.png' className='fa-4x mb-4 text-primary'/>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Large appliances</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    {/* <i class="fa fa-cogs fa-4x mb-4 text-primary"></i> */}
                                    <img id='welder'src='/assets/chef.png' className='fa-4x mb-4 text-primary'/>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Food</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    {/* <i class="fa fa-cogs fa-4x mb-4 text-primary"></i> */}
                                    <MdCarpenter id='icon'/>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Carpentry</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-4'>
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    {/* <i class="fa fa-cogs fa-4x mb-4 text-primary"></i> */}
                                    <img id='welder'src='/assets/butchery.png' className='fa-4x mb-4 text-primary'/>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Butchery</h5>
                                    <p class="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
  
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Services
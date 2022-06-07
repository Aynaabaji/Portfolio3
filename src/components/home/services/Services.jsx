import React from 'react'
import './services.css'
import Ser1 from '../../../assets/services/services-1.jpg'
import Ser2 from '../../../assets/services/services-2.jpg'
import Ser3 from '../../../assets/services/services-3.jpg'
import Ser4 from '../../../assets/services/services-4.jpg'
import Ser5 from '../../../assets/services/services-5.jpg'
import Ser6 from '../../../assets/services/services-6.jpg'

const Services = () => {
  return (
    <div className="services">
        <div className="container">
            <div className="service_header">
                <h5>my services</h5>
                <h2>Interected Services Offered Me</h2>
            </div>
            <div className="service_content">
                <div className="cntnt1 s_cntnt grid3">
                    <div className="cntnt_pic">
                        <img src={Ser1} alt="service pic" />
                        <div className="upper_content">
                            <h3>Web Development</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="cntnt_pic">
                        <img src={Ser2} alt="service pic" />
                        <div className="upper_content">
                            <h3>Web Development</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="cntnt_pic">
                        <img src={Ser3} alt="service pic" />
                        <div className="upper_content">
                            <h3>Web Development</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="cntnt2 s_cntnt grid3">
                    <div className="cntnt_pic">
                        <img src={Ser4} alt="service pic" />
                        <div className="upper_content">
                            <h3>Web Development</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="cntnt_pic">
                        <img src={Ser5} alt="service pic" />
                        <div className="upper_content">
                            <h3>Web Development</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="cntnt_pic">
                        <img src={Ser6} alt="service pic" />
                        <div className="upper_content">
                            <h3>Web Development</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
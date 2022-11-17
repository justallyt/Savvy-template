import React from 'react'
import partner1 from '../assets/logos/kra.png'
import partner2 from '../assets/logos/un-women.png'
import partner3 from '../assets/logos/gaftf.png'
import partner4 from '../assets/logos/ey.jpg'
import partner5 from '../assets/logos/owit.jpg'

const Partners = () => {
  return (
    <div className='partners-section'>
            <div className="inner-row">
                     <div className="partners-section-content">
                             <div className="intro-hover">
                                    <h2>Trusted by many companies</h2>
                             </div>

                             <div className="partners-container">
                                    <div className="partner-moja" data-aos="zoom-in">
                                                <img src={partner1} alt="" />
                                    </div>
                                    <div className="partner-moja" data-aos="zoom-in">
                                             <img src={partner2} alt="" />
                                    </div>
                                    <div className="partner-moja" data-aos="zoom-in">
                                                     <img src={partner3} alt="" />
                                    </div>
                                    <div className="partner-moja" data-aos="zoom-in">
                                             <img src={partner4} alt="" />
                                    </div>
                                    <div className="partner-moja" data-aos="zoom-in">
                                             <img src={partner5} alt="" />
                                    </div>
                             </div>
                     </div>
            </div>
    </div>
  )
}

export default Partners
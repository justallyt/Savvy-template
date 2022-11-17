import React from 'react'

const Pricing = () => {
  return (
    <div className='pricing-wrapper'>
            <div className="inner-row">
                    <div className="pricing-wrapper-content">
                             <div className="pricing-grid-item first" data-aos="fade-right">
                                    <div className="intro-hover">
                                             <h2>Our Pricing</h2>
                                    </div>
                                    <h1>Choose your Best Plan</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Urna, vitae nulla facilisi nunc mattis. Amet, morbi viverra cursus urna quis pretium pellentesque. Eget lacus morbi ac, pretium amet sem penatibus.</p>
                                    <div className="get-started-btn">
                                              <a href="s">view more</a>
                                    </div>
                             </div>
                             <div className="pricing-grid-item main" data-aos="zoom-in">
                                    <div className="pricing-details">
                                            <h2>Regular Plan</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut elit tellus</p>

                                            <div className="price">
                                                    <h1>$99 <span>/Month</span></h1>
                                            </div>
                                            <div className="features">
                                                    <ul>
                                                          <li><span><ion-icon name="checkmark-outline"></ion-icon></span>
                                                               4 Social Media Accounts
                                                          </li>
                                                          <li><span><ion-icon name="checkmark-outline"></ion-icon></span>
                                                               Team Training
                                                          </li>
                                                          <li><span><ion-icon name="checkmark-outline"></ion-icon></span>
                                                                1 Month maintenance
                                                          </li>
                                                          <li><span><ion-icon name="checkmark-outline"></ion-icon></span>
                                                               Free platform Access
                                                          </li>
                                                          <li><span><ion-icon name="checkmark-outline"></ion-icon></span>
                                                               24/7 customer support
                                                          </li>
                                                    </ul>
                                            </div>
                                            <div className="get-started-btn">
                                                     <a href="s">Get Started</a>
                                            </div>
                                    </div>
                             </div>
                             <div className="pricing-grid-item secondary" data-aos="fade-left">
                                  <div className="pricing-details">
                                            <h2>Basic Plan</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut elit tellus</p>

                                            <div className="price">
                                                    <h1>$39 <span>/Month</span></h1>
                                            </div>
                                            <div className="features">
                                                    <ul>
                                                          <li><span><ion-icon name="checkmark-outline"></ion-icon></span>
                                                               2 Social Media Accounts
                                                          </li>
                                                          <li><span><ion-icon name="checkmark-outline"></ion-icon></span>
                                                                1 Month maintenance
                                                          </li>
                                                          <li><span><ion-icon name="checkmark-outline"></ion-icon></span>
                                                               Free platform Access
                                                          </li>
                                                          <li><span><ion-icon name="checkmark-outline"></ion-icon></span>
                                                               24/7 customer support
                                                          </li>
                                                    </ul>
                                            </div>
                                            <div className="get-started-btn">
                                                     <a href="s">Get Started</a>
                                            </div>
                                    </div>
                             </div>
                    </div>
            </div>
    </div>
  )
}

export default Pricing
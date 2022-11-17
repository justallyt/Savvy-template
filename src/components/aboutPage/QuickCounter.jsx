import React from 'react'
import CountUp from 'react-countup'
const QuickCounter = () => {
  return (
    <div className='counter-container'>
              <div className="inner-row">
                      <div className="counter-content-row">
                                <div className="counter-moja">
                                      <div className="icon-section">
                                               <span><ion-icon name="ribbon-outline"></ion-icon></span>
                                      </div>
                                      <h2>
                                              <CountUp start={0} end={15}  enableScrollSpy scrollSpyOnce duration={1} />
                                              <figure>+</figure>
                                      </h2>
                                      <p>Years of Experience</p>
                              </div>
                               <div className="counter-moja">
                                       <div className="icon-section">
                                                <span><ion-icon name="globe-outline"></ion-icon></span>
                                       </div>
                                       <h2>
                                              <CountUp start={0} end={750}  enableScrollSpy scrollSpyOnce duration={2} />
                                              <figure>+</figure>
                                      </h2>
                                       <p>Professional Team</p>
                               </div>
                               <div className="counter-moja">
                                       <div className="icon-section">
                                                <span><ion-icon name="earth-outline"></ion-icon></span>
                                       </div>
                                       <h2>
                                              <CountUp start={0} end={2500}  enableScrollSpy scrollSpyOnce duration={2} />
                                              <figure>+</figure>
                                      </h2>
                                       <p>Satisfied Clients</p>
                               </div>
                                <div className="counter-moja">
                                        <div className="icon-section">
                                                 <span><ion-icon name="medal-outline"></ion-icon></span>
                                        </div>
                                        <h2>
                                              <CountUp start={0} end={550}  enableScrollSpy scrollSpyOnce duration={2} />
                                              <figure>+</figure>
                                      </h2>
                                        <p>Awards Won</p>
                                </div>
                      </div>
              </div>
    </div>
  )
}

export default QuickCounter
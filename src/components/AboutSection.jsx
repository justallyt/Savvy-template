import React from 'react'
import about_image from '../assets/happy-man.png'
import kpi_image from '../assets/kpi-graph.png'

const AboutSection = () => {
  return (
    <div className='about-section'>
           <div className="inner-row">
                  <div className="about-section-content">
                           <div className="about-image-side">
                                   <div className="about-image-background"></div>
                                   <div className="image-body">
                                                          <img src={about_image} alt="" />
                                              </div>
                                   <div className="floaty-thing about" data-aos='fade-right'>
                                            <div className="icon">
                                                    <ion-icon name="logo-dribbble"></ion-icon>
                                            </div>
                                            <div className="icon-text">
                                                    <h3>185+</h3>
                                                    <p>Brands Joined</p>
                                            </div>
                                    </div>
                                    <div className="about-floaty" data-aos="fade-left">
                                           <img src={kpi_image} alt="" />
                                    </div>

                           </div>
                           <div className="about-description-side">
                                    <div className="intro-hover" data-aos="fade-left">
                                           <h2>About Savvy</h2>
                                    </div>
                                    <h1 data-aos="fade-up">We do our best to grow your business</h1>
                                    <p data-aos="fade-up-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate aperiam perferendis commodi, delectus inventore ratione dolor? Quos corrupti soluta illum eum cumque et nulla distinctio perspiciatis voluptates maiores. Consectetur harum incidunt dolorum iusto perferendis recusandae eius sunt dignissimos optio eaque.</p>
                                    <p data-aos='fade-up-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius repellendus molestias vel impedit sit quas voluptatibus odit voluptatem, explicabo corrupti?</p>

                                    <div className="btns" data-aos="fade-up">
                                           <a href="s">Our Story</a>
                                    </div>
                           </div>
                  </div>
           </div>
    </div>
  )
}

export default AboutSection
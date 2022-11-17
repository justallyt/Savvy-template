import React from 'react'
import Navigation from '../components/navigation/Navigation'
import IntroSection from '../components/IntroSection'
import { getIntroData } from '../data/introdata'
import Footer from "../components/Footer"
import "../css/contact.css"

const Contact = () => {
  const intro_data = getIntroData()
  return (
    <>
          <div className="top-part">
                  <Navigation />
                  <IntroSection data={intro_data} identity="Contact" />
          </div>
          <div className="contact-grid-section">
                   <div className="inner-row">
                      <div className="contact-grid-column flex-kidogo" data-aos="fade-right">
                               <div className="column-grid-column-inner">
                                      <div className="intro-hover">
                                              <h2>Contact Us</h2>
                                       </div>
                                       <h1>Let's get in touch with Savvy</h1>
                                       <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Dius consecte molestie aliquet. Nullam elementum quam in ispum lacinia mattis. Curabitur imperdiet mauris eget lectus sodales interdum. Donec sem tellus, tempor a libero a, euismod placerat libero.</p>

                                       <h3>Follow Our Social Media</h3>
                                       <div className="header-socials">
                                               <a href="s"><span><ion-icon name="logo-facebook"></ion-icon></span></a>
                                               <a href="s"><span><ion-icon name="logo-twitter"></ion-icon></span></a>
                                                <a href="s"><span><ion-icon name="logo-instagram"></ion-icon></span></a>
                                                <a href="s"><span><ion-icon name="logo-pinterest"></ion-icon></span></a>
                                                <a href="s"><span><ion-icon name="logo-linkedin"></ion-icon></span></a>
                                      </div>
                               </div>
                      </div>
                      <div className="contact-grid-column" data-aos="fade-left">
                              <form action="" method="post">
                                      <div className="form-section">
                                              <div className="form-row split">
                                                        <div className="form-column">
                                                                 <label htmlFor="firstname">First Name</label>
                                                                 <input type="text" className='form-control' placeholder='First name'/>
                                                        </div>
                                                        <div className="form-column">
                                                               <label htmlFor="lastname">Last Name</label>
                                                                <input type="text" className='form-control' placeholder='Last name' />
                                                        </div>
                                              </div>
                                              <div className="form-row">
                                                     <label htmlFor="email">Email Address</label>
                                                      <input type="email" className="form-control" placeholder="Email Address" />
                                              </div>
                                              <div className="form-row">
                                                      <label htmlFor="messages">Message</label>
                                                      <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                                              </div>
                                              <div className="btns">
                                                     <a href="s">Send Message</a>
                                              </div>
                                      </div>
                              </form>
                      </div>
                </div>
          </div>

          <div className="contact-specifics">
                   <div className="inner-row">
                            <div className="contact-specifics-content">
                                        <div className="contact-specific-moja" data-aos="zoom-in-up">
                                              <div className="icon-body">
                                                      <span><ion-icon name="mail-open-outline"></ion-icon></span>
                                              </div>
                                               <div className="contact-description">
                                                       <h2>Our Email</h2>
                                                       <p>Reach us conveniently via the email below</p>

                                                       <h4>sweet@support.com</h4>
                                               </div>
                                        </div>
                                        <div className="contact-specific-moja" data-aos="zoom-in-up">
                                              <div className="icon-body">
                                                      <span><ion-icon name="map-outline"></ion-icon></span>
                                              </div>
                                               <div className="contact-description">
                                                       <h2>Our Office</h2>
                                                       <p>W 13th Parks Suite 559, Office 478 Vienna, AU 92101, Denver</p>

                                                       <h4>Kilimani, Nairobi</h4>
                                               </div>
                                        </div>
                                        <div className="contact-specific-moja" data-aos="zoom-in-up">
                                              <div className="icon-body">
                                                      <span><ion-icon name="phone-portrait-outline"></ion-icon></span>
                                              </div>
                                               <div className="contact-description">
                                                       <h2>Our Phone</h2>
                                                       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>

                                                       <h4>+254 7123 45678</h4>
                                               </div>
                                        </div>
                            </div>
                   </div>
          </div>

          <div className="map-area">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.20980824536!2d36.7883582!3d-1.2929716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x490a3d8bf7208d91!2sAMARI%20CONSULTING%20LTD!5e0!3m2!1sen!2ske!4v1668542386062!5m2!1sen!2ske" title="company location"width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <Footer />
    </>
  )
}

export default Contact
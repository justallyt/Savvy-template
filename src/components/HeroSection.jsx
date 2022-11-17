import React, { useState } from 'react'
import hero_image from '../assets/landing1.png'
import profile_1 from '../assets/profile-1.jpg'
import profile_2 from '../assets/profile-2.jpg'
import profile_3 from '../assets/profile-3.jpg'
import profile_4 from '../assets/profile-4.jpg'

const HeroSection = () => {
  const [modalactive, setmodalactive] = useState(false)

  const modalOpen = () => {
        setmodalactive(true)
  }
  const modalClose = () => {
        setmodalactive(false)
  }
 
  return (
    <div className='hero-part'>
            <div className="inner-row">
                    <div className="hero-part-container">
                            <div className="hero-part-content">
                                     <div className="hero-maneno">
                                             <div className="hero-maneno-inner">
                                                      <div data-aos='fade-right' className="intro-hover">
                                                                 <h2>Welcome to Savvy</h2>
                                                      </div>
                                                      <h1 data-aos='fade-down'>We will help you to grow your business</h1>
                                                      <p data-aos='fade-up'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut id eu elit augue felis. Penatibus in erat sed id massa, feugiat. Quam nulla facilisi sed faucibus lacus consequat malesuada.</p>

                                                      <div className="btns hero-btns">
                                                              <a href="s" data-aos="fade-up">Get Started</a>
                                                              <button onClick={modalOpen}>
                                                                      <div  data-aos="fade-left" className='__pulse_btn'><ion-icon name="play"></ion-icon></div>
                                                                       <h4 data-aos='fade-left' data-aos-delay='100'>Watch video</h4>
                                                              </button>
                                                      </div>

                                                      <div className="satisfied-clients">
                                                               <div data-aos='fade-up' className="profiles">
                                                                       <div className="profile-image">
                                                                              <img src={profile_1} alt="" />
                                                                       </div>
                                                                       <div className="profile-image">
                                                                              <img src={profile_2} alt="" />
                                                                       </div>
                                                                       <div className="profile-image">
                                                                              <img src={profile_3} alt="" />
                                                                       </div>
                                                                       <div className="profile-image">
                                                                              <img src={profile_4} alt="" />
                                                                       </div>
                                                               </div>
                                                               <div className="profile-text">
                                                                       <h3 data-aos='fade-up-left'>5,580+ Satisfied Clients</h3>
                                                               </div>
                                                      </div>
                                             </div>
                                     </div>
                                     <div className="hero-image-side">
                                              <div className="hero-image-background"></div>
                                              <div className="image-body">
                                                          <img src={hero_image} alt="" />
                                              </div>
                                              <div className="floaty-thing moja" data-aos='fade-right'>
                                                      <div className="icon">
                                                             <ion-icon name="ribbon-outline"></ion-icon>
                                                      </div>
                                                       <div className="icon-text">
                                                               <h3>1,200+</h3>
                                                               <p>Projects Done</p>
                                                       </div>
                                              </div>
                                              <div className="floaty-thing mbili" data-aos='fade-left'>
                                                      <div className="icon">
                                                             <ion-icon name="logo-dribbble"></ion-icon>
                                                      </div>
                                                       <div className="icon-text">
                                                               <h3>185+</h3>
                                                               <p>Brands Joined</p>
                                                       </div>
                                              </div>
                                     </div>
                            </div>
                    </div>
            </div>

            { /* Video Modal*/}
            <div onClick={(e) => e.stopPropagation()} className={modalactive ? "video-modal-container show" : "video-modal-container hidden" }>
                    <div className="video-body">
                             <span onClick={modalClose}><ion-icon name="close-outline"></ion-icon></span>
                             <iframe  width="560" height="315" src={modalactive ? "https://www.youtube.com/embed/u8muYnPnyhI?autoplay=0&controls=0&rel=0&loop=1&modestbranding=1&showinfo=0" : "" } title="brand video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
            </div>
    </div>
  )
}

export default HeroSection
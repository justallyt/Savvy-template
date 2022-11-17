import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { getTestimonials } from '../data/testimonials';
import quote from "../assets/quote.png"
import "swiper/css";
import { Autoplay } from 'swiper';
import { useLocation } from 'react-router-dom';
const Testimonials = () => {
const testimonials = getTestimonials()
const locator = useLocation ()
  return (
    <div className='testimonials-section'>
             <div className="inner-row">
                      <div className="testimonials-section-content">
                                <div className="section-intro">
                                       <div className="left-side" data-aos="fade-right">
                                             <div className="intro-hover">
                                                    <h2>Testimonials</h2>
                                             </div>
                                             <h1>What Clients Say About Us</h1>
                                       </div>
                                       <div className="right-side" data-aos="fade-left">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut id eu elit augue felis. Penatibus in erat sed id massa, feugiat. Quam null</p>
                                            <div className="btns">
                                                    <a href="s">All Reviews</a>
                                            </div>
                                       </div>
                               </div>

                               <div className="testimonials-row" data-aos="fade-up">
                                    <Swiper
                                             spaceBetween={30}
                                             slidesPerView={1}
                                             loop={true}
                                             autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                              }}
                                              modules={[Autoplay]}

                                              breakpoints={{
                                                  1050: {
                                                       slidesPerView: 3
                                                  },
                                                  600: {
                                                       slidesPerView: 2
                                                  }
                                              }}
                                    >
                                         { testimonials.map((testimonial, i) => (
                                                  <SwiperSlide key={i}>
                                                          <div className="testimonial-moja" >
                                                                 <p>{testimonial.testimonial_description}</p>

                                                                  <div className="testimonial-profile">
                                                                           <div className="testimonial-inner">
                                                                                   <div className="testimonial-profile-image">
                                                                                          {locator.pathname === "/pages/pricing" ? <img src={`../${testimonial.testimonial_image}`} alt="" /> : 
                                                                                           <img src={testimonial.testimonial_image} alt="" />}
                                                                                  </div>
                                                                                   <div className="profile-description">
                                                                                          <h2>{testimonial.testimonial_giver}                       </h2>
                                                                                          <p>{testimonial.giver_position}</p>
                                                                                   </div>
                                                                           </div>

                                                                           <div className="quote-box">
                                                                                   <img src={quote} alt="" />
                                                                           </div>
                                                                  </div>
                                                           </div>
                                                  </SwiperSlide>
                                           ))}
                                    </Swiper>
                                    
                                         
                               </div>
                      </div>
             </div>
    </div>
  )
}

export default Testimonials
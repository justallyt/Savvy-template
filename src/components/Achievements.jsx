import React from 'react'
import { getCards } from '../data/cards'

const Achievements = () => {
    const cards = getCards()
  return (
    <div className='achievements-section'>
            <div className="inner-row">
                     <div className="achievements-content">
                                <div className="achievements-cards" data-aos="fade-up">
                                          <div className="circle-background"></div>
                                          <div className="cards-container">
                                                 { cards.map((card, i) => (
                                                         <div className="card-moja" key={i}>
                                                                   <span><ion-icon name={card.card_icon}></ion-icon></span>
                                                                   <h2>{card.card_number} +</h2>
                                                                   <p>{card.card_desc}</p>
                                                         </div>
                                                 ))}
                                          </div>
                                </div>
                                <div className="achievements-text">
                                         <div className="intro-hover" data-aos="fade-left">
                                                <h2>Achievements</h2>
                                         </div>
                                         <h1>Some of the Awards We've Got</h1>
                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, vitae nulla facilisi nunc mattis. Amet, morbi viverra cursus urna quis pretium pellentesque. Eget lacus morbi ac, pretium amet sem penatibus at commodo.</p>
                                         <div className="btns" data-aos="slide-left">
                                                <a href="s">Read More</a>
                                         </div>
                                </div>
                     </div>
            </div>
    </div>
  )
}

export default Achievements
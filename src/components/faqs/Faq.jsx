import React from 'react'

const Faq = ({id, toggle, data, persistedState }) => {
  return (
    <div className='faq-container'>
            <div className={persistedState === id ? "faq-header active": "faq-header"} onClick={()=> toggle(id)}>
                    <h2>{data.faq_title}</h2>
                    <span><ion-icon name="chevron-back-outline"></ion-icon></span>
            </div>
            <div className={persistedState === id ? "faq-answer active": "faq-answer"}>
                       <div className="faq-answer-inner">
                              <p>{data.faq_answer}</p>
                       </div>
            </div>
    </div>
  )
}

export default Faq
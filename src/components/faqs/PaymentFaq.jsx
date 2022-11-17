import React, { useState } from 'react'
import { getFaqBatchTwo } from '../../data/faqs'
import Faq from './Faq'

const PaymentFaq = () => {
  const faqs = getFaqBatchTwo()
  const [selected, setSelected] = useState("0")

  const toggleAccordion = (i) =>{
         if(selected === i){
               setSelected(null)
         }
         setSelected(i)
  }
  return (
    <div className='payment-faq'>
             <div className="inner-row">
                      <div className="payment-faq-content">
                               <div className="payment-faq-column flexate">
                                      <div className="payment-faq-column-inner">
                                                <div className="intro-hover">
                                                        <h2>Faq</h2>
                                                </div>
                                                <h1>Payments</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut id eu augue felis. Penatibus in erat sed id massa feugiat. Quam nulla facilisi</p>
                                      </div>
                               </div>
                               <div className="payment-faq-column">
                                         {faqs.map((item) => <Faq id={item.id} key={item.id} data={item} toggle={toggleAccordion} persistedState={selected}/>)}
                               </div>
                      </div>
             </div>
    </div>
  )
}

export default PaymentFaq
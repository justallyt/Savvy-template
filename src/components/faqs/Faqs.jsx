import React, { useState } from 'react'
import "../../css/faqs.css"
import { getFaqBatchOne } from '../../data/faqs'
import Faq from './Faq'

const Faqs = () => {
  const faqs = getFaqBatchOne()
  const [selected, setSelected] = useState("0")

  const toggleAccordion = (i) =>{
         if(selected === i){
               setSelected(null)
         }
         setSelected(i)
  }

  return (
    <div className='faqs-wrapper'>
             <div className="inner-row">
                      <div className="faqs-content">
                                <div className="wrapper-intro">
                                         <div className="intro-hover">
                                                <h2>Faqs</h2>
                                         </div>
                                         <h1>Frequently Asked Questions</h1>
                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut id eu elit augue felis. Penatibus in erat sed id massa, feugiat. Quam nulla facilisi</p>
                                </div>

                                <div className="faqs-content-row">
                                        <div className="faqs-column">
                                                {faqs.slice(0,4).map((item) => <Faq id={item.id} key={item.id} data={item} toggle={toggleAccordion} persistedState={selected}/>)}
                                        </div>
                                        <div className="faqs-column">
                                                {faqs.slice(4,9).map((item) => <Faq id={item.id} key={item.id} data={item} toggle={toggleAccordion} persistedState={selected} />)}
                                                  
                                        </div>
                                </div>
                      </div>
             </div>
    </div>
  )
}

export default Faqs
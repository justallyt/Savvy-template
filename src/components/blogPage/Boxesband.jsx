import React from 'react'
import Categories from './Categories'
import Follow from './Follow'
import Grow from './Grow'
import Recentposts from './Recentposts'

const Boxesband = () => {
  return (
         <div className="boxes-band">
                 <Recentposts />

                 <Categories />

                <Follow />

                <Grow />
         </div>
  )
}

export default Boxesband
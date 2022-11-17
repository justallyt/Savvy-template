import React from 'react'

const BlogWriting = ({ data, identity }) => {
   const real_data = data.filter(item => (item.subtext === identity))
  return (
         <div className="blog-real-details">
                <div className="blog-main-image">
                        <img src={`../../${real_data[0].main_image}`} alt="" />
                </div>
                <p>{real_data[0].text1}</p>
                <h2>{real_data[0].heading}</h2>
                <p>{real_data[0].text2}</p>
                <div className="article-images">
                       {real_data[0].other_images.map(item =>
                               <img src={`../../${item}`} alt='' />
                        )}
                </div>
                <p>{real_data[0].lastText}</p>
          </div> 
  )
}

export default BlogWriting
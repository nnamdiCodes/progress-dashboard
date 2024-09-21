import React from 'react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

const Reading = () => {
  return (
    <div className="readingDiv">
        <div className='readingDiv__checkMarkContainer'>
          <IoIosCheckmarkCircleOutline className='readingDiv__checkMarkIcon'/>
        </div>
        <h3 className='readingDiv__h3'>Reading</h3>
        <p className='readingDiv__p'>25 words per week.</p>
    </div>
  )
}

export default Reading
import React from 'react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

const Homework = () => {
  return (
    <div className="homeworkDiv">
        <div className='homeworkDiv__checkMarkContainer'>
          <IoIosCheckmarkCircleOutline className='homeworkDiv__checkMarkIcon'/>
        </div>
        <h3 className='homeworkDiv__h3'>Homework</h3>
        <p className='homeworkDiv__p'>For today's lesson.</p>
    </div>
  )
}

export default Homework
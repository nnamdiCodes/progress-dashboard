import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { SiDictionarydotcom } from 'react-icons/si'

const Dictionary = () => {
  return (
    <div className="dictionaryDiv">
        <div className='dictionaryDiv__iconContainer'>
          <SiDictionarydotcom className='dictionaryDiv__icon'/>
        </div>
        <div className='dictionaryDiv__textContainer'>
            <h3>Dictionary</h3>
            <p>+ 10 new words</p>
        </div>
        <div className='dictionaryDiv__arrowForwardDiv'>
          <IoIosArrowForward className='dictionaryDiv__arrowForwardIcon'/>
        </div>
    </div>
  )
}

export default Dictionary
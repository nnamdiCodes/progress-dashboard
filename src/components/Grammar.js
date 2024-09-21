import React from 'react'
import { TfiPencil } from 'react-icons/tfi'
import { IoIosArrowForward } from 'react-icons/io'

const Grammar = () => {
  return (
    <div className="grammarDiv">
        <div className='grammarDiv__pencilContainer'>
          <TfiPencil className='grammarDiv__pencilIcon'/>
        </div>
        <div className='grammarDiv__textContent'>
            <h3>Grammar</h3>
            <p>+ 30 grammar rules</p>
        </div>
        <div className='grammarDiv__arrowForwardContainer'>
          <IoIosArrowForward className='grammarDiv__arrowForwardIcon'/>
        </div>
    </div>
  )
}

export default Grammar
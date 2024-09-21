import React from 'react'
import { LiaFlagUsaSolid } from 'react-icons/lia'

const EnglishFlag = () => {
  return (
    <div className="englishForBeginners">
        <div className='englishForBeginners__iconDiv'>
          <LiaFlagUsaSolid className='englishForBeginners__icon'/>
        </div>
        <h3 className='englishForBeginners__h3'>English for <span className='block'>beginners</span></h3>
        <p className='englishForBeginners__p'>75%</p>
        <div className='englishForBeginners__percentage'>
          <div className='englishForBeginners__whiteDiv'></div>
          <div className='englishForBeginners__orangeDiv'></div>
        </div>
    </div>
  )
}

export default EnglishFlag
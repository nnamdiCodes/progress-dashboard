import React from 'react'
import { CiBellOn } from 'react-icons/ci'
import { IoIosArrowForward } from 'react-icons/io'

const GroupInfo = () => {
  return (
    <div className="groupDiv">
        <div className='groupDiv__info'>
            <h3>Group info</h3>
            <div className='groupDiv__bellContainer'>
              <CiBellOn className='groupDiv__bellIcon'/>
            </div>
            <p>13 students in the group</p>
        </div>
        <div className='groupDiv__homework'>
            <h3>Group homework</h3>
            <p>5 students from your group<span className='groupDiv__online'> online now</span></p>
            <div className='groupDiv__arrowContainer'>
              <IoIosArrowForward className='groupDiv__arrowIcon'/>
            </div>
        </div>
        <div className='groupDiv__lesson'>
            <h3>Today's lesson</h3>
            <p>12:00</p>
            <p>Unit 6 - Articles</p>
        </div>
    </div>
  )
}

export default GroupInfo
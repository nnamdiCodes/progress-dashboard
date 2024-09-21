import React from 'react'
import comfort_philip from '../images/comfort_philip.PNG'
import leonard_cool from '../images/leonard_cool.PNG'
import john_kenedy from '../images/John_Kenedy.PNG'

const ExamUnit = () => {
  return (
    <div className="examUnitDiv">
        <p className='examUnitDiv__P'><span className='grey'>DEADLINE</span> 12:00</p>
        <h1 className='examUnitDiv__h1'>Exam-Unit 5</h1>
        <p className='examUnitDiv__P'><span className='grey'>English for beginners</span></p>
        <div className='examUnitDiv__lastline'>
            <div className='examUnitDiv__imageContainer'>
                <div><img src={comfort_philip} alt="comfort_philip.png" /></div>
                <div><img src={leonard_cool} alt="leonard_cool.png" /></div>
                <div><img src={john_kenedy} alt="john_kenedy.png" /></div>
                <div className='examUnitDiv__eight'>
                    <p>+8</p>
                </div>
            </div>
            <div className='examUnitDiv__testingContainer'>
                <p>Start testing</p>
            </div>
        </div>
    </div>
  )
}

export default ExamUnit
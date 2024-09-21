import React from 'react'
import './Profile.css'
import { IoIosArrowForward } from 'react-icons/io'
import { TfiPencil } from 'react-icons/tfi'
import { SiDictionarydotcom } from 'react-icons/si'
import { VscBook } from 'react-icons/vsc'
import comfort_philip from '../images/comfort_philip.PNG'

const Profile = () => {
  return (
    <section className='profile'>
        <div className="profile__firstDiv header">
            <figure className='header__figure'>
                <img src={comfort_philip} alt="comfort_philip" />
                <div className='header__outerFive'></div>
                <div className='header__innerFive'>5</div>
            </figure>
            <h4 className='header__h4'>Comfort Philip</h4>
            <p className='header__p'>Frontend Developer</p>
        </div>

        <div className='profile__secondDiv discount'>
            <p>
                <span className='discount__sellPrise'>
                    Get - 10% sell price
                </span>
                <span className='discount__englishA2'> for &laquo;English A2&raquo; course</span></p>
            <div className='discount__icon'><IoIosArrowForward /></div>
        </div>

        <div className='profile__thirdDiv coursesProgress'>
            <h4 className='coursesProgress__h4'>Courses Progress</h4>
            <div className='coursesProgress__firstDiv'>
                <p className='coursesProgress__grammarPercentage'>63%</p>
                <div className='coursesProgress__pencilIconContainer'>
                    <TfiPencil className='coursesProgress__pencilIcon' />
                </div>
                <div className='coursesProgress__grammar'>
                    <p>Grammar</p>
                    <p>Learn new rules.</p>
                </div>
            </div>

            <div className='coursesProgress__secondDiv'>
                <p className='coursesProgress__dictionaryPercentage'>78%</p>
                <div className='coursesProgress__dictionaryIconContainer'>
                    <SiDictionarydotcom className='coursesProgress__dictionaryIcon'/>
                </div>
                <div className='coursesProgress__dictionary'>
                    <p>Dictionary</p>
                    <p>Learn 5 new words.</p>
                </div>
            </div>

            <div className='coursesProgress__thirdDiv'>
                <p className='coursesProgress__readingPercentage'>34%</p>
                <div className='coursesProgress__bookIconContainer'>
                    <VscBook className='coursesProgress__bookIcon'/>
                </div>
                <div className='coursesProgress__reading'>
                    <p>Reading</p>
                    <p>Train your skill.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile
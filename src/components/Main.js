import React from 'react'
import Heading from './Heading'
import ExamUnit from './ExamUnit'
import Homework from './Homework'
import Reading from './Reading'
import GroupInfo from './GroupInfo'
import EnglishFlag from './EnglishFlag'
import Grammar from './Grammar'
import Dictionary from './Dictionary'


const Main = () => {
  return (
    <main className="Main">
        <Heading />
        <section className="secondRow">
          <ExamUnit />
          <Homework />
          <Reading />
        </section>
        <section className="thirdRow">
          <GroupInfo />
          <EnglishFlag />
        </section>
        <section className='fourthRow'>
          <Grammar />
          <Dictionary />
        </section>     
    </main>
  )
}

export default Main
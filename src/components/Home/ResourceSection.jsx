import React from 'react'
import { useNavigate } from 'react-router'
import pdf1 from '/activity-checklist.pdf'
import pdf2 from '/survival-checklist.pdf'
import backpack from './hr-backpack.png'
import kitImage from './hr-kit.png'
import './resourceSection.css'

const ResourceSection = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/resources')
  }

  const handlePDF1 = () => {
    window.open(pdf1, '_blank')
  }

  const handlePDF2 = () => {
    window.open(pdf2, '_blank')
  }
  return (
    <div className="home-resource">
      <h2 className='hr-titles top'>Free, printable resources</h2>
      <section>
      <div className="card one" onClick={handlePDF1}>
        <img src={backpack} alt="A pink hiking backpack with a yellow sleeping bag rolled up and strapped to the top." className='backpack' />
        <h4 className='hr-titles grid-text'>Whether you're hiking, skiing, or floating the river, here's what you should bring for different outdoor activities!</h4>
      </div>
      <div className="card two" onClick={handlePDF2}>
        <img src={kitImage} alt="A brown rectangular survival kit with rope, a compass, fire starter, a clip, band-aids, and a whistle." className='kit' />
        <h4 className='hr-titles grid-text'>Let's make sure you have everything you need in your survival kit!</h4>
      </div>
      </section>
      <button className='see-more' onClick={handleClick}>See more</button>
    </div>
  )
}

export default ResourceSection
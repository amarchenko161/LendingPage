import React from 'react'
import Billing from '../../Assets/Billing.png'
import Open from '../../Assets/open.svg'
import './Description.css'

const Description = () => {
  return (
    <div className='description-conatiner'>
      <div className='description-info'>
        <div className='description-title'>
          Fast. Accurate. Reliable
        </div>
        <div className='description-text'>
          The most powerful finance software that connects with your financial accounts. 
          Track <br/> spending and categorize expenses so you can see where your money is going.
        </div>
      </div>
      <div className='select-block'>
        <div className='left-section'>
          <div className='task-select'>
            <span className='name-title'>Task</span>
            <span className='select'>Select</span>
          </div>
          <div className='check'>
            <img src={Open} alt = '' />
          </div>
        </div>
        <div className='right-section'>
          <div className='departments-select'>
            <span className='name-title'>Departments</span>
            <span className='select'>Select</span>
          </div>
          <div className='check'>
            <img src={Open} alt = '' />
          </div>
        </div>
        <div className='search-input'>
          Search
        </div>
      </div>
      <div className='billing-info'>
        <img src={Billing} alt=''/>
      </div>
    </div>
  )
}

export default Description
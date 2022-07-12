import React from 'react'
import Billing from '../../Assets/Billing.png'
import Open from '../../Assets/icons/open.svg'
import './style.css'

const Description = () => {
  return (
    <main className='description-conatiner'>
      <section className='description-info'>
        <div className='description-title'>
          Fast. Accurate. Reliable
        </div>
        <div className='description-text'>
          The most powerful finance software that connects with your financial accounts. 
          Track <br/> spending and categorize expenses so you can see where your money is going.
        </div>
      </section>
      <section className='select-block'>
        <section className='left-section'>
          <div className='task-select'>
            <span className='name-title'>Task</span>
            <span className='select'>Select</span>
          </div>
          <div className='check'>
            <img src={Open} alt = '' />
          </div>
        </section>
        <section className='right-section'>
          <div className='departments-select'>
            <span className='name-title'>Departments</span>
            <span className='select'>Select</span>
          </div>
          <div className='check'>
            <img src={Open} alt = '' />
          </div>
        </section>
        <button className='search-input'>
          Search
        </button>
      </section>
      <div className='billing-info'>
        <img src={Billing} alt=''/>
      </div>
    </main>
  )
}

export default Description
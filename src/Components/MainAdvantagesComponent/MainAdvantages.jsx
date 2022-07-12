import React from 'react'
import defend from '../../Assets/icons/defend.svg'
import graph from '../../Assets/icons/graph.svg'
import house from '../../Assets/icons/house.svg'
import './style.css'

const MainAdvantages = () => {
  return (
    <main className='advantages-container'>
      <section className='sub-container'>
        <section className='accounts'>
          <img src={house} alt='' className='icons'/>
          <div className='info-name'>
            Accounts
          </div>
          <div className='title'>
            Advanced Account Managament
          </div>
          <div className='subtitle'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
            purus sit amet luctus venenatis, lectus magna fringilla urna
          </div>
        </section>
        <section className='secure'>
          <img src={defend} alt='' className='icons'/>
          <div className='info-name'>
            Secure
          </div>
          <div className='title'>
            Your Data is in Good Hands
          </div>
          <div className='subtitle'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
            purus sit amet luctus venenatis, lectus magna fringilla urna
          </div>
        </section>
        <section className='analytics'>
          <img src={graph} alt='' className='icons'/>
          <div className='info-name'>
            Analytics
          </div>
          <div className='title'>
            Interpret Data Quickly
          </div>
          <div className='subtitle'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna
          </div>
        </section>
      </section>
    </main>
  )
}

export default MainAdvantages
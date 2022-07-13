import React from 'react'
import Arrow from '../../Assets/icons/arrow.svg'
import './style.css'

const PowerfulFeatures = () => {
  return (
    <main className='powerful-container'>
      <section className='powerful-info'>
        <div className='powerful-content'>
          <span className='powerful-title'>
            Powerful features for
          </span>
          <span className='powerful-subtitle'>
             powerful creators
          </span>
          <span className='powerful-describe'>
             Choose a plan that’s right for you
          </span>
        </div>
        <div className='pay-sub'>
          <div className='variable-sub'>
            <span className='pay-text'>
              Pay Monthly
            </span>
            <div className='border-button'>
              <div className='cicle-button'>

              </div>
            </div>
            <span className='pay-text'>
              Pay Yearly
            </span>
          </div>
          <div className='arrow-sub'>
            <img src={Arrow} alt='' />
            <span className='sell-price'>
                Save 25%
            </span>
          </div>
        </div>
      </section>
      <section className='powerful-content'>
        <section className='freebie-price'>

        </section>
        <section className='professional-price'>
          
          </section>
          <section className='enterprice-price'>
          
          </section>
      </section>
    </main>
  )
}


export default PowerfulFeatures
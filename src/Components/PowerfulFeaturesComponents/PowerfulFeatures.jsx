import React from 'react'
import Arrow from '../../Assets/icons/arrow.svg'
import Close from '../../Assets/icons/close.svg'
import Acept from '../../Assets/icons/done.svg'
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
      <section className='powerful-content-price'>
        <section className='freebie-price'>
          <span className='price-name'>
            Freebie
          </span>
          <span className='subname-price'>
           Ideal for individuals who need quick access <br/> to basic features.
          </span>
          <div className='price-subsc'> 
            <span className='how-price-subsc'>$0</span>
            <span className='how-month-price'>/Month</span>
          </div>
          <button className='btn-price'>Get Started Now</button>
          <section className='benefit-price'>
            <section className='active-price'>
              <div className='benifit-desc-active'>
                <img src={Acept} alt=''/>
                <span className='desc-text-active'> 
                  20,000+ of PNG & SVG graphics
                </span>
              </div>
              <div className='benifit-desc-active'>
                <img src={Acept} alt=''/>
                <span className='desc-text-active'> 
                 Access to 100 million stock images
                </span>
              </div>
            </section>
            <section className='block-price'>
              <div className='benifit-desc-block'>
                  <img src={Close} alt=''/>
                  <span className='desc-text-block'> 
                    Upload custom icons and fonts
                  </span>
                </div>
                <div className='benifit-desc-block'>
                  <img src={Close} alt=''/>
                  <span className='desc-text-block'> 
                   Unlimited Sharing
                  </span>
                </div>
                <div className='benifit-desc-block'>
                  <img src={Close} alt=''/>
                  <span className='desc-text-block'> 
                   Upload graphics & video in up to 4k
                  </span>
                </div>
                <div className='benifit-desc-block'>
                  <img src={Close} alt=''/>
                  <span className='desc-text-block'> 
                   Unlimited Projects
                  </span>
                </div>
                <div className='benifit-desc-block'>
                  <img src={Close} alt=''/>
                  <span className='desc-text-block'> 
                   Instant Access to our design system
                  </span>
                </div>
                <div className='benifit-desc-block'>
                  <img src={Close} alt=''/>
                  <span className='desc-text-block'> 
                   Create teams to collaborate on designs
                  </span>
                </div>
            </section>
          </section>
        </section>
        <section className='professional-price'>
        <span className='price-name color-white'>
            Professional
          </span>
          <span className='subname-price color-white'>
          Ideal for individuals 
          who who need advanced <br/> features and tools for client work.
          </span>
          <div className='price-subsc'> 
            <span className='how-price-subsc color-white'>$25</span>
            <span className='how-month-price color-white'>/Month</span>
          </div>
          <button className='btn-price'>Get Started Now</button>
          <section className='benefit-price'>
            <section className='active-price'>
              <div className='benifit-desc-active'>
                <img src={Acept} alt=''/>
                <span className='desc-text-active color-white'> 
                  20,000+ of PNG & SVG graphics
                </span>
              </div>
              <div className='benifit-desc-active'>
                <img src={Acept} alt=''/>
                <span className='desc-text-active color-white'> 
                 Access to 100 million stock images
                </span>
              </div>
              <div className='benifit-desc-active'>
                  <img src={Acept} alt=''/>
                  <span className='desc-text-active color-white'> 
                    Upload custom icons and fonts
                  </span>
                </div>
                <div className='benifit-desc-active '>
                  <img src={Acept} alt=''/>
                  <span className='desc-text-active color-white'> 
                   Unlimited Sharing
                  </span>
                </div>
                <div className='benifit-desc-active'>
                  <img src={Acept} alt=''/>
                  <span className='desc-text-active color-white'> 
                   Upload graphics & video in up to 4k
                  </span>
                </div>
                <div className='benifit-desc-active'>
                  <img src={Acept} alt=''/>
                  <span className='desc-text-active color-white'> 
                   Unlimited Projects
                  </span>
                </div>
              </section>
            <section className='block-price'>
                <div className='benifit-desc-block'>
                  <img src={Close} alt=''/>
                  <span className='desc-text-block color-white'> 
                   Instant Access to our design system
                  </span>
                </div>
                <div className='benifit-desc-block'>
                  <img src={Close} alt=''/>
                  <span className='desc-text-block color-white'> 
                   Create teams to collaborate on designs
                  </span>
                </div>
            </section>
          </section>
          </section>
          <section className='enterprice-price'>
            <span className='price-name'>
              Enterprise
            </span>
            <span className='subname-price'>
              Ideal for businesses who need personalized <br/> services 
              and security for large teams. 
            </span>
            <div className='price-subsc'> 
              <span className='how-price-subsc'>$100</span>
              <span className='how-month-price'>/Month</span>
            </div>
            <button className='btn-price'>Get Started Now</button>
            <section className='benefit-price'>
              <section className='active-price'>
                <div className='benifit-desc-active'>
                  <img src={Acept} alt=''/>
                  <span className='desc-text-active'> 
                    20,000+ of PNG & SVG graphics
                  </span>
                </div>
                <div className='benifit-desc-active'>
                  <img src={Acept} alt=''/>
                  <span className='desc-text-active'> 
                  Access to 100 million stock images
                  </span>
                </div>
                <div className='benifit-desc-active'>
                    <img src={Acept} alt=''/>
                    <span className='desc-text-active'> 
                      Upload custom icons and fonts
                    </span>
                  </div>
                  <div className='benifit-desc-active'>
                    <img src={Acept} alt=''/>
                    <span className='desc-text-active'> 
                    Unlimited Sharing
                    </span>
                  </div>
                  <div className='benifit-desc-active'>
                    <img src={Acept} alt=''/>
                    <span className='desc-text-active'> 
                    Upload graphics & video in up to 4k
                    </span>
                  </div>
                  <div className='benifit-desc-active'>
                    <img src={Acept} alt=''/>
                    <span className='desc-text-active'> 
                    Unlimited Projects
                    </span>
                  </div>
                  <div className='benifit-desc-active'>
                    <img src={Acept} alt=''/>
                    <span className='desc-text-active'> 
                    Instant Access to our design system
                    </span>
                  </div>
                  <div className='benifit-desc-active'>
                    <img src={Acept} alt=''/>
                    <span className='desc-text-active'> 
                    Create teams to collaborate on designs
                    </span>
                  </div>
              </section>
            </section>
          </section>
      </section>
    </main>
  )
}


export default PowerfulFeatures
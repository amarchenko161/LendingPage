import React from "react";
import Chart from '../../Assets/Chart.png'
import Done from '../../Assets/icons/done.svg'
import './style.css'

const StoreMetrics = () => {
    return(
        <main className="container">
          <section className="left-content">
            <section className="content-info">
                <span className="title-metrics">WHY CHOOSE US</span>
                <span className="general-info">Track real time data <br/> with advanced analytics</span>
                <span className="describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.</span>
            </section>
            <section className="arguments">
                <div className="arguments-info">
                     <img src={Done} alt=''/>
                     <p>Advanced Analytics</p>
                </div>
                <div className="arguments-info">
                     <img src={Done} alt=''/>
                     <p>Team management</p>
                </div>
                <div className="arguments-info">
                     <img src={Done} alt=''/>
                     <p>24/7 assistance</p>
                </div>
            </section>
            <button className="learn-more">
                Learn More
            </button>
          </section>
          <section className="right-content">
            <img src={Chart} alt='' />
          </section>
        </main>
    )
}

export default StoreMetrics
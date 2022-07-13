import React from "react";
import Teams from '../../Assets/teams.png'
import './style.css'

const ManagesTeams = () => {
    return(
        <main className="container-teams">
            <section className="team-content">
                <img src={Teams} alt='teams'/>
            </section>
            <section className="content-teams">
                <span className="title-teams">
                     Build & Manage Teams
                </span>
                <span className="describe-content">
                    The most powerful finance software that connects with your financial accounts. 
                    Track <br/> spending and categorize expenses so you can see where your money is going.
                </span>
                <button className="btn-teams">
                    Get Started
                </button>
            </section>
        </main>
    )
}

export default ManagesTeams
import React from 'react';
import './Headhome.css';
import job from '.././assets/dreamJob.png';
const Headhome = () => {
    return (
        <div className="Headhome">

            <div className="dream-job-left">
             <h1>
             One Step <br/> Closer To Your<br/> <span className="dream-job-txt">Dream Job</span>
             </h1>
             <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className="apply-btn get-start-btn">Get Started</button>
            </div>

          
            <div className="dream-job-right">
               <img src={job} alt=""/>
            </div>
            
        </div>
    );
};

export default Headhome;
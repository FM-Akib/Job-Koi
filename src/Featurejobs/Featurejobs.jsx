import React, { useEffect, useState } from 'react';
import Jobcard from '../Jobcard/Jobcard';
import './Featurejobs.css';
const Featurejobs = () => {

    const [jobs,setJobs]=useState([]);
    useEffect(() =>{
            fetch('jobs.json')
            .then(response => response.json())
            .then(jobs=>setJobs(jobs));
    },[])

    // console.log(jobs)

    return (
        <section className="feature-jobs">
            <div className="jobs-container">
                 {
                    jobs.map(job =><Jobcard
                    key={job.id}
                    job={job}
                    ></Jobcard>)
                 }
            </div>
        </section>
    );
};

export default Featurejobs;
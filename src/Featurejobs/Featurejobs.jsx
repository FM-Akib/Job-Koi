import React, { useEffect, useState } from 'react';
import Jobcard from '../Jobcard/Jobcard';
import './Featurejobs.css';
const Featurejobs = () => {

    const [jobs,setJobs]=useState([]);
    const [dataLength,setDataLength]=useState(4); 

    useEffect(() =>{
            fetch('jobs.json')
            .then(response => response.json())
            .then(jobs=>setJobs(jobs));
    },[])

    // console.log(jobs)

    return (
        <section className="feature-jobs">
               <div className="jobcategory-title">
                <h2>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="jobs-container">
                 {
                    jobs.slice(0,dataLength).map(job =><Jobcard
                    key={job.id}
                    job={job}
                    ></Jobcard>)
                 }
            </div>
            <div className={`flex justify-center mt-5 ${dataLength===jobs.length && 'hidden'}`}>
                <button onClick={()=>setDataLength(jobs.length)} className="btn bg-[#D4145A] text-white">Show All</button>
            </div>
        </section>
    );
};

export default Featurejobs;
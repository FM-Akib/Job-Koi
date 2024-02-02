import React from 'react';
import './Jobcard.css';

const Jobcard = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job;
    return (
        <div className='job-card'>
            <img src={logo} alt={job_title} />
            <div className='job-details'>
                <h2 className='job-title'>{job_title}</h2>
                <p>{company_name}</p>
                <div className='job-type'>
                    <p>{remote_or_onsite}</p>
                    <p>{job_type}</p>
                </div>
                <div className='job-location'>
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
            </div>
            <button>view details</button>
        </div>
    );
};

export default Jobcard;
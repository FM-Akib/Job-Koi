import React from 'react';
import './Jobcard.css';

const Jobcard = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job;
    return (
        <div className='job-card'>
            <img src={logo} alt={job_title} />
        </div>
    );
};

export default Jobcard;
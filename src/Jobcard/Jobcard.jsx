import React from 'react';
import './Jobcard.css';
import locationIcn from '../assets/icons/location2.png'
import salaryIcn from '../assets/icons/money.png'
import { Link } from 'react-router-dom';
const Jobcard = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job;
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
                <div className='chip'><div className='chip-icon'><img src={locationIcn} alt=""/></div><p> {location}</p></div>
                <div className='chip'><div className='chip-icon'><img src={salaryIcn} alt=""/></div> <p> {salary}</p></div>
                </div>
            </div>
           <Link to={`/jobDetails/${id}`}><button className='view-btn'>view details</button></Link> 
        </div>
    );
};

export default Jobcard;
import React from 'react';
import './Jobdetails.css';
import backLeft from '../assets/image/bg1.png';
import backRight from '../assets/image/bg2.png';

const Jobdetails = () => {
    return (
        <>
            <div className="JobDetails-head">
                <div className="jobdetails-left-img"><img className='Image' src={backLeft} alt=""/></div>
                <div className='jobdetails-right-img'><img src={backRight} alt=""/></div>
            </div>
        </>
    );
};

export default Jobdetails;
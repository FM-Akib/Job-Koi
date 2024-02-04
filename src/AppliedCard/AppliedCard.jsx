import { CiDollar } from "react-icons/ci";

import { IoLocationOutline } from "react-icons/io5";
const AppliedCard = ({job}) => {
  const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job;



    return (
   <div className="card card-side bg-base-100 shadow-xl mt-16 border border-indigo-600 p-12 flex items-center justify-evenly">
    <figure className="h-54 w-54"><img  src={logo} alt="Movie"/></figure>
    
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="flex items-center">
      <button className="btn btn-sm mr-4 border border-gray-300 px-6 ">{remote_or_onsite}</button>
      <button className="btn btn-sm border border-gray-300 px-6 py-2">{job_type}</button>
    </div>
<div className="flex items-center">
    <h2 className="flex items-center mr-5"><IoLocationOutline />  {location}</h2>
    <h2 className="flex items-center"><CiDollar />  {salary}</h2>
    </div>
  </div>
  <div className="card-actions justify-end">
      <button className="btn btn-primary">view details</button>
    </div>


  </div>
    );
};

export default AppliedCard;
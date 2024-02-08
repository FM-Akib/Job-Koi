import { useEffect, useState } from "react";
import { GetStoredJobDetails } from "../utilities/LocalStorage";
import { useLoaderData } from "react-router-dom";
import AppliedCard from "../AppliedCard/AppliedCard";
import './AppliedJobs.css';

const Appliedjobs = () => {
         
    const jobs=useLoaderData();

    const [AppliedJobs,setAppliedJobs]=useState([])
    const [filterJobs,setFilterJobs]=useState([AppliedJobs]);

    const HandleFilterJob=(filter) => {
        if(filter==='all'){
            setFilterJobs(AppliedJobs);
        }
        else if(filter==='Remote'){
            const remoteJobs= AppliedJobs.filter(job=>job.remote_or_onsite==='Remote');
            setFilterJobs(remoteJobs);
        }
        else if(filter==='Onsite'){
            const onsiteJobs= AppliedJobs.filter(job=>job.remote_or_onsite==='Onsite');
            setFilterJobs(onsiteJobs);
        }

    }

    useEffect(() =>{
        const localStoragepreAppliedJobid = GetStoredJobDetails();
        if(jobs.length>0){
            // const AppliedJobs=jobs.filter(job =>localStoragepreAppliedJobid.includes(job.id))
            // console.log(AppliedJobs)
            const AppliedJob=[];
            for(const id of localStoragepreAppliedJobid){
                const jobApplied=jobs.find(job => job.id===id)
                if(jobApplied){
                    AppliedJob.push(jobApplied)
                }
            }
            setAppliedJobs(AppliedJob)

        }
    },[jobs])
     
     return (
        <div>
           
          
           <div className="applied-jo-container">
               
           <div className="flex justify-end mt-16 items-center">
           <details className="dropdown">
            <summary className="m-1 bg-orange-500 text-white w-28 btn">Filter</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li onClick={()=>HandleFilterJob('all')}><a>All</a></li>
                <li onClick={()=>HandleFilterJob('Remote')}><a>Remote</a></li>
                <li onClick={()=>HandleFilterJob('Onsite')}><a>Onsite</a></li>
            </ul>
           </details>
           </div>
               {
                    filterJobs.map(job => <AppliedCard
                    key={job.id}
                    job={job}
                    ></AppliedCard>)
               }
           </div>
           
    
        </div>
    );
};

export default Appliedjobs;
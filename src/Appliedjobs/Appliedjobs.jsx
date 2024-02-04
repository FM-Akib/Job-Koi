import { useEffect, useState } from "react";
import { GetStoredJobDetails } from "../utilities/LocalStorage";
import { useLoaderData } from "react-router-dom";
import AppliedCard from "../AppliedCard/AppliedCard";

const Appliedjobs = () => {
         
    const jobs=useLoaderData();

   const [AppliedJobs,setAppliedJobs]=useState([])


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
           
           <div>
                filter
           </div>
           <div className="">
               {
                    AppliedJobs.map(job => <AppliedCard
                    key={job.id}
                    job={job}
                    ></AppliedCard>)
               }
           </div>
           
    
        </div>
    );
};

export default Appliedjobs;
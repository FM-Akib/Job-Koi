const GetStoredJobDetails =()=>{
       const storedjobs=localStorage.getItem('job-details');
       if(storedjobs){
          return JSON.parse(storedjobs)
       }
       return [];
}

const saveJobApplication=(id)=>{
    const storedjobsApplications=GetStoredJobDetails();
    const exists=storedjobsApplications.find(jobId=>jobId===id) 
    if(!exists){
        storedjobsApplications.push(id);
        localStorage.setItem('job-details',JSON.stringify(storedjobsApplications));
    }
}

export {
    GetStoredJobDetails,
    saveJobApplication
}
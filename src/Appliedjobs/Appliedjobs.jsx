import { useLoaderData } from "react-router-dom";

const Appliedjobs = () => {

    const job = useLoaderData();
     console.log(job);
    return (
         
        <div>
           Salam 
        </div>
    );
};

export default Appliedjobs;
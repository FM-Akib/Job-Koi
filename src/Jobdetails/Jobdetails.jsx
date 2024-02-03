import { useLoaderData, useParams } from 'react-router-dom';
import './Jobdetails.css';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegAddressBook } from "react-icons/fa";
import jobHead from '.././assets/image/job_details.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../utilities/LocalStorage';


const Jobdetails = () => {
    const jobs=useLoaderData();
    const {id} =useParams();
   
    const idInt=parseInt(id);
       
    const job=jobs.find(job => job.id === idInt);
    //  console.log(job);
    const {job_description,job_responsibility,educational_requirements,experiences,salary}=job;
    const {phone,email,address}=job.contact_information;

    const HandleApplyNow=()=>{
        saveJobApplication(id);
        toast("Applied Successfully!");

    }
    
    return (
        <>
        <ToastContainer />
        <div className="mb-20">
         <img className="bg-cover h-50" src={jobHead} alt=""/>

        </div>
            <div className="grid grid-cols-4 job-details-page">
                <div className="col-span-3 p-5 job-details-container">
                  <p> <span className="font-bold text-black">Job Description: </span>{job_description}</p>
                  <p> <span className="font-bold text-black">Job Responsibility: </span>{job_responsibility}</p>
                  <p> <span className="font-bold text-black">Educational Requirements: </span><br/>{educational_requirements}</p>
                  <p> <span className="font-bold text-black">Experiences: </span><br/>{experiences}</p>
                </div>


                <div className="col-span-1 bg-[#e3e7fd] p-6 rounded-lg shadow-lg">
                    <div className="mb-6">
                    <h3 className="font-bold text-black mb-2">Job Details</h3>
                    <hr className="hr-line"></hr>

                    <div className="my-3">
                    <div className="flex items-center mb-3">
                    <AiOutlineDollarCircle className="mr-2" />  <p> <span className="font-bold text-black">Salary: </span>{salary}</p>
                    </div>
                    <div className="flex items-center ">
                    <CiCalendar className="mr-2"/>  <p> <span className="font-bold text-black">Job Title: </span>{salary}</p>
                    </div>
                    </div>
                    </div>


                    <div className="mb-4">
                    <h3 className="font-bold text-black mb-2">Contact Information</h3>
                    <hr className="hr-line"></hr>

                    <div className="my-3 ">
                    <div className="flex items-center  mb-3">
                    <FiPhone className="mr-2" />  <p> <span className="font-bold text-black">Phone: </span>{phone}</p>
                    </div>
                    <div className="flex items-center  mb-3 ">
                    <HiOutlineMail className="mr-2" />  <p> <span className="font-bold text-black">Email: </span>{email}</p>
                    </div>
                    <div className="flex items-start  mb-3 ">
                    <FaRegAddressBook className='text-xl mt-1 mr-2'/>  <p> <span className="font-bold text-black">Address: </span>{address}</p>
                    </div>
                    </div>

                    <button onClick={HandleApplyNow} className="btn btn-primary w-full text-white mt-12" >Apply Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Jobdetails;
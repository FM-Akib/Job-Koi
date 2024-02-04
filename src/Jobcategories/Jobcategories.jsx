import  { useEffect, useState } from 'react';
import './Jobcategories.css';
import Categorycard from '../Categorycard/Categorycard';


const Jobcategories = () => {
    const [jobcategories,setJobcategories] =useState([]);
    
    useEffect(()=>{
        fetch('categories.json')
        .then(response=>response.json())
        .then(data=>setJobcategories(data));
    },[])
   
    return (
        <section className="jobcategories">
            <div className="jobcategory-title">
                <h2>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="categories">
            {
              jobcategories.map(category=><Categorycard
              key={category.id}
              category={category}
              ></Categorycard>)
            }
            </div>
        </section>
    );
};

export default Jobcategories;
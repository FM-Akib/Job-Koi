import React from 'react';
import './Jobcategories.css';
import Categorycard from '../Categorycard/Categorycard';


const Jobcategories = ({categories}) => {
    // console.log(categories);
    return (
        <section className="jobcategories">
            {
              categories.map(category=><Categorycard
              key={category.id}
              category={category}
              ></Categorycard>)
            }
        </section>
    );
};

export default Jobcategories;
import React from 'react';
import Headhome from '../Headhome/Headhome';
import Jobcategories from '../Jobcategories/Jobcategories';
import { useLoaderData } from 'react-router-dom';



const Home = () => {
     const categories = useLoaderData();
    //  console.log(categories);
    return (
        <>
            <Headhome/>
            <Jobcategories
            categories={categories}
            ></Jobcategories>
        </>
    );
};

export default Home;
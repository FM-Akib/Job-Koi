import React from 'react';
import './Categorycard.css';

const Categorycard = ({category}) => {
    // console.log(category)
    const {logo,availability,category_name} =category;
    return (
        <div className="Categorycard">
            <div className="CategorycardImage ">
            <img src={logo} alt=""/>
            </div>
            <div className="categarory-items">
                <h3>
                    {category_name}
                </h3>
                <p>{availability}</p>
            </div>
            
        </div>
    );
};

export default Categorycard;
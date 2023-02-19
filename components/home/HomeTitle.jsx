import React from 'react';


const HomeTitle = ({title, description}) => (
    <div className='mx-auto pt-20 pb-10'>
        <div className='text-center'>
            <h2 className='font-bold font-abril text-4xl' id="title">{title}</h2>
            <span className='font-mulish'>{description}</span>
        </div>
        
    </div>
)

export default HomeTitle

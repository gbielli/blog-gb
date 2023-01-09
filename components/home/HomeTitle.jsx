import React from 'react';


const HomeTitle = (props) => (
    <div className='mx-auto pt-20 pb-10'>
        <div className='text-center'>
            <h2 className='font-bold font-abril text-4xl'>{props.title}</h2>
            <span className='font-mulish'>{props.description}</span>
        </div>
        
    </div>
)

export default HomeTitle

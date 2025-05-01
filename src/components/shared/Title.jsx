import React from 'react';

const Title = ({title}) => {
    return (
        <div>
            <p className='text-xl text-center md:text-3xl font-bold mb-4 text-amber-600 dark:text-white'>{title}</p>
        </div>
    );
};

export default Title;
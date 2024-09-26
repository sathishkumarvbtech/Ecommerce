import React from 'react';

const Newsletter = () => {

    const handleSubmitHandler = (event) => {
        event.preventDefault();
    }


    return (
        <div className='text-center my-5'>
            <p className='text-2xl font-medium text-gray-800  dark:text-white'>Subscribe now & get 20% offer</p>
            <p className='text-gray-500 my-4 dark:text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi earum ipsa nesciunt, dignissimos sint recusandae, voluptates placeat vel delectus officiis voluptatum blanditiis doloribus iusto a enim, repellendus alias ullam eaque.</p>
            <form onSubmit={handleSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-4'>
                <input id='input' className='w-full sm:flex-1 outline-none px-1 py-2' required type='email' name='email' placeholder='Enter your mail' />
                <button className='bg-primary text-white text-xs font-bold px-5 py-3 uppercase'>Subscribe</button>
            </form>
        </div>
    )
}

export default Newsletter
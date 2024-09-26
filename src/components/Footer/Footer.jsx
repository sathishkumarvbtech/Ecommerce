import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <>
            <div className='flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 mt-10 container'>
                <div>
                    <img src={Logo} className='w-40 mb-4' />
                    <p className='w-full md:w-2/3 text-gray-600 dark:text-white mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis, temporibus consequatur, voluptatem, quas porro quod nihil fugiat laboriosam a quibusdam atque delectus voluptas praesentium eveniet optio quia! Quia, id.</p>
                </div>
                <div>
                    <p className='text-xl font-medium uppercase mb-4'>Company</p>
                    <ul className='flex flex-col gap-1'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/collection">Collection</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className='max-sm:mb-4'>
                    <p>Get in Touch</p>
                    <p>+91 XXXXX YYYYY</p>
                    <p>AZ@gmail.com</p>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-4 text-center text-gray-600 dark:text-gray-300'>Copyright {date} @AZ.com &ndash; All Rights Reseverd</p>
            </div>
        </>
    )
}

export default Footer
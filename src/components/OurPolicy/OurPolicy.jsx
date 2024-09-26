import React from 'react';
import { RiCustomerService2Fill, RiExchangeFundsFill } from "react-icons/ri";
import { SiTicktick } from "react-icons/si";

const OurPolicy = () => {
    return (
        <div className='container flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-4'>
            <div>
                <RiExchangeFundsFill className='m-auto mb-5' size={48} color='#fea928' />
                <p className='font-semibold mb-2'>Easy to Exchange</p>
                <p>We Offer hassle fre exchange policy</p>
            </div>
            <div className='text-center'>
                <SiTicktick className='m-auto mb-5' size={48} color='#fea928' />
                <p className='font-semibold mb-2'>7 Days Return Policy</p>
                <p>We provide 7 days return policy</p>
            </div>
            <div className='text-center'>
                <RiCustomerService2Fill className='m-auto mb-5' size={48} color='#fea928' />
                <p className='font-semibold mb-2'>Best Customer Support</p>
                <p>We provide support 24/7 customer support</p>
            </div>
        </div>
    )
}
export default OurPolicy
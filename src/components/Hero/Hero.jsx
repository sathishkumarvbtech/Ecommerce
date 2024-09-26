import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sliders } from '../../Detail';
const Hero = () => {
    const [silderCount, setSliderCount] = useState(0);


    useEffect(() => {
        const Timer = setTimeout(() => {
            if (silderCount === 2) {
                setSliderCount(0)
            }
            else {
                setSliderCount(silderCount + 1)
            }
        }, 5000);

        return () => clearTimeout(Timer);
    }, [silderCount])

    return (
        <div className='relative  overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white'>
            <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-[56%] right-0 rounded-3xl rotate-45 -z-9'>  </div>
            <div className='container pb-8 sm:pb-0 w-full h-full relative'>
                {Sliders.map((slider, index) => (
                    <div key={index} className={`absolute grid grid-cols-1 sm:grid-cols-2 w-full h-full -top-[250px] sm:-top-[180px]  transition-transform duration-700 transform ${index === silderCount ? "translate-x-0" : "-translate-x-[200%]"}`}>
                        <div className='flex items-center justify-center flex-col order-2 sm:text-left sm:order-1 relative z-10'>
                            <h1 className='max-sm:text-2xl max-sm:mb-4 text-5xl font-bold mb-6 font-Poppins'>{slider.title}</h1>
                            <p className='text-lg font-Inter'>{slider.description}</p>
                            <Link to='/collection'> <button className='bg-primary/85 text-white px-4 py-[10px] rounded font-bold m-4 w-[150px] min-w-[70px] hover:bg-primary transition-all duration-300'>{slider.btnTxt}</button></Link>
                        </div>
                        <div className='order-1 sm:order-2'>
                            <div className='relative z-10'>
                                <img className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450pxx] sm:scale-125 object-contain mx-auto' src={slider.img} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero
import React from 'react'
import Hero from '../components/Hero/Hero'
import Newsletter from '../components/OurPolicy/Newsletter'
import OurPolicy from '../components/OurPolicy/OurPolicy'
import BestSeller from '../components/shop/BestSeller'
import LatestCollection from '../components/shop/LatestCollection'


const Home = () => {

    return (
        <>

            <Hero />
            <div className='container'>
                <LatestCollection />
                <BestSeller />
                <OurPolicy />
                <Newsletter />
            </div>
        </>
    )
}

export default Home
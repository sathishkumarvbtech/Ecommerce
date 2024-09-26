import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProduct, setLatestProduct] = useState([]);

    useEffect(() => {
        setLatestProduct(products.slice(0, 10));
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center py-8'>
                <Title text1={'Latest'} text2={'Collection'} />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-6'>
                {latestProduct.map((item, index) => (
                    <ProductItem key={index} id={item.id} imgs={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    )
}

export default LatestCollection
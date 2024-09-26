import React, { useContext, useEffect, useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { ShopContext } from '../components/context/ShopContext';
import ProductItem from '../components/shop/ProductItem';
import Title from '../components/shop/Title';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relavent');

    useEffect(() => {
        applyFilter()
    }, [category, subCategory, search, showSearch])

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value));
        }
        else {
            setCategory(prev => [...prev, e.target.value])
        }
    }

    useEffect(() => {
        sortProduct()
    }, [sortType])

    const sortProduct = () => {
        let fcopy = filterProducts.slice();
        switch (sortType) {
            case 'low-high':
                setFilterProducts(fcopy.sort((a, b) => (a.price - b.price)));
                break;
            case 'high-low':
                setFilterProducts(fcopy.sort((a, b) => (b.price - a.price)));
                break;
            default:
                applyFilter();
                break;
        }
    }

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value));
        }
        else {
            setSubCategory(prev => [...prev, e.target.value])
        }
    }

    const applyFilter = () => {
        let productsCopy = products.slice();

        if (showSearch && search) {
            productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        }

        if (category.length > 0) {
            productsCopy = productsCopy.filter((item) => category.includes(item.category))

        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory))
        }
        setFilterProducts(productsCopy)
    }

    return (
        <div className='flex flex-col sm:flex-row sm:gap-10 pt-10 border-t container dark:text-white'>
            {/* Filter section */}
            <div className='min-w-60'>
                <p className='my-4 text-xl flex items-center cursor-pointer gap-2 uppercase font-medium' onClick={() => setShowFilter(!showFilter)}>Filters
                    <IoMdArrowDropdown size={25} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
                </p>
                {/* Category section */}
                <div className={`border border-grey-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium uppercase'>Categories</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-800 dark:text-white'>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' onChange={toggleCategory} value={'Men'} />Men
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' onChange={toggleCategory} value={'Women'} />Women
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' onChange={toggleCategory} value={'Kids'} />Kids
                        </p>
                    </div>
                </div>
                {/* Subcategory */}
                <div className={`border border-grey-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium uppercase'>Type</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-800 dark:text-white'>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' onChange={toggleSubCategory} value={'Topwear'} />Topwear
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' onChange={toggleSubCategory} value={'Bottomwear'} />Bottomwear
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' onChange={toggleSubCategory} value={'Winterwear'} />Winterwear
                        </p>
                    </div>
                </div>
            </div>
            {/* Collection details */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'All'} text2={'Collection'} />
                    {/* Product prize wise sort option */}
                    <select className='border-2 border-gray-300 text-sm px-2' onChange={(e) => setSortType(e.target.value)}>
                        <option value="relavent">Sort by: Realavant</option>
                        <option value="low-high">Sort by: Low-High</option>
                        <option value="high-low">Sort by: High-Low</option>
                    </select>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                        filterProducts.map((item, index) => (
                            <ProductItem key={index} id={item.id} name={item.name} price={item.price} imgs={item.image} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Collection
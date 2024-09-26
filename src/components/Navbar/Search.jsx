import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { ShopContext } from '../context/ShopContext';

const Search = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }, [location])

    return showSearch && visible ? (
        <div className='border-t border-b text-center bg-primary/40'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 my-5 rounded-full w-3/4 sm:w-1/2'>
                <input className='flex-1 outline-none bg-inherit text-sm' placeholder='Serach' type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
                <img className='w-4' src={assets.search_icon} />
            </div>
            <img onClick={() => setShowSearch(false)} className='inline w-4 cursor-pointer' src={assets.cross_icon} />
        </div>
    ) : null
}

export default Search
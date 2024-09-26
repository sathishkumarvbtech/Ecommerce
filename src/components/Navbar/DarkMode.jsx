import React, { useEffect, useState } from 'react';
import DarkButton from '../../assets/dark.png';
import LightButton from '../../assets/light.png';

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem('theme') : 'light');

    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark")
            localStorage.setItem("theme", "dark");
        }
        else {
            element.classList.remove("dark")
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <div className='relative flex bg-white rounded-full w-14'>
            <img src={LightButton} onClick={() => setTheme(theme === "light" ? "dark" : "light")} alt='Light' className={`cursor-pointer w-8 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 right-0 absolute ${theme === "dark" ? "opacity-0" : "opacity-100"}`} />
            <img src={DarkButton} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} alt='Moon' className={`cursor-pointer w-8 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === "light" ? "opacity-0" : "opacity-100"}`} />
        </div >
    )
}

export default DarkMode
import React, { useEffect, useState } from 'react';
import Logo from '../../public/images/logo.jpg';

function Navbar() {
    // Dark and light mode
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const element = document.documentElement;

    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            document.body.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    
    
        let Links=[
            {name:"Features",link:"/"},
            {name:"How It Works",link:"/"},
            {name:"Roadmap",link:"/"},
            {name:"API",link:"/"},
            {name:"Price",link:"/"},
            {name:"Models",link:"/"},
        ]
        
        const [open,setOpen]=useState(false)

    return (
        <>
        <div className='shadow-md w-full relative z-0 top-0 left-0 text-white'>
            <div className='md:flex bg-transparent items-center justify-between py-4 md:px-10 px-7 mx-10'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-white'> 
                    <span className='text-3xl text-white mr-1 pt-2 '>
                    <img className='h-7 w-7 rounded-2xl m-1' src={Logo} alt="" />
                    </span>
                    BookAi
                </div>
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close-outline':'menu-outline'}></ion-icon>
                </div>
                <ul className={`text-white md:flex md:justify-center md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
                    {
                        Links.map((Link)=>(
                            <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href="{Links.link}" className='text-white hover:text-gray-400 duration-500'>{Link.name}</a>
                            </li>
                        ))
                    }
                    <button className='btn text-white px-5 py-2 rounded-sm m-5'>
                        Login
                    </button>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Navbar;


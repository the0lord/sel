import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import { ChartBarSquareIcon, HomeIcon, DocumentTextIcon, Bars3Icon, ArchiveBoxArrowDownIcon } from "@heroicons/react/24/solid";

import { UserIcon } from "@heroicons/react/24/outline";
import sideBarBtn from 'assets/images/sideBarButton.svg';
import hamburgerIcon from "assets/images/hamburger.png";


const Sidebar = ({ children }) => {
    const [open, setOpen] = useState(window.innerWidth > 850);
    const [buttonVisible, setButtonVisible] = useState(false);
    const location = useLocation();

    const handleResize = () => {
        const isLargeScreen = window.innerWidth > 850;
        setOpen(isLargeScreen);
        setButtonVisible(!isLargeScreen);
    };

    const handleClick = () => {
        setOpen(true);
        setButtonVisible(true);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const menuItems = [
        {
            icon: <HomeIcon className='h-5 w-5 font-bold' />,
            label: 'Главная',
            link: '/'
        },
        {
            icon: <ArchiveBoxArrowDownIcon className='h-5 w-5 font-bold' />,
            label: 'Продукты',
            link: '/products'
        }
        // {
        //     icon: <ChartBarSquareIcon className='h-5 w-5 font-bold' />,
        //     label: 'Санкции',
        //     link: '/sanctions'
        // },
        // {
        //     icon: <UserIcon className='h-5 w-5 font-bold' />,
        //     label: 'Белый список',
        //     link: '/white-list'
        // },
        // {
        //     icon: <DocumentTextIcon className='h-5 w-5 font-bold' />,
        //     label: 'Найденные',
        //     link: '/login'
        // },
        // {
        //     icon: <DocumentTextIcon className='h-5 w-5 font-bold' />,
        //     label: 'Логги',
        //     link: '/loggi'
        // },
    ];

    return (
        <div className="flex justify-center relative max-w-full">
            {buttonVisible && (
                <div className='h-[100vh]'>
                    <button
                        className=" text-black focus:outline-none cursor-pointer  w-12 h-12  max-md:inline"
                        onClick={handleClick}
                    >
                        <img src={hamburgerIcon} alt="menu" />
                    </button>
                </div>
            )}
            <div className={`${buttonVisible && "fixed top-0 left-0"} ${open && `h-[100vh]  w-50 z-50 bg-white`} h-[100vh] ${buttonVisible && !open && "hidden"} border-r-2   duration-300`}>
                <div className={`${open ? `${buttonVisible ? "w-50" : "w-80"}` : "w-20"} `}>
                    <div className="mb-2 p-4 flex justify-between items-center">
                        {open && (<h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900 mb-0">Menu</h5>)}
                        <div className={`cursor-pointer  ${open ? "rotate-180" : "rotate-0"}`} onClick={() => setOpen(!open)}>
                            <img className="" src={sideBarBtn} alt='img' />
                        </div>
                    </div>
                    <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
                        {menuItems.map((item, index) => (
                            <SidebarItem key={index} item={item} location={location.pathname} open={open} />
                        ))}
                    </nav>
                </div>
            </div>
            {buttonVisible && open && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
                    onClick={() => setOpen(false)} // Закрыть боковое меню при клике на темный фон
                ></div>
            )}
            <div className="w-full">
                {children}
            </div>
        </div>
    );
};

export default Sidebar;

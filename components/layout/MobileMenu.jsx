import React, { useState } from 'react';
import Link from 'next/link';

const MobileMenu = ({ hiddenClass, handleRemove }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: ''
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false
            });
        } else {
            setIsActive({
                status: true,
                key
            });
        }
    };
    return (
        <>
            <div className={`${hiddenClass} navbar-menu relative z-50 transition duration-300`}>
                <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25" onClick={handleRemove}></div>
                <nav className="animate-mobile-menu-move fixed left-0 top-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black border-r overflow-y-auto transition duration-200">
                    <div className="flex items-center mb-8">
                        <Link href="#">
                            <a className="mr-auto text-3xl font-semibold leading-none">
                                <img className="h-10" src="/assets/imgs/logos/headerLogo.png" alt="Monst" />
                            </a>
                        </Link>
                        <button className="navbar-close" onClick={handleRemove}>
                            <svg
                                className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blue-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewbox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul className="mobile-menu">
                            <li
                                className={
                                    isActive.key == 1
                                        ? 'mb-1 menu-item-has-children rounded-xl active'
                                        : 'mb-1 menu-item-has-children rounded-xl'
                                }
                                onClick={() => handleToggle(1)}
                            >
                                <Link href="/">
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li className="mb-1 rounded-xl">
                                <Link href="/about">
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">
                                        About Us
                                    </a>
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/services">
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                                        Services
                                    </a>
                                </Link>
                            </li>

                            <li className="mb-1">
                                <Link href="/contact">
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                                        Contact
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <p className="my-4 text-xs text-blueGray-400">
                            <span>Get in Touch</span>{' '}
                            <span className="text-blue-500 hover:text-blue-500 underline">Multitrack@naver.com</span>
                        </p>
                        <a
                            className="inline-block px-1 text-blue-500"
                            href="https://www.youtube.com/channel/UChD-nEluDzbqceBnq4zgHQA/videos"
                        >
                            <img
                                width={30}
                                src="/assets/imgs/logos/youtubelogo.png"
                                className="text-blue-500"
                                alt="youtube"
                            />
                        </a>
                        {/* <a className="inline-block px-1" href="https://facebook.com">
                            <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                        </a>
                        <a className="inline-block px-1" href="https://twitter.com">
                            <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
                        </a>
                        <a className="inline-block px-1" href="https://www.instagram.com">
                            <img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
                        </a> */}
                    </div>
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;

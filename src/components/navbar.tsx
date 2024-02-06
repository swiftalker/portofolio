"use client";

import { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import NavStyles from '@/css/Navbar.module.css'

function classNames(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    const pathname = usePathname()
    const navigation = [
      { name: 'Home', href: '/', current: pathname === '/' },
      { name: 'Blog', href: '/blog', current: pathname.startsWith('/blog') },
      { name: 'Projects', href: '/projects', current: pathname === '/projects' },
      { name: 'Skillsets', href: '/skillsets', current: pathname === '/skillsets' },
      { name: 'Reach Me!', href: '/reach-me', current: pathname === '/reach-me' },
    ]

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    const onScroll = () => {
        let scrollpos = window.scrollY;
        if (scrollpos > 10) {
            document.getElementById("nav").classList.add("bg-primary-500", "border-b-4", "border-blue-900");
        } else {
            document.getElementById("nav").classList.remove("bg-primary-500", "border-b-4", "border-blue-900");
        }

        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollPosition < 0) {
            return;
        }

        if (Math.abs(currentScrollPosition - lastScrollPosition) < 10) {
            return;
        }

        const newShowNavbar = currentScrollPosition < lastScrollPosition;
        setShowNavbar(newShowNavbar);
        setLastScrollPosition(currentScrollPosition);

        const navElement = document.getElementById("nav");
        if (navElement) {
            if (!newShowNavbar) {
                navElement.classList.add(NavStyles.nav_auto_hide);
            } else {
                navElement.classList.remove(NavStyles.nav_auto_hide);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [lastScrollPosition, showNavbar]);
    
    return (
        <>
            <Disclosure as="nav" id="nav" className={`${NavStyles.nav} absolute w-full sticky top-0 left-0 w-full`}>
            {({ open }) => (
                <>
                    <div className="container sticky max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 text-base-content max-h-full">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center items-stretch justify-between">
                                <Link href="/" className="flex flex-shrink-0 items-start">
                                    <Image 
                                        src="/static/images/logo.png"
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                        alt="Portofolio"
                                        className="h-12 w-auto rounded-full"
                                    />
                                </Link>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4 my-2 ">
                                        {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                            item.current ? 'bg-primary-900 text-white' : 'text-gray-300 hover:bg-primary-700 hover:text-white',
                                            'rounded-md p-3 text-sm font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">                
                                <div className="relative inset-y-0 left-0 ml-3 flex items-center sm:hidden lg:order-first">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                    </Disclosure.Button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="bg-primary-500 space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                                item.current ? 'bg-primary-900 text-white' : 'text-gray-300 hover:bg-primary-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                            >
                            {item.name}
                            </Disclosure.Button>
                        ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        </>
    )
}
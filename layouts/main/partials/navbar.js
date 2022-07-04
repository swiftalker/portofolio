import NavStyles from '../../../styles/Nav.module.css'
import React, { Fragment, Component } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
    { name: 'Dashboard', href: '#', current: false },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Skills', href: '#skills', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.showNavbar = true;
        this.lastScrollPosition = 0;
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    onScroll(event) {
        let scrollpos = window.scrollY;
        if (scrollpos > 10) {
            document.getElementById("nav").classList.add("bg-blue-400");
            document.getElementById("nav").classList.add("border-t-4");
            document.getElementById("nav").classList.add("border-green-200");
        } else {
            document.getElementById("nav").classList.remove("bg-blue-400");
            document.getElementById("nav").classList.remove("border-t-4");
            document.getElementById("nav").classList.remove("border-green-200");
        }

        const currentScrollPosition =
            window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollPosition < 0) {
            return;
        }
        // Stop executing this function if the difference between
        // current scroll position and last scroll position is less than some offset
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 10) {
            return;
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition;
        this.lastScrollPosition = currentScrollPosition;

        if (!this.showNavbar) {
            document.getElementById("nav").classList.add(NavStyles.nav_auto_hide);
        } else {
            document.getElementById("nav").classList.remove(NavStyles.nav_auto_hide);
        }
    }

    render() {
        return (
            <Disclosure as="nav" id='nav' className={`${NavStyles.nav} absolute w-full sticky top-0 left-0 w-full`}>
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                    <div className="flex-shrink-0 flex items-center">
                                        <svg className="h-8 w-auto" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill="#D80027"
                                                d="M120.89 512l-21.336-14.22L78.221 512v-71.11h42.669z"
                                            />
                                            <path fill="#FFDA44" d="M405.33 166.07h71.111v303.26H405.33z" />
                                            <path fill="#FF5023" d="M405.33 166.07h71.111v209.39H405.33z" />
                                            <path fill="#D80027" d="M405.33 166.07h71.111V281.6H405.33z" />
                                            <path fill="#6C0014" d="M405.33 93.867h71.111v93.867H405.33z" />
                                            <path d="M405.33 0h71.111v93.867H405.33z" />
                                            <path fill="#ACABB1" d="M78.222 0h369.78v469.33H78.222z" />
                                            <path fill="#818085" d="M63.999 0h199.11v469.33H63.999z" />
                                            <path d="M35.556 0h42.667v469.33H35.556z" />
                                            <g fill="#fff">
                                                <path d="M130.62 220.03v-63.495h27.365c3.1 0 5.961.641 8.586 1.923 2.623 1.283 4.874 2.951 6.751 5.008s3.354 4.415 4.426 7.066c1.074 2.654 1.61 5.321 1.61 8.004a22.75 22.75 0 01-1.519 8.183c-1.015 2.652-2.431 5.008-4.248 7.066-1.819 2.057-4.023 3.698-6.618 4.918-2.593 1.222-5.44 1.833-8.54 1.833h-10.374v19.496H130.62v-.002zm17.439-34.698h9.212c1.074 0 2.071-.492 2.995-1.476.923-.983 1.387-2.758 1.387-5.321 0-2.623-.536-4.412-1.61-5.366s-2.146-1.432-3.22-1.432h-8.764v13.595zM216.29 220.56c-4.828 0-9.212-.924-13.147-2.772-3.935-1.847-7.305-4.277-10.105-7.289-2.803-3.009-4.979-6.453-6.528-10.33a31.944 31.944 0 01-2.325-11.984c0-4.173.804-8.198 2.414-12.072 1.61-3.876 3.86-7.289 6.753-10.24 2.89-2.951 6.318-5.305 10.283-7.066 3.965-1.758 8.303-2.637 13.012-2.637 4.828 0 9.212.924 13.146 2.772 3.937 1.849 7.303 4.292 10.106 7.333a32.935 32.935 0 016.484 10.374c1.519 3.877 2.281 7.841 2.281 11.894 0 4.174-.805 8.182-2.415 12.028s-3.846 7.245-6.707 10.196c-2.862 2.951-6.275 5.321-10.24 7.11-3.967 1.789-8.303 2.683-13.012 2.683zm-14.399-32.195c0 2.146.297 4.218.895 6.215.594 1.998 1.489 3.77 2.682 5.321 1.193 1.552 2.697 2.803 4.517 3.758 1.818.954 3.979 1.431 6.484 1.431s4.681-.492 6.529-1.476c1.847-.983 3.352-2.264 4.517-3.844 1.162-1.579 2.025-3.383 2.593-5.412.565-2.027.85-4.083.85-6.171 0-2.146-.3-4.217-.895-6.215-.597-1.997-1.508-3.756-2.728-5.276-1.223-1.52-2.743-2.742-4.561-3.666-1.819-.923-3.949-1.387-6.394-1.387-2.505 0-4.665.478-6.484 1.431-1.819.954-3.325 2.223-4.517 3.802-1.193 1.58-2.072 3.369-2.637 5.365a22.237 22.237 0 00-.851 6.124zM257.43 220.03v-63.495h29.154c3.099 0 5.961.641 8.585 1.923 2.624 1.283 4.875 2.951 6.753 5.008 1.877 2.057 3.352 4.415 4.426 7.066 1.074 2.654 1.61 5.321 1.61 8.004 0 3.698-.804 7.141-2.414 10.33-1.61 3.19-3.846 5.798-6.709 7.825l13.416 23.342h-19.675l-11.18-19.497h-6.528v19.496l-17.438-.002zm17.439-34.698h10.999c1.072 0 2.071-.596 2.995-1.789.923-1.192 1.387-2.863 1.387-5.008 0-2.206-.536-3.89-1.61-5.053-1.074-1.162-2.146-1.745-3.22-1.745h-10.553v13.595h.002zM367.7 171.74h-18.243v48.293h-17.439V171.74h-18.334v-15.202H367.7v15.202zM130.62 298.4v-63.495h43.553v15.202H148.06v10.553h21.285v14.131H148.06v23.61h-17.44v-.001zM210.12 298.94c-4.83 0-9.213-.923-13.147-2.772-3.935-1.847-7.305-4.277-10.105-7.289-2.803-3.009-4.979-6.453-6.528-10.33a31.944 31.944 0 01-2.325-11.984c0-4.173.804-8.198 2.413-12.072 1.61-3.876 3.86-7.289 6.753-10.24 2.89-2.951 6.318-5.305 10.283-7.066 3.965-1.758 8.303-2.638 13.012-2.638 4.83 0 9.212.924 13.146 2.772 3.937 1.849 7.303 4.292 10.106 7.333a32.935 32.935 0 016.484 10.374c1.519 3.876 2.281 7.841 2.281 11.894 0 4.174-.805 8.182-2.415 12.028s-3.846 7.245-6.707 10.196-6.275 5.321-10.24 7.11c-3.964 1.79-8.302 2.684-13.011 2.684zm-14.398-32.194c0 2.146.297 4.218.895 6.215.594 1.998 1.489 3.77 2.682 5.321 1.193 1.552 2.697 2.803 4.517 3.758 1.818.954 3.979 1.431 6.484 1.431s4.681-.492 6.529-1.476c1.847-.983 3.352-2.264 4.517-3.844 1.162-1.579 2.025-3.383 2.593-5.412.565-2.027.85-4.083.85-6.171 0-2.146-.3-4.217-.895-6.215-.597-1.997-1.506-3.756-2.728-5.276-1.223-1.52-2.743-2.742-4.561-3.667-1.819-.923-3.95-1.387-6.394-1.387-2.505 0-4.665.478-6.484 1.431-1.819.954-3.325 2.223-4.517 3.802-1.193 1.58-2.072 3.369-2.638 5.365a22.232 22.232 0 00-.85 6.125zM251.26 298.4v-63.495h17.439v48.293h28.796V298.4H251.26zM304.92 298.4v-63.495h17.439V298.4H304.92zM363.23 298.94c-4.828 0-9.212-.923-13.147-2.772-3.935-1.847-7.305-4.277-10.105-7.289-2.803-3.009-4.979-6.453-6.528-10.33a31.944 31.944 0 01-2.325-11.984c0-4.173.804-8.198 2.414-12.072 1.61-3.876 3.86-7.289 6.753-10.24 2.89-2.951 6.318-5.305 10.283-7.066 3.965-1.758 8.303-2.638 13.012-2.638 4.83 0 9.212.924 13.146 2.772 3.937 1.849 7.303 4.292 10.106 7.333a32.935 32.935 0 016.484 10.374c1.519 3.876 2.28 7.841 2.28 11.894 0 4.174-.805 8.182-2.415 12.028s-3.846 7.245-6.707 10.196c-2.862 2.951-6.275 5.321-10.24 7.11-3.965 1.79-8.302 2.684-13.011 2.684zm-14.398-32.194c0 2.146.297 4.218.895 6.215.595 1.998 1.489 3.77 2.682 5.321 1.193 1.552 2.697 2.803 4.517 3.758 1.818.954 3.979 1.431 6.484 1.431s4.681-.492 6.529-1.476c1.847-.983 3.352-2.264 4.517-3.844 1.162-1.579 2.025-3.383 2.593-5.412.565-2.027.85-4.083.85-6.171 0-2.146-.3-4.217-.895-6.215-.597-1.997-1.506-3.756-2.728-5.276-1.223-1.52-2.743-2.742-4.561-3.667-1.819-.923-3.95-1.387-6.394-1.387-2.505 0-4.665.478-6.484 1.431-1.819.954-3.325 2.223-4.517 3.802-1.193 1.58-2.072 3.369-2.637 5.365a22.233 22.233 0 00-.851 6.125z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="hidden sm:block">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="bg-gray-100 px-2 pt-2">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-stone-900 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        )
    }
}

import React, { ReactNode } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import MainSkills from '@/store/main-skills'
import PassionateSkills from '@/store/passionate-skills'

export default function Skillset() {
    
    // Fungsi untuk mengacak array
    // const shuffleArray = (array) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [array[i], array[j]] = [array[j], array[i]];
    //     }
    // };
    
    // // Mengacak array proyek
    // shuffleArray(MainSkills);

    return (
        <div className="bg-white pattern-lines-in-motion-primary-300/50 pattern-lines-in-motion-scale-[0.5]">
            <div className="container sticky max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 max-h-full">
                {/* <div className="relative mt-10 md:mt-0">
                    <ul className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <li className="">
                        <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                            <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img
                                src="/img/category-thumbnails/application-ui/stacked.png"
                                alt=""
                                className="absolute inset-0 h-full w-full"
                            />
                            </div>
                            <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <a href="/components/application-ui/application-shells/stacked">
                                <span className="absolute -inset-2.5 z-10" />
                                <span className="relative">Stacked Layouts</span>
                            </a>
                            </h4>
                            <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                            9 components
                            </p>
                        </div>
                        </li>
                        <li className="">
                        <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                            <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img
                                src="/img/category-thumbnails/application-ui/sidebar.png"
                                alt=""
                                className="absolute inset-0 h-full w-full"
                            />
                            </div>
                            <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <a href="/components/application-ui/application-shells/sidebar">
                                <span className="absolute -inset-2.5 z-10" />
                                <span className="relative">Sidebar Layouts</span>
                            </a>
                            </h4>
                            <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                            8 components
                            </p>
                        </div>
                        </li>
                        <li className="">
                        <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                            <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img
                                src="/img/category-thumbnails/application-ui/page-headings.png"
                                alt=""
                                className="absolute inset-0 h-full w-full"
                            />
                            </div>
                            <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <a href="/components/application-ui/headings/page-headings">
                                <span className="absolute -inset-2.5 z-10" />
                                <span className="relative">Page Headings</span>
                            </a>
                            </h4>
                            <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                            13 components
                            </p>
                        </div>
                        </li>
                        <li className="">
                        <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                            <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img
                                src="/img/category-thumbnails/application-ui/calendars.png"
                                alt=""
                                className="absolute inset-0 h-full w-full"
                            />
                            </div>
                            <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <a href="/components/application-ui/data-display/calendars">
                                <span className="absolute -inset-2.5 z-10" />
                                <span className="relative">Calendars</span>
                            </a>
                            </h4>
                            <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                            8 components
                            </p>
                        </div>
                        </li>
                        <li className="">
                        <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                            <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img
                                src="/img/category-thumbnails/application-ui/tables.png"
                                alt=""
                                className="absolute inset-0 h-full w-full"
                            />
                            </div>
                            <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <a href="/components/application-ui/lists/tables">
                                <span className="absolute -inset-2.5 z-10" />
                                <span className="relative">Tables</span>
                            </a>
                            </h4>
                            <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                            20 components
                            </p>
                        </div>
                        </li>
                        <li className="">
                        <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                            <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img
                                src="/img/category-thumbnails/application-ui/form-layouts.png"
                                alt=""
                                className="absolute inset-0 h-full w-full"
                            />
                            </div>
                            <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <a href="/components/application-ui/forms/form-layouts">
                                <span className="absolute -inset-2.5 z-10" />
                                <span className="relative">Form Layouts</span>
                            </a>
                            </h4>
                            <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                            5 components
                            </p>
                        </div>
                        </li>
                        <li className="hidden lg:block">
                        <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                            <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img
                                src="/img/category-thumbnails/application-ui/input-groups.png"
                                alt=""
                                className="absolute inset-0 h-full w-full"
                            />
                            </div>
                            <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <a href="/components/application-ui/forms/input-groups">
                                <span className="absolute -inset-2.5 z-10" />
                                <span className="relative">Input Groups</span>
                            </a>
                            </h4>
                            <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                            21 components
                            </p>
                        </div>
                        </li>
                        <li className="hidden lg:block">
                        <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                            <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img
                                src="/img/category-thumbnails/application-ui/sign-in-forms.png"
                                alt=""
                                className="absolute inset-0 h-full w-full"
                            />
                            </div>
                            <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <a href="/components/application-ui/forms/sign-in-forms">
                                <span className="absolute -inset-2.5 z-10" />
                                <span className="relative">Sign-in and Registration</span>
                            </a>
                            </h4>
                            <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                            5 components
                            </p>
                        </div>
                        </li>
                        <li className="hidden lg:block">
                        <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                            <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img
                                src="/img/category-thumbnails/application-ui/pagination.png"
                                alt=""
                                className="absolute inset-0 h-full w-full"
                            />
                            </div>
                            <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <a href="/components/application-ui/navigation/pagination">
                                <span className="absolute -inset-2.5 z-10" />
                                <span className="relative">Pagination</span>
                            </a>
                            </h4>
                            <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                            3 components
                            </p>
                        </div>
                        </li>
                        <li className="hidden xl:block">
                        <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                            <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img
                                src="/img/category-thumbnails/application-ui/steps.png"
                                alt=""
                                className="absolute inset-0 h-full w-full"
                            />
                            </div>
                            <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <a href="/components/application-ui/navigation/steps">
                                <span className="absolute -inset-2.5 z-10" />
                                <span className="relative">Steps</span>
                            </a>
                            </h4>
                            <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                            8 components
                            </p>
                        </div>
                        </li>
                        <li className="hidden xl:block">
                        <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                            <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img
                                src="/img/category-thumbnails/application-ui/command-palettes.png"
                                alt=""
                                className="absolute inset-0 h-full w-full"
                            />
                            </div>
                            <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <a href="/components/application-ui/navigation/command-palettes">
                                <span className="absolute -inset-2.5 z-10" />
                                <span className="relative">Command Palettes</span>
                            </a>
                            </h4>
                            <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                            9 components
                            </p>
                        </div>
                        </li>
                    </ul>
                    <div className="pointer-events-none absolute -inset-x-2.5 -bottom-2.5 h-[16.6%] bg-gradient-to-t from-white to-white/25 sm:h-[33.3%]" />
                </div> */}

                <div className="mx-auto lg:max-w-full max-w-2xl lg:mx-0">
                    <div className="flex lg:justify-between w-full">
                        <div className="flex justify-start w-full">
                            <span className="relative whitespace-nowrap text-primary-600 text-4xl font-bold capitalize">
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70" fill="none" viewBox="0 0 146 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 22.74c2.25-4.119 8.369-19.585 12.178-8.863.4 1.123 1.395 7.221 2.595 7.373 1.072.134 3.217-13.468 6.37-15.26 4.795-2.725 6.33 4.161 7.957 7.05 4.964 8.81 3.184 2.902 5.76-3.137 2.478-5.814 5.633 2.424 7.029 4.51 3.164 4.727 3.548-4.955 6.274-7.809 2.67-2.793 5.23-1.336 6.797 1.514 3.325 6.05 3.956 7.076 6.315-.323 2.95-9.249 5.732 2.443 8.042 5.622 3.408 4.69 3.621-11.54 7.49-10.434 1.184.339 6.74 14.572 8.402 10.987 3.333-7.19 2.573-4.217 6.14 2.172 4.212 7.541 6.522-9.24 8.76-10.75 2.25-1.516 3.705 13.63 8.149 3.268 5.129-11.958 3.805-5.573 9.003 1.545 4.444 6.086 4.763-16.032 9.436-7.012 5.178 9.994 7.214 6.594 16.578 8.24"></path></svg>
                            <span className="relative">Skillsets</span>
                            </span>
                        </div>
                    </div>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        What do I often use and my main programming language, what is my passion and favorite.
                    </p>
                </div>
                <div className="relative mt-10 md:mt-0">
                    <div className="flex flex-col my-2">
                        <h3 className="text-sm font-semibold text-gray-500 sm:mt-8 sm:pt-8 mt-5">Main Tools, Language & Framework</h3>
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                            {MainSkills.slice(0,8).map((skill, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="group relative p-3 text-center before:absolute before:-inset-2.5 before:rounded-[20px] before:opacity-0 hover:before:opacity-100">
                                        <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-50">
                                            <Image
                                                src={skill.image}
                                                alt={skill.title}
                                                width="0"
                                                height="0"
                                                sizes="100vw"
                                                className="absolute inset-0 w-full h-full"
                                                priority={true}
                                            />
                                        </div>

                                        <div className="py-2">
                                            <div className="text-xl font-bold text-gray-500 group-hover:text-gray-600">
                                                {skill.title}
                                            </div>

                                            <div className="text-md text-gray-400 group-hover:text-gray-500">
                                                <span className="font-bold text-gray-800 group-hover:text-gray-900">{skill.experience}</span> of
                                                experience
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="pointer-events-none absolute -inset-x-2.5 -bottom-2.5 h-[16.6%] bg-gradient-to-t from-white to-white/25 sm:h-[44.4%]" />

                        {/* <h3 className="text-sm font-semibold text-gray-500 sm:mt-8 sm:pt-8 mt-5">Passion Tools, Language & Framework</h3>
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                            {PassionateSkills.map((skill, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="group relative rounded-lg bg-primary-50 hover:bg-primary-200 p-3 hover:drop-shadow-2xl text-center">
                                        <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200">
                                            <Image
                                                src={skill.image}
                                                alt={skill.title}
                                                width="0"
                                                height="0"
                                                sizes="100vw"
                                                className="absolute inset-0 w-full h-full"
                                                priority={true}
                                            />
                                        </div>

                                        <div className="py-2">
                                            <div className="text-xl font-bold text-gray-500">
                                                {skill.title}
                                            </div>

                                            <div className="text-md text-gray-400">
                                                <span className="font-bold text-gray-800">{skill.experience}</span> of
                                                experience
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div> */}
                    </div>
                    <div className="pointer-events-none relative z-10 -mt-5 flex justify-center">
                        <Link
                            href="/skillsets" 
                            className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-primary-900 text-white hover:bg-primary-700 pointer-events-auto"
                        >
                            <span>
                            Show more...<span className="sr-only">, Skillsets</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
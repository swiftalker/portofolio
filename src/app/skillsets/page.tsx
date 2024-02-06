import React, { ReactNode } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import BlurImage from '@/components/skillsets/blur-image'
import type { Metadata } from "next";
import MainSkills from '@/store/main-skills'
import PassionateSkills from '@/store/passionate-skills'

const metadata: Metadata = {
    title: 'Portfolio - Skillsets',
}

export default function Skillsets() {
    return (
        <>
            <div className="bg-primary-700 pattern-architect-primary-300/50 pattern-architect-scale-[0.5]">  
                <div className="container sticky max-w-7xl mx-auto pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-h-full">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <span className="relative whitespace-nowrap text-gray-100 text-6xl font-bold capitalize">
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70" fill="none" viewBox="0 0 146 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 22.74c2.25-4.119 8.369-19.585 12.178-8.863.4 1.123 1.395 7.221 2.595 7.373 1.072.134 3.217-13.468 6.37-15.26 4.795-2.725 6.33 4.161 7.957 7.05 4.964 8.81 3.184 2.902 5.76-3.137 2.478-5.814 5.633 2.424 7.029 4.51 3.164 4.727 3.548-4.955 6.274-7.809 2.67-2.793 5.23-1.336 6.797 1.514 3.325 6.05 3.956 7.076 6.315-.323 2.95-9.249 5.732 2.443 8.042 5.622 3.408 4.69 3.621-11.54 7.49-10.434 1.184.339 6.74 14.572 8.402 10.987 3.333-7.19 2.573-4.217 6.14 2.172 4.212 7.541 6.522-9.24 8.76-10.75 2.25-1.516 3.705 13.63 8.149 3.268 5.129-11.958 3.805-5.573 9.003 1.545 4.444 6.086 4.763-16.032 9.436-7.012 5.178 9.994 7.214 6.594 16.578 8.24"></path></svg>
                            <span className="relative">Skillsets</span>
                        </span>
                        <p className="mt-2 text-lg leading-8 text-gray-300">
                            What do I often use and my main programming language, what is my passion and favorite.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="bg-white pattern-lines-in-motion-primary-300/50 pattern-lines-in-motion-scale-[0.5]">
                <div className="container sticky max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 max-h-full">
                    <div className="flex flex-col my-2">
                        <h3 className="text-sm font-semibold text-gray-500 sm:mt-8 sm:pt-8 mt-5">Main Tools, Language & Framework</h3>
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                            {MainSkills.map((skill, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="group relative rounded-lg bg-primary-50 hover:bg-primary-200 p-3 hover:drop-shadow-2xl text-center">
                                        <BlurImage image={skill.image} title={skill.title} />

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
                        </div>
                        <h3 className="text-sm font-semibold text-gray-500 sm:mt-8 sm:pt-8 mt-5">Passion Tools, Language & Framework</h3>
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                            {PassionateSkills.map((skill, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="group relative rounded-lg bg-primary-50 hover:bg-primary-200 p-3 hover:drop-shadow-2xl text-center">
                                        <BlurImage image={skill.image} title={skill.title} />

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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
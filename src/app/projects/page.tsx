import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlurImage from '@/components/skillsets/blur-image'
import Data from '@/store/projects';
import type { Metadata } from "next";

const metadata: Metadata = {
    title: 'Portfolio - Projects',
}

export default function Projects() {
    return (
        <>
            <div className="bg-primary-700 pattern-triangles-primary-300/50 pattern-triangles-scale-[0.5]">  
                <div className="container sticky max-w-7xl mx-auto pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-h-full">
                    
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <div>
                            <div className="absolute top-24 left-64 opacity-65">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-10 h-10" viewBox="0 0 88 79"><path stroke="currentColor" strokeDasharray="10.59 10.59" strokeWidth="0.875" d="M23.344 11.213c-2.38.749-4.458 1.422-6.304 2.146m0 0c-5.054 1.984-8.369 4.356-11.389 9.739C3.63 26.7 2.448 30.635 1.436 34.55-1.177 44.665 2.966 52.097 10 59.844c10.366 11.42 27.958 20.581 44.958 17.541 12.37-2.212 23.654-10.81 28.886-20.8 4.636-8.852 3.71-17.648 2.195-27.05-3.49-21.651-25.789-32.36-48.111-27.17-6.437 1.495-12.053 4.114-17.025 8.042-1.287 1.017-2.535 2.027-3.863 2.952zm0 0a26.576 26.576 0 01-2.507 1.562c-5.457 2.968-7.232 9.677-9.327 14.547"></path></svg>
                            </div>
                            <div className="absolute top-14 right-12 opacity-65">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-24 h-24" viewBox="0 0 83 37"><path fill="#9D9D9D" d="M80.399 4.8c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1 2.4-2.4 2.4zM69.399 4.8c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM58.3 4.8c-1.3 0-2.4-1.1-2.4-2.4C55.9 1.1 57 0 58.3 0c1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM47.199 4.8c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1 2.4-2.4 2.4zM36.199 4.8c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM25.1 4.8c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1 2.4-2.4 2.4zM14.1 4.8c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM80.399 16.2c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1 2.4-2.4 2.4zM69.399 16.2c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM58.3 16.2c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM47.199 16.2c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1 2.4-2.4 2.4zM36.199 16.2c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM25.1 16.2c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1 2.4-2.4 2.4zM14.1 16.2c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM80.399 27.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1 2.4-2.4 2.4zM69.399 27.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM58.3 27.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM47.199 27.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-1 2.4-2.4 2.4zM36.199 27.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM25.1 27.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-1 2.4-2.4 2.4zM14.1 27.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M68.7 13.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M68.7 13.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M57.6 13.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M57.6 13.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M46.6 13.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M46.6 13.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M35.5 13.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M35.5 13.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M24.5 13.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M24.5 13.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M13.4 13.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M13.4 13.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M2.4 13.1C1.1 13.1 0 12 0 10.7c0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M2.4 13.1C1.1 13.1 0 12 0 10.7c0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M68.7 24.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M68.7 24.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M57.6 24.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M57.6 24.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M46.6 24.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M46.6 24.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M35.5 24.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M35.5 24.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M24.5 24.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M24.5 24.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M13.4 24.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M13.4 24.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M2.4 24.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M2.4 24.6c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M68.7 36.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M68.7 36.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M57.6 36.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M57.6 36.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M46.6 36.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M46.6 36.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M35.5 36.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M35.5 36.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M24.5 36.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M24.5 36.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M13.4 36.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M13.4 36.1c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4.1 1.3-1 2.4-2.4 2.4z"></path><path fill="currentColor" d="M2.4 36.1C1.1 36.1 0 35 0 33.7c0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M2.4 36.1C1.1 36.1 0 35 0 33.7c0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"></path></svg>
                            </div>
                            <div className="absolute bottom-5 right-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-12 h-12" viewBox="0 0 145 100"><path fill="#9D9D9D" d="M144.8 12.5c-8.8 7.1-17.2 6.1-23.4 5.4-5.5-.6-8.1-.8-11.6 2s-3.9 5.4-4.5 10.9c-.7 6.1-1.6 14.5-10.4 21.6-8.8 7.1-17.2 6.1-23.4 5.4-5.5-.6-8.1-.8-11.6 2s-3.9 5.4-4.5 10.9c-.7 6.1-1.6 14.5-10.4 21.6-8.8 7.1-17.2 6.1-23.4 5.4-5.5-.6-8.1-.8-11.6 2L0 87.2c8.8-7.1 17.2-6.1 23.4-5.4 5.5.6 8.1.8 11.6-2s3.9-5.4 4.5-10.9c.7-6.1 1.6-14.5 10.4-21.6 8.8-7.1 17.2-6.1 23.4-5.4 5.5.6 8.1.8 11.6-2s3.9-5.4 4.5-10.9c.7-6.1 1.6-14.5 10.4-21.6C108.6.3 117 1.3 123.2 2c5.5.6 8.1.8 11.6-2l10 12.5z"></path></svg>
                            </div>
                            <div className="absolute bottom-2 right-16">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-14 h-14" viewBox="0 0 115 30"><path fill="currentColor" d="M79.8 14.5L57.3 5.7l-22.5 8.8-22.6-8.8-10.3 4L0 4.8 12.2 0l22.6 8.8L57.3 0l22.5 8.8L102.4 0l12.2 4.8-2 4.9-10.2-4-22.6 8.8z"></path><path fill="currentColor" fillOpacity="0.2" d="M79.8 14.5L57.3 5.7l-22.5 8.8-22.6-8.8-10.3 4L0 4.8 12.2 0l22.6 8.8L57.3 0l22.5 8.8L102.4 0l12.2 4.8-2 4.9-10.2-4-22.6 8.8z"></path><path fill="currentColor" d="M79.8 29.1l-22.5-8.9-22.5 8.9-22.6-8.9-10.3 4.1-1.9-5 12.2-4.8 22.6 8.8 22.5-8.8 22.5 8.8 22.6-8.8 12.2 4.8-2 5-10.2-4.1-22.6 8.9z"></path><path fill="currentColor" fillOpacity="0.2" d="M79.8 29.1l-22.5-8.9-22.5 8.9-22.6-8.9-10.3 4.1-1.9-5 12.2-4.8 22.6 8.8 22.5-8.8 22.5 8.8 22.6-8.8 12.2 4.8-2 5-10.2-4.1-22.6 8.9z"></path></svg>
                            </div>
                            <div className="absolute bottom-5 left-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-10 h-10" viewBox="0 0 110 98"><path fill="currentColor" d="M108.1 98H0V1.5C0 .7.6.1 1.4.1c.8 0 1.4.6 1.4 1.4v93.8h105.3c.8 0 1.4.6 1.4 1.4 0 .7-.6 1.3-1.4 1.3z"></path><path fill="currentColor" fillOpacity="0.2" d="M108.1 98H0V1.5C0 .7.6.1 1.4.1c.8 0 1.4.6 1.4 1.4v93.8h105.3c.8 0 1.4.6 1.4 1.4 0 .7-.6 1.3-1.4 1.3z"></path><path fill="currentColor" d="M108.1 89.7H9.3V1.5c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v85.4h96c.8 0 1.4.6 1.4 1.4 0 .7-.6 1.4-1.4 1.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M108.1 89.7H9.3V1.5c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v85.4h96c.8 0 1.4.6 1.4 1.4 0 .7-.6 1.4-1.4 1.4z"></path><path fill="currentColor" d="M108.1 81.3H18.7V1.4c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v77.1h86.6c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M108.1 81.3H18.7V1.4c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v77.1h86.6c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4z"></path><path fill="currentColor" d="M108.1 73h-80V1.4c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v68.8h77.2c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M108.1 73h-80V1.4c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v68.8h77.2c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4z"></path><path fill="currentColor" d="M108.1 64.7H37.4V1.5c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v60.4h67.9c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4z"></path><path fill="currentColor" fillOpacity="0.2" d="M108.1 64.7H37.4V1.5c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v60.4h67.9c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4z"></path></svg>
                            </div>
                            <div className="absolute text-center -bottom-10 opacity-50 left-52"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-32 h-32" viewBox="0 0 102 13"><path fill="currentColor" d="M7.9 6.3l-4 3.2L0 12.6V0l3.9 3.2 4 3.1z"></path><path fill="currentColor" fillOpacity="0.2" d="M7.9 6.3l-4 3.2L0 12.6V0l3.9 3.2 4 3.1z"></path><path fill="currentColor" d="M31.2 6.3l-4 3.2-3.9 3.1V0l3.9 3.2 4 3.1z"></path><path fill="currentColor" fillOpacity="0.2" d="M31.2 6.3l-4 3.2-3.9 3.1V0l3.9 3.2 4 3.1z"></path><path fill="currentColor" d="M54.5 6.3l-3.9 3.2-4 3.1V0l4 3.2 3.9 3.1z"></path><path fill="currentColor" fillOpacity="0.2" d="M54.5 6.3l-3.9 3.2-4 3.1V0l4 3.2 3.9 3.1z"></path><path fill="currentColor" d="M77.8 6.3l-3.9 3.2-4 3.1V0l4 3.2 3.9 3.1z"></path><path fill="currentColor" fillOpacity="0.2" d="M77.8 6.3l-3.9 3.2-4 3.1V0l4 3.2 3.9 3.1z"></path><path fill="currentColor" d="M101.2 6.3l-4 3.2-4 3.1V0l4 3.2 4 3.1z"></path><path fill="currentColor" fillOpacity="0.2" d="M101.2 6.3l-4 3.2-4 3.1V0l4 3.2 4 3.1z"></path></svg>
                            </div>
                            <div className="absolute top-20 left-1"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-10 h-10" viewBox="0 0 82 84"><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.906" d="M41.582 1.216c-1.796 4.609-1.197 8.882-1.023 13.747.226 6.318.418 12.596.877 18.903M41.065 45.18c-1.314 6.33-.723 12.5-.176 18.9.52 6.077 1.25 12.132 1.968 18.188M1.134 46.665c4.033-1.795 7.835-1.868 12.175-2.162 6.567-.446 12.894-1.294 19.347-2.551M47.263 40.096c11.15-.714 22.127-2.565 33.184-4.1M49.343 34.65l3.574-6.483M32.979 50.35l-4.34 4.29M52.636 48.666l4.315 2.91M31.549 30.847c-4.675-1.415-8.835-3.493-13.275-5.488"></path></svg>
                            </div>
                        </div>
                        <div className="flex justify-start w-full">
                            <span className="relative whitespace-nowrap text-gray-300 text-4xl font-bold capitalize">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="absolute left-0 top-3/4 h-[0.58em] w-full fill-blue-300/70" viewBox="0 0 205 39"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 34.135c10.184 1.903 15.622 3.634 23.447-2.753 3.486-2.845 6.634-5.835 8.481-10.015 2.025-4.582 3.574-17.065-4.517-10.894-4.663 3.557-6.373 8.824-6.055 14.546.789 14.18 19.043 13.881 29.481 11.824 9.98-1.968 20.33-7.754 24.388-17.515 1.918-4.615 1.622-12.658-5.599-8.869-5.472 2.872-6.97 10.522-6.628 16.056.563 9.11 13.94 10.675 20.855 10.331 10.947-.544 21.215-10.896 26.701-19.684 2.044-3.274 3.426-12.544-2.811-7.465-12.077 9.835-1.765 26.824 12.401 25.43 11.359-1.118 21.138-13.821 27.422-22.23 1.231-1.65 5.502-15.858-.337-10.823-4.751 4.097-6.99 12.794-4.606 18.565 10.435 25.265 44.594-3.126 59.902-8.25"></path></svg>
                            <span className="relative">All Projects</span>
                            </span>
                        </div>
                        <p className="mt-2 text-lg leading-8 text-gray-300">
                            Showcasing the work I have created.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white pattern-plus-connected-primary-300/50 pattern-plus-connected-scale-[0.5]">  
                <div className="container sticky max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 max-h-full">

                    <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {Data.sort((a: any, b: any) => b - a).map((project, index) => {
                            return (
                                <div key={index} className="group relative rounded-lg bg-primary-50 hover:bg-primary-200 p-3 hover:drop-shadow-2xl border border-gray-200">
                                    <div className="justify-center items-center px-3 py-2">
                                        <BlurImage image={project.image} title={project.title} />
                                        <div className="flex flex-wrap items-center mt-6 h-16">
                                            <div className="flex flex-row space-x-0">
                                                <ReturnToContent isTrue={typeof project.link === 'string' && project.link !== ''} link={project.link}>
                                                    <h2 className="mt-1 text-xl font-extrabold text-primary-800 tracking-wide">{project.title}
                                                    </h2>
                                                    {typeof project.link === 'string' && project.link !== '' && (
                                                        <svg
                                                            className="w-6 h-6 flex-none opacity-0 group-hover:opacity-100"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                        >
                                                            <path
                                                            d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15"
                                                            stroke="#0EA5E9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    )}
                                                </ReturnToContent>
                                            </div>
                                            <p className="w-full flex-none text-[0.8125rem] leading-6 text-slate-500 capitalize">{project.description}</p>
                                        </div>
                                        
                                        <div className="flex justify-between">
                                            <div className="flex flex-row overflow-x-auto mt-4 space-x-2 items-center">
                                                {project.tags.map((tag, index) => {
                                                    return (
                                                        <div key={index} className="bg-gradient-to-l from-cyan-900 via-sky-600 to-blue-600 p-1 rounded-lg text-xs text-gray-100 uppercase">
                                                            {tag}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            {project.is_github && (
                                                <Link href={project.github_link} className="flex items-center ml-4">
                                                    <Image 
                                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                                        width="0"
                                                        height="0"
                                                        sizes="100vw"
                                                        alt={project.title}
                                                        className="w-7 h-7"
                                                    />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

interface ReturnToContentProps {
    isTrue: boolean;
    link: string;
    children: ReactNode;
}
  
function ReturnToContent({ isTrue, link, children }: ReturnToContentProps) {
    if (isTrue) {
      return <a href={link} className="flex flex-row" target="_blank" rel="noopener noreferrer">{children}</a>;
    } else {
      return <>{children}</>;
    }
}
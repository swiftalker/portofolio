"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function HomeCard() {
  return (
    <>
    <div className="overflow-hidden">
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
        <SwiperSlide>
            <div className="flex flex-row space-x-2">
            <Image 
                src="/static/images/laravel.svg"
                width="0"
                height="0"
                sizes="100vw"
                alt="Laravel Logo"
                className="h-24 w-24"
            />  
            <Image 
                src="/static/images/laravel-text.svg"
                width="0"
                height="0"
                sizes="100vw"
                alt="Laravel TextLogo"
                className="h-24 w-24"
            />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <Image 
                src="/static/images/javascript.svg"
                width="0"
                height="0"
                sizes="100vw"
                alt="Javascript Logo"
                className="h-24 w-24"
            />  
        </SwiperSlide>
        <SwiperSlide>
            <Image 
                src="/static/images/typescript.svg"
                width="0"
                height="0"
                sizes="100vw"
                alt="Typescript Logo"
                className="h-24 w-24"
            />  
        </SwiperSlide>
        <SwiperSlide>
            <Image 
                src="/static/images/node.png"
                width="0"
                height="0"
                sizes="100vw"
                alt="NodeJS Logo"
                className="h-24 w-24"
            />  
        </SwiperSlide>
        <SwiperSlide>
            <Image 
                src="/static/images/php.svg"
                width="0"
                height="0"
                sizes="100vw"
                alt="PHP Logo"
                className="h-24 w-24"
            />  
        </SwiperSlide>
        <SwiperSlide>
            <Image 
                src="/static/images/go.png"
                width="0"
                height="0"
                sizes="100vw"
                alt="Golang Logo"
                className="h-24 w-24"
            />  
        </SwiperSlide>
        <SwiperSlide>
            <Image 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg"
                width="0"
                height="0"
                sizes="100vw"
                alt="Symfony Logo"
                className="h-24 w-24"
            />  
        </SwiperSlide>
        <SwiperSlide>
            <Image 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                width="0"
                height="0"
                sizes="100vw"
                alt="React Logo"
                className="h-24 w-24"
            />  
        </SwiperSlide>
        <SwiperSlide>
            <Image 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
                width="0"
                height="0"
                sizes="100vw"
                alt="Bootstrap Logo"
                className="h-24 w-24"
            />  
        </SwiperSlide>
        <SwiperSlide>
            <Image 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                width="0"
                height="0"
                sizes="100vw"
                alt="Tailwind Logo"
                className="h-24 w-24"
            />  
        </SwiperSlide>
        <SwiperSlide>
            <Image 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                width="0"
                height="0"
                sizes="100vw"
                alt="HTML Logo"
                className="h-24 w-24"
            />  
        </SwiperSlide>
        <SwiperSlide>
            <Image 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
                width="0"
                height="0"
                sizes="100vw"
                alt="Jquery Logo"
                className="h-24 w-24"
            />  
        </SwiperSlide>
        <SwiperSlide>
            <Image 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                width="0"
                height="0"
                sizes="100vw"
                alt="CSS Logo"
                className="h-24 w-24"
            />  
        </SwiperSlide>
        <SwiperSlide>
            <Image 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                width="0"
                height="0"
                sizes="100vw"
                alt="Git Logo"
                className="h-24 w-24"
            />  
        </SwiperSlide>
        <SwiperSlide>
            <Image 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original-wordmark.svg"
                width="0"
                height="0"
                sizes="100vw"
                alt="Elixir Logo"
                className="h-24 w-24"
            />  
        </SwiperSlide>
        </Swiper>
    </div>
    </>
  )
}
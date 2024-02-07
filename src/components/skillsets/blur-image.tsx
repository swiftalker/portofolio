"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface BlurImageProps {
  image: string;
  title: string;
}

const BlurImage: React.FC<BlurImageProps> = ({ image, title }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200">
        <Image
            src={image}
            alt={title}
            width="0"
            height="0"
            sizes="100vw"
            className={`
                absolute inset-0 w-full h-full duration-700 ease-in-out group-hover:opacity-75
                ${
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                })`}
            onLoad={() => setLoading(false)}
            priority={true}
        />
    </div>
  );
};

export default BlurImage;

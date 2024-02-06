import Image from "next/image";

export default function ReachMe() {
    return (
        <div className="bg-primary-700 pattern-architect-primary-300/50 pattern-architect-scale-[0.5]">  
            <div className="container sticky max-w-7xl mx-auto pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-h-full">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <span className="relative whitespace-nowrap text-gray-100 text-6xl font-bold capitalize">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70" viewBox="0 0 550 98"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="5.588" d="M3.554 59.974c1.245 5.014-.193 33.453.75 34.71m0 0c.807 1.074 14.899-7.636 28.68-16.636M4.304 94.683c21.814-64.592 94.893-65.82 149.118-64.103 65.59 2.077 114.216 15.377 167.769 21.533 78.618 9.038 181.747 12.39 225.193-49.19"></path></svg>
                        <span className="relative">Reach me!</span>
                    </span>
                    

                    <div className="flex flex-col my-6 space-y-6 flex gap-1">
                        <a href="https://www.linkedin.com/in/muhammad-adnan-aab80b211/" target="_blank" className="flex flex-row space-x-2 items-center">
                            <Image 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                            width="0"
                            height="0"
                            sizes="100vw"
                            alt="Linkedin Logo"
                            className="h-12 w-12 hover:translate-y-1"
                            />
                            <span className="text-gray-200 underline hover:text-white">https://www.linkedin.com/in/muhammad-adnan-aab80b211/</span>
                        </a>
                        
                        <a href="mailto:naravaya04@gmail.com" target="_blank" className="flex flex-row space-x-2 items-center">
                            <svg className="h-12 w-12 hover:translate-y-1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#ECEFF1" d="M64 64h384v384H64z"/>
                                <path fill="#CFD8DC" d="M256 296.38L448 448V148.67z"/>
                                <path
                                    d="M464 64h-16L256 215.616 64 64H48C21.504 64 0 85.504 0 112v288c0 26.496 21.504 48 48 48h16V148.672l192 147.68L448 148.64V448h16c26.496 0 48-21.504 48-48V112c0-26.496-21.504-48-48-48z"
                                    fill="#F44336"
                                />
                            </svg>
                            <span className="text-gray-200 underline hover:text-white">naravaya04@gmail.com</span>
                        </a>

                        <a href="http://github.com/swiftalker" target="_blank" className="flex flex-row space-x-2 items-center">
                            <svg
                                className="h-12 w-12 hover:translate-y-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span className="text-gray-200 underline hover:text-white">http://github.com/swiftalker</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
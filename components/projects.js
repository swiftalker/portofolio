import projects from "../store/skills";

export default function Projects() {
    
    return (
        <section id="projects" className="flex flex-col min-h-screen py-4 px-4">
            <div className="flex justify-center items-center font-black italic lg:text-6xl text-2xl text-stone-900">
                <span className="underline decoration-4 decoration-sky-500">Projects</span>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-4 p-10">
                {projects.map((project, index) => {
                    return (
                        <div key={index} className="transition duration-500 ease-in-out transform hover:scale-105 lg:mb-0 mb-4">
                            <div className="relative pb-2/3">
                                <img className="h-full w-full object-cover rounded-lg shadow-md"
                                     src={'/images/' + project.image}
                                     alt=""/>
                            </div>
                            <div className="relative z-10 px-4 -mt-16">
                                <div className="bg-white border p-6 rounded-lg shadow-lg">
                                    <div className="flex flex-row">
                                        <a href={project.link}>
                                            <h1 className="inline-flex text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                                                {project.title}

                                                {project.is_archived == false
                                                    ? (<svg
                                                        className="w-6 h-6 ml-2 mt-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                        />
                                                    </svg>)
                                                    : ''
                                                }
                                            </h1>
                                        </a>
                                        {project.is_github
                                            ? (<div className="inline-flex">
                                                <span
                                                    className="mb-0 ml-1 mr-1 text-xl text-gray-600 font-body">•</span>
                                                <a href={project.github_link}>
                                                    <svg
                                                        className="w-6 h-6 mt-1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                                    </svg>
                                                </a>
                                            </div>)
                                            : ''
                                        }
                                    </div>
                                    <p className="text-gray-700 tracking-wide">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap mt-2">
                                        {project.technologies?.map((tech, index) => {
                                            return (<div key={index}
                                                className="bg-green-200 rounded px-2 py-1 mr-2 mb-2 text-green-800">
                                                {tech}
                                            </div>)
                                        })}
                                    </div>
                                </div>
                            </div>

                            {project.is_archived
                                ? (<div
                                    className="absolute top-2 right-2 py-2 px-4 bg-red-500 text-white rounded-lg">
                                    <span className="text-md">Archived</span>
                                </div>)
                                : ""
                            }
                        </div>)
                })}

            </div>
        </section>
    )
}
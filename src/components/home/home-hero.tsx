import HomeCard from "./home-card";

export default function Hero() {
    return (
        <div className="bg-primary-700 pattern-wiggle-primary-300/50 pattern-wiggle-scale-[0.5]">  
            <div className="container sticky max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 text-base-content max-h-full">
            <div className="relative isolate py-4">
                <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
                >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#050505] to-[#010321] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
                </div> 
                <div
                className="grid lg:grid-cols-4 grid-rows-1 space-x-2 items-center"
                >
                <div className="lg:col-span-3 lg:order-1 order-2 lg:mt-0 mt-4">
                    <div className="lg:text-left text-justify text-balance ">
                        <h1 className="text-2xl font-bold text-neutral-50">
                            Hi there, Im <span className="text-white font-black bg-clip-text">Adnan Muhammad</span> 👋
                        </h1>
                        <div className="mt-6 text-lg leading-loose text-neutral-50">
                            <ul className="list-none list-inside">
                            <li>
                                I'm a <b>Full Stack Web Developer</b> and <b>Software Engineer</b> based in Bogor, Indonesia 🌐💻
                            </li>
                            <li>
                                Started coding in <b>2018</b>, freelancing since <b>2020</b>.
                            </li>
                            <li>
                                I specialize in <b>Backend Programming</b>, <b>UI/UX Design</b>, <b>Data Science</b>, <b>Machine Learning</b>, and <b>system security</b>.
                            </li>
                            <li>
                                Passionate about <b>Programming Design Patterns</b>, <b>Low-Level Languages (C, Zig, Rust, C++)</b>, and <b>Passionate with Elixir</b>.
                            </li>
                            </ul>
                            Let's collaborate for innovative solutions!
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1 lg:order-2 order-1">
                    <div className="relative justify-center items-center">
                    <HomeCard />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
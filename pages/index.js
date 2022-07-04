import MainLayout from '../layouts/main/main'
import Projects from '../components/projects';
import Skills from '../components/skills';
import HomeStyles from "../styles/Home.module.css";

export default function Home() {

    return (
        <MainLayout
            title='Muhammad Adnan Portofolio'>
            <div className={`${HomeStyles.hero} flex flex-col min-h-screen mb-4 py-24`}>
                <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24 px-20 md:py-20 lg:py-20">
                  <div>
                      <h1 className="text-3xl font-bold text-neutral-50">
                        Hi there, Im <span className="text-white font-black bg-clip-text text-transparent">Adnan Muhammad</span> 👋</h1>
                      <p className="mt-6 text-xl leading-9 text-neutral-50">
                          Full Stack Developer based in Bogor, Indonesia.<br />
                          Im a <span className="text-white font-black bg-clip-text text-transparent">Software Enginer</span> who started learning programming since 2018 and likes to explore things.<br/>
                          Im interested with UI/UX Design, Data Science, Machine Learning, Deep Learning security systems and programming design patterns (and anti-patterns).
                      </p>

                      
                      <div className="mt-3 flex gap-1">
                          <a href="https://www.linkedin.com/in/muhammad-adnan-aab80b211/">
                            <svg
                                className="h-12 w-12 hover:translate-y-1"
                                viewBox="0 0 382 382"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M347.44 0H34.55C15.466 0-.005 15.471-.005 34.555v312.89c0 19.085 15.471 34.556 34.555 34.556h312.89c19.085 0 34.556-15.471 34.556-34.556V34.555C381.996 15.471 366.525 0 347.441 0zM118.2 329.84c0 5.554-4.502 10.056-10.056 10.056H65.338c-5.554 0-10.056-4.502-10.056-10.056V150.4c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.44zM86.741 123.43c-22.459 0-40.666-18.207-40.666-40.666s18.207-40.666 40.666-40.666 40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zm255.16 207.22a9.247 9.247 0 01-9.246 9.246h-45.934a9.247 9.247 0 01-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.246 9.246 0 01-9.246 9.246h-44.426a9.247 9.247 0 01-9.246-9.246V149.59a9.247 9.247 0 019.246-9.246h44.426a9.247 9.247 0 019.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.47v86.846z"
                                    fill="#0077B7"
                                />
                            </svg>
                          </a>
                          
                          <a href="mailto:naravaya04@gmail.com">
                            <svg className="h-12 w-12 hover:translate-y-1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#ECEFF1" d="M64 64h384v384H64z"/>
                                <path fill="#CFD8DC" d="M256 296.38L448 448V148.67z"/>
                                <path
                                    d="M464 64h-16L256 215.616 64 64H48C21.504 64 0 85.504 0 112v288c0 26.496 21.504 48 48 48h16V148.672l192 147.68L448 148.64V448h16c26.496 0 48-21.504 48-48V112c0-26.496-21.504-48-48-48z"
                                    fill="#F44336"
                                />
                            </svg>
                          </a>

                          <a href="http://github.com/muhammadnan">
                            <svg
                                className="h-12 w-12 hover:translate-y-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                      </div>
                  </div>

                  <div className="shrink-0">
                      <img 
                        className="w-52 lg:mt-0 mt-8 rounded-full shadow border-8 border-gray-400 transition duration-500 ease-in-out transform sm:w-44 md:w-48 lg:w-64 hover:scale-110"
                        src="/images/my-image.jpg" alt="Profile Picture"
                      />
                  </div>
              </div>
            </div>

            <Projects />

            <Skills />
        </MainLayout>
    )
}

import HomeStyles from "../styles/Home.module.css";
import skills from "../store/skills";

export default function Skills() {
    return (
        <div id="skills" className={`${HomeStyles.hero} flex flex-col min-h-screen`}>

            <div
                className="flex justify-center items-center font-bold italic lg:text-6xl text-2xl text-gray-100 mt-5">
                <span className="underline decoration-4 decoration-black">Skills</span>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-4 p-10">

                {skills.map((skill, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-white p-5 rounded-lg justify-center items-center text-center lg:mb-0 mb-4">
                            <div className="relative pb-2/3">
                                {skill.image
                                    ? (<img className="h-full w-full object-cover"
                                            src={'/images/' + skill.image}
                                            alt=""/>)
                                    : (<i className={`${skill.icon} text-6xl`}></i>)
                                }
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
            </div>
        </div>
    )
}
import { useState } from "react";
import {skills} from "../constants"
import Technologies from "./Technologies";
import { education } from "../constants";
import logo from "../assets/clg.jpg"
import {motion} from "framer-motion"
const SkillsEducation = () => {
    const [tab, setTab] = useState("skills");

    return (
        <div className="pb-24 flex flex-col">
            <div className="flex items-center justify-evenly gap-5">
                <button
                    onClick={() => setTab("skills")}
                    className={tab === "skills" ? "bg-stone-900 p-2 text-4xl font-medium text-stone-300 transition-all duration-200" : "my-20 text-center text-4xl"}
                >
                    Skills
                </button>
                <button
                    onClick={() => setTab("edu")}
                    className={tab === "edu" ? "bg-stone-900 p-2 text-4xl font-medium text-stone-300 transition-all duration-200" : "my-20 text-center text-4xl"}
                >
                    Education
                </button>
            </div>
            <div className="lg:flex items-center justify-around">
            <div>
            {tab === "skills" ? (<div>
            {skills.map((skill,index)=>(
                <div key={index} className="flex flex-col mb-5">
                    <motion.h2 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:1,x:-100}}
                    transition={{duration:1}}
                    className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent mb-2">{skill.title}</motion.h2>
                    <div className="flex flex-wrap">
                    {skill.stack.map((tech,index)=>(
                            <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
            </div>) : (<div className="flex flex-col mb-5">{education.map((edu,index)=>(
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:1,x:-100}}
                transition={{duration:1}}
                key={index} className="flex flex-col mb-5"><h2 className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent mb-2">{edu.title}</h2>
                <p>{edu.what}</p>
                </motion.div>
            ))}</div>)}
            </div>
           <div>
             {tab === "skills" ?
                (<div className=""><Technologies /></div>) : (<div><img src={logo}
                 height={300} width={300} className="rounded-lg"/></div>)}
           </div>
            </div>
        </div>
    );
};

export default SkillsEducation;
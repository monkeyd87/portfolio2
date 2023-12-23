import { Project } from "./Project"
import {projects} from '../components/assests/contentOption'
import {motion,useInView} from 'framer-motion'
import { useRef } from "react"
export const Projects = ({id})=>{
    const ref = useRef(null)
    const isinview = useInView(ref,{once:true})
    return(
        <div className="d-flex border-t-2 border-b-2 border-gray-500 " id={id}>
            <div className="right border-dark "style={{textOrientation:'mixed',writingMode:'vertical-rl'}}>
                <h3>PROJECTS</h3>
            </div>
            <div className="bg-light w-full justify-content-between gap-10">
                <div className="d-flex gap-3  bg-black flex-column flex-lg-row flex-md-column align-items-sm-center justify-content-center flex-wrap">
                    {projects.map((project,index)=>{

                        return(
                            <motion.div key={index} ref={ref} className=" col-sm-5 col-lg-3"
                                initial={{
                                    scale:0,
                                    opacity:0,
                                    y:-1
                                }}
                                animate={{
                                    scale:isinview?1:0,
                                    y:isinview?1:0,
                                    opacity:isinview?100:0

                                }}
                                transition={{
                                    delay:index*.1
                                }}


                            >
                                <Project
                                    title={project.title}
                                    img={project.img&&project.img}
                                    link={project.deployed_link}
                                    git={project.github_link}
                                />
                            </motion.div>
                        )
                    })}
                </div>

            </div>
             <div className="right border-dark "style={{textOrientation:'mixed',writingMode:'vertical-rl'}}>
                <h3>PROJECTS</h3>
            </div>
        </div>
    )
}
import { Project } from "./Project"
import {projects} from '../components/assests/contentOption'
import {motion} from 'framer-motion'

export const Projects = ()=>{

    return(
        <div className="d-flex border-t-2 border-b-2 border-gray-500 ">
            <div className="right border-dark "style={{textOrientation:'mixed',writingMode:'vertical-rl'}}>
                <h3>PROJECTS</h3>
            </div>
            <div className="bg-light w-full justify-content-between gap-10">
                <div className="d-flex gap-3  bg-black flex-column flex-lg-row flex-md-column align-items-sm-center justify-content-center flex-wrap">
                    {projects.map((project,index)=>{

                        return(
                            <motion.div className=" col-sm-5 col-lg-3"
                                initial={{
                                    scale:0,
                                    opacity:0,
                                    y:-1
                                }}
                                animate={{
                                    scale:1,
                                    y:1,
                                    opacity:100

                                }}
                                transition={{
                                    delay:index*.05
                                }}


                            >
                                <Project
                                    title={project.title}
                                    img={project.img&&project.img}
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
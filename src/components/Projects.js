    "use client"
import { Project } from "./Project"
import {projects} from '../components/assests/contentOption'
import {motion,useInView} from 'framer-motion'
import { useRef,useState } from "react"
import { Modal } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faLink } from '@fortawesome/free-solid-svg-icons'
import { faHtml5,faReact,faBootstrap,faCss3, faGit, faGithub, faGithubAlt, faGithubSquare, } from '@fortawesome/free-brands-svg-icons'
import { Container } from "postcss"

export const Projects = ({id})=>{
    const ref = useRef(null)
    const [show, setShow] = useState(false)
    const [modalData,setModalData] = useState({})
    const isinview = useInView(ref,{once:true})
    // set and show modal data
    const showModal = (data) =>{
        setModalData((prev)=>data)
        setShow(()=>true)


    }

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
                                    onClick={showModal}
                                    title={project.title}
                                    img={project.img&&project.img}
                                    link={project.deployed_link}
                                    git={project.github_link}
                                    tech={project.technologies_used}
                                    gif={project.gif}
                                    video={project.video}
                                />
                            </motion.div>
                        )
                    })}
                </div>

            </div>
             <div className="right border-dark "style={{textOrientation:'mixed',writingMode:'vertical-rl'}}>
                <h3>PROJECTS</h3>
            </div>
            <Modal className=""   size="lg" show={show} onHide={()=>setShow(false)}>
                {modalData.title&&<Modal.Title className="text-center">{modalData.title}</Modal.Title>}
                <Modal.Body className="d-flex justify-center"  >
                   {modalData.video}
                </Modal.Body>
               <Modal.Footer>
                    <div>
                        {}
                    </div>
                    <div className="float-left gap-3 d-flex">
                        <a target="_blank" href={modalData.git}><FontAwesomeIcon size="lg" icon={faGithubAlt}/></a>
                        <a target="_blank" href={modalData.link}><FontAwesomeIcon size="lg" icon={faLink}/></a>
                    </div>
               </Modal.Footer>
               <Modal.Footer className="">
                <ul className="d-flex gap-11">
                    {modalData.tech&&modalData.tech.map((item,index)=>{
                        return<li key={index}>{item}</li>
                    })}
                </ul>
               </Modal.Footer>
            </Modal>

        </div>
    )
}
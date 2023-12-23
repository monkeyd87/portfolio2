import {Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faLink } from '@fortawesome/free-solid-svg-icons'
import { faHtml5,faReact,faBootstrap,faCss3, faGit, faGithub, faGithubAlt, faGithubSquare, } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import {motion,stagger, useAnimate,useInView} from 'framer-motion'
import { useRef } from 'react'


export const Project = ({title,tech,img,git,link,...props})=>{
    const ref = useRef(null)
    const isinview = useInView(ref,{once:true})
    return(
        <>
            <Card ref={ref} bg='dark border border-dark shadow  project' style={{color:'white'}}>
                <Card.Title className='text-center'>{title}</Card.Title>
                <Card.Body>
                    <img src={img}/>
                   
                    <Card.Text></Card.Text>

                </Card.Body>
                <Card.Footer>
                    <div className='d-flex gap-3 float-right'>
                        
                        {link&&<FontAwesomeIcon onClick={()=>window.open(link)} className='cursor-pointer' icon={faLink}/>}
                        {git&&<FontAwesomeIcon onClick={()=>window.open(git)} className='cursor-pointer' icon={faGithubAlt}/>}

                        </div>
                </Card.Footer>
            </Card>
        </>
    )
}
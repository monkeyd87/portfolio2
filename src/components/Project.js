import {Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode } from '@fortawesome/free-solid-svg-icons'
import { faHtml5,faReact,faBootstrap,faCss3, } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import {motion,stagger, useAnimate} from 'framer-motion'


export const Project = ({title,tech,img,git,link,...props})=>{

    return(
        <>
            <Card bg='dark border border-dark shadow  ' style={{color:'white'}}>
                <Card.Title className='text-center'>{title}</Card.Title>
                <Card.Body>
                    <img src={img}/>
                   
                    <Card.Text></Card.Text>

                </Card.Body>
                <Card.Footer>
                    <div className='d-flex gap-3'>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1}}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 0.5,
                            delay:stagger(.1)
                          }}
                        >
                            <FontAwesomeIcon icon={faReact} />
                        </motion.div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1}}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 0.5,
                            delay:.1
                          }}
                        >
                            <FontAwesomeIcon icon={faReact} />
                        </motion.div>

                        </div>
                </Card.Footer>
            </Card>
        </>
    )
}
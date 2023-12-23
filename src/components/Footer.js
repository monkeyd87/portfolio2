  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faLink } from '@fortawesome/free-solid-svg-icons'
import { faHtml5,faReact,faBootstrap,faCss3, faGit, faGithub, faGithubAlt, faGithubSquare, faLinkedin, faInstagram, faTiktok, } from '@fortawesome/free-brands-svg-icons'

export const Footer = ()=>{
    return(
        <div className='bg-gray-900 w-full p-3'>
            <div>
                <h3 className='text-center'>Hire Me!!</h3>
            </div>
            <div className='d-flex justify-content-center justify-content-lg-between'>
                <div>
                    <p>dennisdjack@mail.com</p>
                </div>
                <div className='social-links d-flex gap-3 '>
                    <a className="" target='_blank' href='https://www.github.com/monkeyd87' style={{textDecoration:'none',color:'white',cursor:'pointer'}}><FontAwesomeIcon icon={faGithubAlt} size='xl'/></a>
                    <a target='_blank' href='https://www.linkedin.com/in/dennis-jackson-a5233824a/' style={{textDecoration:'none',color:'white',cursor:'pointer'}}><FontAwesomeIcon icon={faLinkedin} size='xl'/></a>
                    <a target='_blank' href='https://www.instagram.com/mr.djack_art/' style={{textDecoration:'none',color:'white',cursor:'pointer'}}><FontAwesomeIcon icon={faInstagram} size='xl'/></a>
                    <a target='_blank' href='https://www.tiktok.com/@mr_djartstudio' style={{textDecoration:'none',color:'white',cursor:'pointer'}}><FontAwesomeIcon icon={faTiktok} size='xl'/></a>
                </div>
            </div>
        </div>
    )
}
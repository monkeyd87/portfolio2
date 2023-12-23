"use client"
import Image from 'next/image'

import { Button,Navbar,Nav,NavItem,Row,Col,Container } from 'react-bootstrap'
import {Header} from '../components/Header'
import {About} from '../components/About'
import {Contact} from '../components/Contact'
import {Footer} from '../components/Footer'
import { Projects } from '@/components/Projects'

export default function Home() {
  return (
    
    <div  className='text-light'>
        <Header/>
        <About/>
        <Projects/>
        <Contact id="contact"/>
        <Footer/>
      </div>
    
  )
}

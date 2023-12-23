import Image from "next/image"
import pic from './assests/image6.png'
import {motion} from 'framer-motion'
export const About = ({id})=>{
    return(
        <div className="w-100  d-flex justify-content-lg-center justify-content-center align-items-sm-center align-items-center flex-lg-row flex-column-reverse flex-md-row flex-sm-column flex-sm-column-reverse pl-10  " id={id}>
           
            <motion.div className=" d-flex flex-col align-items-center justify-content-center  w-50 "
                initial={{
                    opacity:0,
                    y:-100

                }}
                animate={{
                    opacity:100,
                    y:0

                }}
                transition={{ ease: "easeOut", duration: .5 }}

            >
                <h1 className="border-bottom">Web Developer</h1>
                <div className="" style={{textOverflow:'ellipsis'}}>
                    <p>Hi there! My name is Dennis Jackson. I taught myself Python during the lockdown and then started learning JavaScript using Codecademy. I recently graduated from UC Davis boot camp, where I gained a deeper understanding of web development and further honed my programming skills. I am excited to continue learning and growing as a programmer, and to apply my skills to solve challenging problems</p>
                </div>
            </motion.div>
            <div className=" rounded-circle w-50"style={{background: 'radial-gradient(white 10%, transparent 70%)',position:'relative'}} >
                <motion.div
                 initial={{
                    opacity:0,
                    x:-100

                }}
                animate={{
                    opacity:100,
                    x:0

                }}
                transition={{delay:.2, ease: "easeOut", duration: .5 }}
                >
                    <Image
                    className="w-100"
                    src={pic}
                    height={500}
                    width={500}
                    />
                </motion.div>
                <div className="border   border-3" style={{height:'300px',width:'400px',position:'absolute',top:'40px',right:0,zIndex:-1,borderRadius:'50px'}}></div>
                <div className="border   border-3" style={{height:'350px',width:'200px',position:'absolute',bottom:'40px',left:0,zIndex:-1}}></div>
            </div>
        </div>
    )
}
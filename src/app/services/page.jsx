'use client'
import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { SiBackendless } from "react-icons/si";
import {motion} from "framer-motion"
const Services = () => {
  const textAnimate={
    offscreen:{y:250,x:0, opacity:0},
    onscreen:{x:0,y:0,
    opacity:1,
    transition: {type:"linear",
    bounce:0,
    duration:0.7,
  }
 }

}
  return (
    <div className='container flex flex-col gap-16 min-h-[calc(100vh-55px)]'     >
        <motion.div  initial={{opacity:0,x:0,y:-160}} animate={{opacity:1,x:0,y:5}} transition={{duration:0.1,delay:0}} className='text-white font-bold text-3xl z-0 text-center'>Our <span className='text-main'>Services</span></motion.div>
<motion.div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr,1fr,1fr] gap-9'
initial={["offscreen"]}
whileInView={"onscreen"}
viewport={{once:true}}
// transition={{staggerChildren:0.4}}
>
<motion.div variants={textAnimate} className='rounded-2xl h-[calc(100vh-40vh)] hover:transform hover:scale-105 hover:duration-100 hover:ease-linear bg-[#313643] flex items-center border overflow-hidden  '>
   <div className='flex flex-col gap-1 xsm:gap-2   sm:gap-3 items-center'>
<FaCode className='text-main !gap-4 text-5xl'/>
<h1 className='text-white font-bold text-xl sm:text-2xl'>Frontend Technologies</h1>
<p className='mx-5 xsm:mx-9 sm:mx-14 break-words self-center text-white'>Frontend include Languages like HTML , CSS , JAVASCRIPT , REACT JS , NEXT JS and some CSS libraries 
Like BOOTSTRAP and TAILWIND CSS are included in Frontend Development</p>
    <div className='mt-'>
<a /* onClick={seeMore} */ className="shayd w-[120px] h-10 grid place-items-center text-black  ring-md ring-[#02AAF1] rounded-2xl bg-[#02AAF1] cursor-pointer" >{/* {more ? "See Less" : "See More"} */}Detail</a>
  </div>
  </div> 
</motion.div>
<motion.div variants={textAnimate} className='rounded-2xl h-[calc(100vh-40vh)] hover:transform hover:scale-105 hover:duration-100 hover:ease-linear bg-[#313643] flex items-center border overflow-hidden  '>
   <div className='flex flex-col  gap-1 xsm:gap-2   sm:gap-3 items-center'>
<SiBackendless className='text-main !gap-4 text-5xl'/>
<h1 className='text-white font-bold text-xl sm:text-2xl'>Backend Technologies</h1>
<p className='mx-5 xsm:mx-9 sm:mx-14 break-words self-center text-white'>Backend include Languages like NODE JS , JAVASCRIPT , EXPRESS JS and NEXT JS 
are included to making BACKEND of a WebApp integration of THE criteria of Backend Development </p>
    <div className='mt-'>
<a /* onClick={seeMore} */ className="shayd w-[120px] h-10 grid place-items-center text-black  ring-md ring-[#02AAF1] rounded-2xl bg-[#02AAF1] cursor-pointer" >{/* {more ? "See Less" : "See More"} */}Detail</a>
  </div>
  </div> 
</motion.div>
<motion.div variants={textAnimate} className='rounded-2xl h-[calc(100vh-40vh)] hover:transform hover:scale-105 hover:duration-100 hover:ease-linear bg-[#313643] flex items-center border overflow-hidden  '>
   <div className='flex flex-col  gap-1 xsm:gap-2   sm:gap-3 items-center'>
<FaDatabase className='text-main !gap-4 text-5xl'/>
<h1 className='text-white font-bold text-xl sm:text-2xl'>Database Technologies</h1>
<p className='mx-5 xsm:mx-9 sm:mx-14 break-words self-center text-white'>We are Providing Database of MongoDb and its deployment on mongoDb atlas and the Second is FIREBASE which is serverless Database all Requests from Frontend by Firebase</p>
    <div className='mt-'>
<a /* onClick={seeMore} */ className="shayd w-[120px] h-10 grid place-items-center text-black  ring-md ring-[#02AAF1] rounded-2xl bg-[#02AAF1] cursor-pointer" >{/* {more ? "See Less" : "See More"} */}Detail</a>
  </div>
  </div> 
</motion.div>
{/* <div></div>
<div></div> */}
</motion.div>
    </div>
  )
}

export default Services
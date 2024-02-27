'use client'
import React, { useState } from 'react'
import {motion} from "framer-motion"
const About = () => {
    const [more,setMore] = useState(false)
    const seeMore = ()=>{
        setMore(!more)
    }
    const textAnimate={
        offscreen:{y:-30,x:0, opacity:0},
        onscreen:{x:0,y:0,
        opacity:1,
        transition: {type:"spring",
        // bounce:0.4,
        duration:0.4,
      delay:0.4}
     }
    
    }
    const buttonAnimate = {
        initial:{opacity:0,y:200} ,
        animate:{opacity:1,y:0},
          transition:{ duration: 0.4,delay:0.2 ,type:'spring'}
    }
  return (
    <motion.div
    initial={["initial","offscreen"]}
whileInView={["animate","onscreen"]}
viewport={{once:true}}
transition={{staggerChildren:0.4}}
className='container grid gap-5 min-h-[calc(100vh-55px)] grid-cols-[300px] sm:grid-cols-[1fr,1fr]'>
        <div className='flex items-center mt-2 sm:mt-0  justify-center' >
<img src="/pic2.png" className='w-[150px]  sm:w-[450px] lg:h-auto' alt="" />
        </div>
        <div className='flex -mt-[9px] sm:-mt-0  items-baseline sm:items-center '>
            <div className='flex flex-col gap-0 sm:gap-2'>
<motion.h1 variants={textAnimate} className='text-white text-lg sm:text-2xl  lg:text-3xl kanit-medium'>About <span className='text-main'>Me</span></motion.h1>
<h1 className='text-white text-xl sm:text-2xl  lg:text-3xl kanit-medium '>Full Stack <span className='text-white'> Developer! </span> </h1>
{
    more ? <p className='text-white  anta-regular'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum repellat nam deleniti tempora sint 
    quos quidem? Ratione eveniet eos debitis porro praesentium aspernatur sequi doloribus, dolore laborum vero natus sapiente Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Eius alias quos maiores nihil ex! Dignissimos, enim odio dolores iste suscipit, ad minima tempora quo nulla vel perspiciatis rem
    pariatur quae?</p>
    : <p className='text-white text-sm sm:text-base anta-regular'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum repellat nam deleniti tempora sint 
    quos quidem? Ratione dolor sit amet consectetur eveniet eos dolor sit amet consectetur debitis porro praesentium aspernatur..</p>
}
    <motion.div  variants={buttonAnimate} className=''>
<a onClick={seeMore} className="shayd w-[120px] h-10 grid place-items-center text-black  ring-md ring-[#02AAF1] rounded-2xl bg-[#02AAF1] cursor-pointer" >{more ? "See Less" : "See More"}</a>
  </motion.div>
            </div>

        </div>

    </motion.div>
  )
}

export default About
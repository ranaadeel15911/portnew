'use client'
import {motion} from "framer-motion"
import React from 'react'

const Contact = () => {
    
  return (
    <div 
    // initial={["initial","offscreen"]}
    // whileInView={["animate","onscreen"]}
    // viewport={{once:true}}
    // transition={{staggerChildren:0.4}}



    >
        <div className="mt-1 container items-center gap-5 flex flex-col  min-h-[calc(100vh-55px)] ">
        <motion.h1 initial={{opacity:0,x:0,y:-100}} animate={{opacity:1,x:0,y:0}} transition={{duration:0.3}} className='text-white text-3xl kanit-medium'>Contact <span className='text-main'>Me</span></motion.h1>
            <motion.div initial={{opacity:0,x:0,y:200}} animate={{opacity:1,x:0,y:0}} transition={{duration:0.9}} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <input type="text" placeholder="Full Name" className="w-72  xsm:w-96 md:w-80 border-[#02AAF1] outline-[#02AAF1] focus:border-none   focus:ring-[#02AAF1] bg-[#313643] rounded-lg" />
                <input type="text" className="w-72 xsm:w-96 md:w-80  bg-[#313643] border-[#02AAF1] outline-[#02AAF1] focus:border-none   focus:ring-[#02AAF1]  rounded-lg" placeholder="Email Address" />
                <input type="text" className="w-72 xsm:w-96 md:w-80 bg-[#313643] border-[#02AAF1] outline-[#02AAF1] focus:border-none   focus:ring-[#02AAF1] rounded-lg" placeholder="Email Subject" />
                <input type="text" className="w-72 xsm:w-96 md:w-80 bg-[#313643] border-[#02AAF1] outline-[#02AAF1] focus:border-none   focus:ring-[#02AAF1] rounded-lg" placeholder="Mobile Number" />
            </motion.div>
            <motion.textarea initial={{opacity:0,x:0,y:200}} animate={{opacity:1,x:0,y:0}} transition={{duration:0.9}} placeholder="Send Message" className="w-72 xsm:w-96 sm:80 md:w-[650px] border-[#02AAF1] outline-[#02AAF1] focus:border-none   focus:ring-[#02AAF1] -mt-[10px] bg-[#313643] rounded-lg" name="" id="" cols="30" rows="10"></motion.textarea>
            <motion.div  initial={{opacity:0,y:200}} animate={{opacity:1,y:0}} transition={{ duration: 0.7,delay:0.5 ,type:'spring'}}   className='mt-'>
<a /* onClick={seeMore} */  className="shayd w-[120px] h-10 grid place-items-center text-black  ring-md ring-[#02AAF1] rounded-2xl bg-[#02AAF1] cursor-pointer" >Send Message</a>
  </motion.div>

        </div>
    
    </div>
  )
}

export default Contact
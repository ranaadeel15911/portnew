'use client'
import Image from "next/image";
import {motion} from "framer-motion"
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

import Typewriter from 'typewriter-effect';
export default function Home() {
  const textAnimate={
    offscreen:{y:-20,x:0, opacity:0},
    onscreen:{x:0,y:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:0.7,
  delay:0.5}
 }

}
const buttonAnimate = {
  initial:{opacity:0,y:150} ,
  animate:{opacity:1,y:0},
    transition:{ duration: 0.4,delay:0.2 ,type:'spring'}
}
  return (
    <>

    <div className="container grid grid-cols-1 sm:grid-cols-[2fr,1fr] items-center   min-h-[calc(100vh-75px)] overflow-hidden bg-black">
<motion.div className="text-white flex order-2 -mt-[calc(100vh-70vh)] sm:m-0 sm:order-none items-baseline sm:items-center">
<motion.div className="flex flex-col gap-2 sm:gap-2"


initial={["initial","offscreen"]}
whileInView={["animate","onscreen"]}
viewport={{once:true}}
transition={{staggerChildren:0.4}}


>
<motion.h1 variants={textAnimate} className="text-white text-sm md:text-xl lg:text-2xl font-bold anta-regular">Hello its Me</motion.h1>
<motion.h1  className="text-white text-xl md:text-2xl lg:text-4xl font-bold kanit-medium">RaNa Adeel</motion.h1>
<motion.h1  className="text-white text-sm md:text-xl lg:text-2xl font-bold anta-regular gap-3 flex">And I am a <Typewriter

  options={{
    wrapperClassName:'abcd',
    strings: [ 'Full Stack Developer.','Web Developer.', 'Software Engineer.',],
    autoStart: true,
    loop: true,
    cursorClassName:'curs'
  }}/>
 </motion.h1>
<motion.h1 className="hidden md:block" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae qui nihil eveniet fugiat 
  labore, velit nisi voluptas quo illum dolores ab nulla! Quis odio illum, dolor praesentium quo vitae nostrum.</motion.h1>
  <motion.div className="flex gap-3">
<div  className="border-[#02AAF1] out border size-7 sm:size-9 cursor-pointer hover:bg-[#02AAF1]  grid place-items-center rounded-full">
    <FaFacebookF color="#02AAF1" className="ins" />
</div>
<div className="border-[#02AAF1] out border size-7 sm:size-9 cursor-pointer hover:bg-[#02AAF1]  grid place-items-center rounded-full">
    <FaLinkedinIn color="#02AAF1" className="ins" />
</div>
<div className="border-[#02AAF1] out border size-7 sm:size-9 cursor-pointer hover:bg-[#02AAF1]  grid place-items-center rounded-full">
    <FaTwitter color="#02AAF1" className="ins" />
</div>
<div className="border-[#02AAF1] out border size-7 sm:size-9 cursor-pointer hover:bg-[#02AAF1]  grid place-items-center rounded-full">
    <PiGithubLogoFill color="#02AAF1"  className="ins"  />
</div>
  </motion.div>
  {/* <div className="border bg-[] w-16"> */}
  <motion.div variants={buttonAnimate}  className="mt-1 sm:mt-2 ">
<a href="/Muhammad's Resume11 (1).pdf" className="shayd w-[95px] sm:w-[120px] md:w-[120px] text-sm md:text-md  h-10 grid place-items-center text-black  ring-md ring-[#02AAF1] rounded-2xl bg-[#02AAF1] cursor-pointer" download={true}>Download CV</a>
  </motion.div>
  {/* </div> */}
</motion.div>
</motion.div>
<div className="flex justify-center sm:justify-between h-52 sm:h-auto  items-center order-1 sm:order-none">
<motion.img className="w-[180px] sm:w-auto sm:h-80 lg:h-auto m-0 sm:m-auto " src='/pic1.png' 
        
        initial={{y:0}}
    animate={{y:[0,27,0]}}
    transition={{
        duration:4,
        delay:2,
        repeat:Infinity
        
    }}
        >
        </motion.img>
</div>
    </div>
    </>
  );
}

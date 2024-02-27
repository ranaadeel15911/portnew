'use client'
import Link from 'next/link';
import React from 'react'
import {motion} from "framer-motion"
import { FaExternalLinkAlt } from "react-icons/fa";
const Portfolio = () => {
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
    const textAnimate2={
        offscreen:{y:50,x:0, opacity:0},
        onscreen:{x:0,y:0,
        opacity:1,
        transition: {type:"linear",
        bounce:0,
        duration:1,
        delay:0.1,
      }
     }
    
    }
  return (
    <div className='container flex flex-col gap-4 min-h-[calc(100vh-55px)]' >
                <motion.div initial={{opacity:0,x:0,y:-160}} animate={{opacity:1,x:0,y:5}} transition={{duration:0.2,delay:0}} className='text-white font-bold text-3xl text-center'>Latest <span className='text-main'>Projects</span></motion.div>
                <motion.div
                // initial={["initial","offscreen"]}
                // whileInView={["animate","onscreen"]}
                // viewport={{once:true}}
                // transition={{staggerChildren:0.4}}


                
                className='grid grid-cols-1 sm:grid-cols-[1fr,1fr,1fr] gap-6 text-white'>
                <motion.div 
                whileInView={"onscreen"}
                initial={"offscreen"}
                variants={textAnimate2}
                viewport={{once:true}}
                className="main w-full rounded-2xl h-64">
        <div className="desc gap-3 flex flex-col items-center">
            <h1 className='text-white font-bold anta-regular  text-2xl text-shadow'>Personal <span className='text-main'>Portfolio</span></h1>
            <p className='w-56 text-white anta-regular  text-center'>Lorem, ipsum dolor sit amet adipisicing elit. Eaque 
                 unde cupiditate nostrum fuga.</p>
                 <Link  href={''} className='border size-12 cursor-pointer bg-white rounded-full grid place-items-center'>
                    <FaExternalLinkAlt color='black'  />
                 </Link>
        </div>
        <div className="dove bg-[url(/pic3.jpeg)]">
            {/* <img src="/pic5.jpg"  alt=""/> */}
        </div>

    </motion.div>
                <motion.div whileInView={"onscreen"}
                initial={"offscreen"}
                variants={textAnimate2}
                viewport={{once:true}}
                className="main w-full rounded-2xl h-64">
        <div className="desc gap-3 flex flex-col items-center">
            <h1 className='text-white font-bold anta-regular  text-2xl text-shadow'>Complete <span className='text-main'>Authentication</span></h1>
            <p className='w-56 text-white anta-regular  text-center'>Lorem, ipsum dolor sit amet adipisicing elit. Eaque 
                 unde cupiditate nostrum fuga.</p>
                 <Link href={'https://authent-nextjs.vercel.app/'} target='_blank'  className='border size-12 cursor-pointer bg-white rounded-full grid place-items-center'>
                    <FaExternalLinkAlt color='black'  />
                 </Link>
        </div>
        <div className="dove bg-[url(/pic4.jpeg)]">
            {/* <img src="/pic5.jpg"  alt=""/> */}
        </div>

    </motion.div>
                <motion.div whileInView={"onscreen"}
                initial={"offscreen"}
                variants={textAnimate2} 
                viewport={{once:true}}
                className="main w-full rounded-2xl h-64">
        <div className="desc gap-3 flex flex-col items-center">
            <h1 className='text-white font-bold anta-regular  text-2xl text-shadow'>Blog <span className='text-main'>Webapp</span></h1>
            <p className='w-56 text-white anta-regular  text-center'>Lorem, ipsum dolor sit amet adipisicing elit. Eaque 
                 unde cupiditate nostrum fuga.</p>
                 <Link href={'https://blog-frontend-psi-six.vercel.app/'} target='_blank' className='border size-12 cursor-pointer bg-white rounded-full grid place-items-center'>
                    <FaExternalLinkAlt color='black'  href='https://blog-frontend-psi-six.vercel.app/'/>
                 </Link>
        </div>
        <div className="dove bg-[url(/pic5.jpg)]">
            {/* <img src="/pic5.jpg"  alt=""/> */}
        </div>

    </motion.div>
                <motion.div whileInView={"onscreen"}
                initial={"offscreen"}
                variants={textAnimate2} 
                viewport={{once:true}}
                className="main w-full rounded-2xl h-64">
        <div className="desc gap-3 flex flex-col items-center">
            <h1 className='text-white font-bold anta-regular  text-2xl text-shadow'>Ecommerce <span className='text-main'>Webapp</span></h1>
            <p className='w-56 text-white anta-regular  text-center'>Lorem, ipsum dolor sit amet adipisicing elit. Eaque 
                 unde cupiditate nostrum fuga.</p>
                 <Link href={'https://admin-panel-three-steel.vercel.app/'} target='_blank' className='border size-12 cursor-pointer bg-white rounded-full grid place-items-center'>
                    <FaExternalLinkAlt color='black'  href='https://admin-panel-three-steel.vercel.app/'/>
                 </Link>
        </div>
        <div className="dove bg-[url(/pic6.jpg)]">
            {/* <img src="/pic5.jpg"  alt=""/> */}
        </div>

    </motion.div>
                <motion.div whileInView={"onscreen"}
                initial={"offscreen"}
                variants={textAnimate2} 
                viewport={{once:true}}
                className="main w-full rounded-2xl h-64">
        <div className="desc gap-3 flex flex-col items-center">
            <h1 className='text-white font-bold anta-regular  text-2xl text-shadow'>Contact <span className='text-main'>Form</span></h1>
            <p className='w-56 text-white anta-regular  text-center'>Lorem, ipsum dolor sit amet adipisicing elit. Eaque 
                 unde cupiditate nostrum fuga.</p>
                 <Link href={'https://contact-frontend-one.vercel.app/'} target='_blank' className='border size-12 cursor-pointer bg-white rounded-full grid place-items-center'>
                    <FaExternalLinkAlt color='black'  href='https://contact-frontend-one.vercel.app/'/>
                 </Link>
        </div>
        <div className="dove bg-[url(/pic7.jpg)]">
            {/* <img src="/pic5.jpg"  alt=""/> */}
        </div>

    </motion.div>
                <motion.div whileInView={"onscreen"}
                initial={"offscreen"}
                variants={textAnimate2} 
                viewport={{once:true}}
                className="main w-full rounded-2xl h-64">
        <div className="desc gap-3 flex flex-col items-center">
            <h1 className='text-white font-bold anta-regular  text-2xl text-shadow'>Pagination <span className='text-main'>Integration</span></h1>
            <p className='w-56 text-white anta-regular  text-center'>Lorem, ipsum dolor sit amet adipisicing elit. Eaque 
                 unde cupiditate nostrum fuga.</p>
                 <Link href={'https://pagination-5git.vercel.app/'} target='_blank' className='border size-12 cursor-pointer bg-white rounded-full grid place-items-center'>
                    <FaExternalLinkAlt color='black'   target='blank' />
                 </Link>
        </div>
        <div className="dove bg-[url(/pic8.png)]">
            {/* <img src="/pic5.jpg"  alt=""/> */}
        </div>

    </motion.div>
                </motion.div>

    </div>
  )
}

export default Portfolio
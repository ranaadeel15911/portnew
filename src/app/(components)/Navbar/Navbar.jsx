'use client';
import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import "../style.css"
function Component() {
const pathname = usePathname()
console.log(pathname)
    const [stat,setStat] = useState(false)
  return (
    // <div className='bg-black'>

    // <Navbar className='container overflow-x-clip !bg-black sticky top-0  z-30'>
    //   <Navbar.Brand as={Link} href="https://flowbite-react.com">
    //     <span className="hidden sm:block text-xl -ml-3 font-semibold text-white dark:text-white ">Portfolio</span>
    //   </Navbar.Brand>
    //   <Navbar.Toggle  />
    //   <Navbar.Collapse className='absolute md:static top-9  left-3 '>
    //     <Navbar.Link  href="/" as={Link} className={pathname == '/' ? 'active hover:!text-main w-80 sm:w-auto ' : 'hover:!text-main' }>
    //       Home
    //     </Navbar.Link>
    //     <Navbar.Link className={pathname == '/about' ? 'active hover:!text-main w-80 sm:w-auto ' : 'hover:!text-main w-80 sm:w-auto' } as={Link}  href="/about">
    //       About
    //     </Navbar.Link>
    //     <Navbar.Link  as={Link} className={pathname == '/services' ? 'active hover:!text-main w-80 sm:w-auto' : 'hover:!text-main w-80 sm:w-auto' && stat ? "hidden" :"block"} href="/services">Services</Navbar.Link>
    //     <Navbar.Link as={Link} className={pathname == '/portfolio' ? 'active hover:!text-main w-80 sm:w-auto' : 'hover:!text-main w-80 sm:w-auto' } href="/portfolio">Portfolio</Navbar.Link>
    //     <Navbar.Link as={Link} className={pathname == '/contact' ? 'active hover:!text-main w-80 sm:w-auto' : 'hover:!text-main w-80 sm:w-auto' } href="/contact">Contact</Navbar.Link>
    //   </Navbar.Collapse>
    // </Navbar>
    // </div>
      <div className="container sticky top-0 bg-transparent backdrop-blur-md z-30 flex  justify-start sm:justify-between ">
        <div className='hidden sm:block text-xl -ml-3 font-semibold text-white dark:text-white'>
Portfolio.
        </div>
        <div className='flex tdm gap-3 text-sm xxsm:text-base  -mr-5 sm:-mr-0 mt-2 sm:mt-0 xxsm:gap-5 xsm:gap-6 sm:gap-3 lg:gap-4  items-center justify-center  '>
          <Link href={'/'} id='abc' className={pathname == '/' ? 'active hover:!text-main  sm:w-auto ' : 'hover:!text-main'}>Home</Link>
          <Link href={'/about'} id='abc' className={pathname == '/about' ? 'active hover:!text-main  sm:w-auto ' : 'hover:!text-main  sm:w-auto !text-white' }>About</Link>
          <Link href={'/services'} id='abc' className={pathname == '/services' ? 'active hover:!text-main  sm:w-auto' : 'hover:!text-main  sm:w-auto'}>Services</Link>
          <Link href={'/portfolio'} id='abc' className={pathname == '/portfolio' ? 'active hover:!text-main  sm:w-auto' : 'hover:!text-main  sm:w-auto' }>Portfolio</Link>
          <Link href={'contact'} id='abc' className={pathname == '/contact' ? 'active hover:!text-main  sm:w-auto' : 'hover:!text-main  sm:w-auto' }>Contact</Link>

        </div>

      </div>

  );
}
export default Component

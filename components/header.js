import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
const Header = () => {
    const router = useRouter();

  return (
        <>
        <div className='bg-black bg-opacity-60 flex items-center justify-center  self-center w-full border-b-2 border-cyan-400'>
            <div className='flex items-center justify-center md:justify-between max-w-7xl w-full h-14 px-10'>
                    <Link href={"/"}>
                        <div className='text-white flex text-2xl font-medium'>
                            <div className='text-cyan-400'>K</div>
                            <div>ann</div>
                        </div>
                    </Link>
                <ul className='hidden md:flex space-x-2 text-white text-lg font-medium'>
                    <li className={`${router.pathname === '/' ?   'text-cyan-400' : 'text-white'}`}>                   
                    <div className='mx-3 hover:text-cyan-400 cursor-pointer  '><Link href={"/"}> Home</Link></div>
                    </li>
                    <li className={`${router.pathname === '/contact' ?   'text-cyan-400' : 'text-white'}`}>
                    <div className='mx-3 hover:text-cyan-400 cursor-pointer '><Link href={"/contact"}>Contact Us</Link></div>
                    </li>
                    <li className={`${router.pathname === '/about' ?   'text-cyan-400' : 'text-white'}`}>
                    <div className='mx-3 hover:text-cyan-400 cursor-pointer '><Link href={"/about"}> About</Link></div>
                    </li>
                    <li className={`${router.pathname === '/hotel/login' ?  ' text-red-400' : 'text-white'}`}>
                    <Link href={"/hotel/login"} className='bg-blue-900 px-3 py-1 rounded hover:bg-indigo-800 shadow-xl '>Hotel</Link>
                    </li>
                    <li className={`${router.pathname === '/community/login' ?  ' text-indigo-900' : 'text-white'}`}>
                    <Link href={"/community/login"} className='bg-yellow-700 px-2 py-1 rounded hover:bg-yellow-800 shadow-xl'>Community</Link>
                    </li>
                </ul>
            
            </div>
        </div>
        </>
  )
}

export default Header
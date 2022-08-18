import Layout from '../pages/components/Layout'
import VisualDesign from '../../portfolio-nextapp/public/icons/visual-design.svg'
import UX from '../../portfolio-nextapp/public/icons/ux.svg'
import Frontend from '../../portfolio-nextapp/public/icons/programming.svg'
import Books from '../../portfolio-nextapp/public/icons/books.svg'
import Figma from '../../portfolio-nextapp/public/icons/figma.svg'
import Reactlogo from '../../portfolio-nextapp/public/icons/react.svg'
import styles from '../styles/Home.module.css'
import {FaChevronRight} from 'react-icons/fa'
import { MediumContext } from '../context/MediumContext'
import { useContext } from 'react'

import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  const {posts, users} = useContext(MediumContext)
  const myLoader = ({ src, width, quality }) => {
  return `http://unsplash.it/600/500?random&gravity=center`
}

  return (
    <Layout title="Home">
      <div className='mt-20'>
      <h1 className='font-bold text-3xl'>Hi Friends 👋</h1>
      <p className='text-3xl font-light'>I am Nandan, UX Designer and <br/> Frontend Developer</p>
      </div>
     
     {/* Subscribe */}
      <div className=" mt-3  flex  flex-row  flex-wrap w-2/5">
      <input type="text" className=" text-gray-600  w-2/3  p-2 rounded-r-none rounded-md" placeholder="Enter Email"/>
      <button className=" p-2 w-1/3 bg-gray-400  rounded-l-none rounded-md  text-black font-semibold hover:bg-gray-300" type="button">Subscribe</button>
    </div>

     {/* Header content */}
      <p className='text-sm w-7/8 text-gray-400 pt-6'>
        On this site we explore different processes in UX and best practices in Development and some side projects I do. I share weekly newsletters for in various tech topics. Signup below in the community of friendly readers.
      </p>

      {/* Icons */}
      <>
        <h1 className='font-bold text-3xl pt-10'><span className='font-light'>A Better</span> Experience  🛠️</h1>
        <div className='grid grid-cols-4 gap-1 w-3/4 pt-6'>
          
          <Link href="/visualdesign">
            <a className='text-center hover:underline'>
              <Image src={VisualDesign} alt="UI" width="74px" height="74px"/>
            <p className='text-sm text-gray-400 text-semibold'>Visual Design</p>
            </a>
          </Link>
          <Link href="/ux">
            <a className='text-center hover:underline'>
              <Image src={UX} alt="UI" width="74px" height="74px"/>
            <p className='text-sm text-gray-400 text-semibold'>User Experience</p>
            </a>
          </Link>
          <Link href="/frontend">
            <a className='text-center hover:underline'>
              <Image src={Frontend} alt="UI" width="74px" height="74px"/>
            <p className='text-sm text-gray-400 text-semibold'>Frontend <br /> Development</p>
            </a>
          </Link>
          <Link href="/books">
            <a className='text-center hover:underline'>
              <Image src={Books} alt="UI" width="74px" height="74px"/>
            <p className='text-sm text-gray-400 text-semibold'>Book <br /> Summaries</p>
            </a>
          </Link>
        </div>
      </>
    
    {/* Case Studies */}
      <>
      <h1 className='font-bold text-3xl pt-10'><span className='font-light'>UX</span> Case Studies  📑</h1>
      <p className='text-sm w-7/8 text-gray-400 pt-4'>
        On this site we explore different processes in UX and best practices in Development and some side projects I do. I share weekly newsletters for in various tech topics. Signup below in the community of friendly readers.
      </p>

      {/* Budget App */}
      <div className='grid grid-cols-2 gap-3 pt-8'>
        {/* Image */}
        <Image loader={myLoader} src={UX} alt="Budget App" width="120px" height="200px"/>
        {/* Box Content */}
        <div className='pl-4'>
          <h1 className='font-bold text-xl text-gray-400'>Budget App</h1>
          <p className='text-sm text-gray-400 pt-2'>Problem: Here I share resources on different sections and practical applications on each fields.</p>
          {/* Buttons */}
          <div className='flex flex-row justify-start pt-3'>
            <button className='outline outline-1 offset-1 rounded-full px-2 text-sm outline-gray-500 text-gray-400'>UX</button>
            <button className='outline outline-1 offset-1 rounded-full px-2 text-sm outline-gray-500 text-gray-400 mx-3'>UI</button>
            <button className='outline outline-1 offset-1 rounded-full px-2 text-sm outline-gray-500 text-gray-400'>Development</button>
          </div>
          {/* Toolset */}
          <div className='flex flex-row justify-start items-center pt-4'>
            <p className='text-sm font-bold text-gray-400 pt-3 pr-2'>Toolset</p>
            <Image src={Figma} alt="Figma" width="24px" height="24px"/>
            <Image src={Reactlogo} alt="Figma" width="24px" height="24px"/>
          </div>
        </div>
      </div>
{/* Another App */}
      <div className='grid grid-cols-2 gap-3 pt-8'>
        {/* Box Content */}
        <div className='pr-4'>
          <h1 className='font-bold text-xl text-gray-400'>Banking App</h1>
          <p className='text-sm text-gray-400 pt-2'>Problem: Here I share resources on different sections and practical applications on each fields.</p>
          {/* Buttons */}
          <div className='flex flex-row justify-start pt-3'>
            <button className='outline outline-1 offset-1 rounded-full px-2 text-sm outline-gray-500 text-gray-400'>UX</button>
            <button className='outline outline-1 offset-1 rounded-full px-2 text-sm outline-gray-500 text-gray-400 mx-3'>UI</button>
            <button className='outline outline-1 offset-1 rounded-full px-2 text-sm outline-gray-500 text-gray-400'>Development</button>
          </div>
          {/* Toolset */}
          <div className='flex flex-row justify-start items-center pt-4'>
            <p className='text-sm font-bold text-gray-400 pt-3 pr-2'>Toolset</p>
            <Image src={Figma} alt="Figma" width="24px" height="24px"/>
            <Image src={Reactlogo} alt="Figma" width="24px" height="24px"/>
          </div>
        </div>
        {/* Image */}
        <Image loader={myLoader} src={UX} alt="Budget App" width="120px" height="200px"/>
      </div>

      {/* More button */}
        <Link href="/ux">
          <div className='flex flex-row justify-end items-center pt-4 text-sm hover:underline'>
          <button className='flex flex-row justify-end items-end'>More</button>
          <FaChevronRight />
          </div>
        </Link>
      
      </>
      
      {/* Visual Designs section */}
      <>
      <h1 className='font-bold text-3xl pt-16'><span className='font-light'>Visual</span> Designs  🖍️</h1>
      <div className=" pt-6 grid grid-cols-3 gap-1">
        <div className='grid col-span-2'>
          <div className={styles.column}></div>
        </div>
        <div className=''>
          <div className={styles.column2}></div>
        </div>
        <div className=''>
          <div className={styles.column}></div>
        </div>
         <div className=''>
          <div className={styles.column2}></div>
        </div>
        <div className=''>
          <div className={styles.column}></div>
        </div>
        
         
      </div>
      {/* More button */}
        <Link href="/visualdesign">
          <div className='flex flex-row justify-end items-center pt-4 text-sm hover:underline'>
          <button className='flex flex-row justify-end items-end'>More</button>
          <FaChevronRight />
          </div>
        </Link>
      
      </>
      

      {/* Latest Articles */}
      <div className='grid grid-cols-3 gap-8'>
      <div className='grid col-span-2'>
      <h1 className='font-bold text-3xl pt-14'><span className='font-light'>Latest</span> Articles  🗞️</h1>
      <div className=''>
        <div className='border-t border-white mt-3'>
        <h2 className='font-bold text-md pt-2'>How to use Reack Hooks?</h2>
        <p className='italic text-gray-400'>Development</p>
      </div>
      <div className='border-t border-white mt-3'>
        <h2 className='font-bold text-md pt-2'>How to create Design Systems?</h2>
        <p className='italic text-gray-400'>Visual Design</p>
      </div>
      <div className='border-t border-white mt-3'>
        <h2 className='font-bold text-md pt-2'>What is User-centered Design?</h2>
        <p className='italic text-gray-400'>User Experience</p>
      </div>
      <div className='border-t border-white mt-3'>
        <h2 className='font-bold text-md pt-2'>How to create Identity?</h2>
        <p className='italic text-gray-400'>Book Summaries</p>
      </div>
       <div className='border-t border-white mt-3'>
      </div>
      </div>

      </div>
        {/* Explore Section */}
      <div>
        <h1 className='font-bold text-3xl pt-14 pl-4'><span className='font-light'></span> Explore  🧭</h1>
        <div className='grid grid-row-4 gap-4 w-3/4 pt-4'>
          
          <Link href="/visualdesign">
            <a className='grid grid-cols-2 hover:underline items-center'>
              <Image src={VisualDesign} alt="UI" width="54px" height="54px"/>
            <p className='text-sm leading-1 text-gray-400'>Visual <br /> Design</p>
            </a>
          </Link>
          <Link href="/ux">
            <a className='grid grid-cols-2 hover:underline items-center'>
              <Image src={UX} alt="UI" width="54px" height="54px"/>
            <p className='text-sm leading-1 text-gray-400'>User Experience</p>
            </a>
          </Link>
          <Link href="/frontend">
            <a className='grid grid-cols-2 hover:underline items-center'>
              <Image src={Frontend} alt="UI" width="54px" height="54px"/>
            <p className='text-sm leading-1 text-gray-400'>Frontend Development</p>
            </a>
          </Link>
          <Link href="/books">
            <a className='grid grid-cols-2 hover:underline items-center'>
              <Image src={Books} alt="UI" width="54px" height="54px"/>
            <p className='text-sm leading-1 text-gray-400'>Book <br /> Summaries</p>
            </a>
          </Link>
        </div>
      </div>
      </div>

      {/* News Letter*/}
      <div className='bg-purple-500 mt-12 flex flex-col justify-center items-center'>
      <h1 className='font-bold text-3xl pt-12'><span className='font-light'>Subscribe to</span> Weekly Snippets  📮</h1>
      <p className='text-sm text-white py-4 w-3/4 text-center'>
        On this site we explore different processes in UX and best practices in Development and some side projects I do. I share weekly newsletters for in various tech topics. 
      </p>
      {/* Subscribe */}
      <div className=" mt-3  flex  flex-row  flex-wrap w-2/5 pb-12">
      <input type="text" className=" text-gray-600  w-2/3  p-2 rounded-r-none rounded-md" placeholder="Enter Email"/>
      <button className=" p-2 w-1/3 bg-white rounded-l-none rounded-md  text-purple-500 font-semibold hover:bg-gray-400 hover:text-gray-800" type="button">Subscribe</button>
    </div>
      
      </div>
      


    </Layout>
  )
}

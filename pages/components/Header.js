import Link from 'next/link'
import React, { Component, useContext, useEffect } from 'react'
import { MediumContext } from '../../context/MediumContext'
import { useRouter } from 'next/router'
import {ProtectedRoute} from '../components/ProtectedRoute'
// import ProtectedRoute from './ProtectedRoute'

const Header = () => {

  const {currentUser, handleUserAuth} = useContext(MediumContext)

  useEffect(() => {
    if(currentUser){
      console.log(currentUser)
    } else if (currentUser === null){
      router.push('/')
    }
  }, [currentUser])

  return (
    <div className='flex flex-row justify-between items-center h-14 shadow bg-gray-900'>
        <div className='font-bold pl-5'>
          {/* <Link href="/">GN</Link> */}
          {currentUser ? <Link href="/signin">GN</Link> : <Link href="/">GN</Link>}
          {/* <ProtectedRoute href="/"/> */}
        </div>

        <nav>
          <ul className='flex flex-row justify-start'>
            <li className='mx-2 pr-5 text-sm'>
              {/* <Link href="/about">About</Link> */}
              {currentUser ? <Link href="/signin">About</Link> : <Link href="/about">About</Link>}
              {/* <ProtectedRoute exact path="/about" component={Home}/> */}
            </li>
            <li className='mx-2 pr-5 text-sm'>
            <button>
              {/* <Link href="/signin">Sign In</Link> */}
              {currentUser ? <Link href="/signin">Sign In</Link> : <Link href="/signin">Sign In</Link>} 
              
            </button>
            </li>
            
          </ul>
        </nav>
      </div>
  )
}
export default Header

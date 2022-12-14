import Link from 'next/link'
import React, { Component, useContext, useEffect } from 'react'
import { MediumContext } from '../../context/MediumContext'
import { useRouter } from 'next/router'
import {ProtectedRoute} from '../components/ProtectedRoute'
// import ProtectedRoute from './ProtectedRoute'

const Header = () => {

  const {currentUser, setCurrentUser, handleUserAuth, signOut} = useContext(MediumContext)

  console.log(currentUser)

  return (
    <div className='flex flex-row justify-between items-center h-14 shadow bg-gray-900'>
        <div className='font-bold pl-5'>
          {/* <Link href="/">GN</Link> */}
          {currentUser==null ? <Link href="/signin">GN</Link> : <Link href="/">GN</Link>}
          {/* <ProtectedRoute href="/"/> */}
        </div>

        <nav>
          <ul className='flex flex-row justify-start'>
            <li className='mx-2 pr-5 text-sm'>
              {/* <Link href="/about">About</Link> */}
              {currentUser==null ? <Link href="/signin">About</Link> : <Link href="/about">About</Link>}
              {/* <ProtectedRoute exact path="/about" component={Home}/> */}
            </li>
            <li className='mx-2 pr-5 text-sm'>
            <button>
              {/* <Link href="/signin">Sign In</Link> */}
              {currentUser==null ? <Link href="/signin">Sign In</Link> : <button onClick={signOut}>Sign Out</button>} 
              
            </button>
            </li>
            
          </ul>
        </nav>
      </div>
  )
}
export default Header

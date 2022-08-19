import Link from 'next/link'
import React, { Component, useContext } from 'react'
import { MediumContext } from '../../context/MediumContext'



const Header = () => {

  const {currentUser, handleUserAuth} = useContext(MediumContext)

  return (
    <div className='flex flex-row justify-between items-center h-14 shadow bg-gray-900'>
        <div className='font-bold pl-5'>
          <Link href="/">GN</Link>
        </div>

        <nav>
          <ul className='flex flex-row justify-start'>
            <li className='mx-2 pr-5 text-sm'>
              <Link href="/about">About</Link>
            </li>
            <li className='mx-2 pr-5 text-sm'>
            <button onClick={handleUserAuth}>
              <Link href="/">Sign in</Link>
            </button>
            </li>
            
          </ul>
        </nav>
      </div>
  )
}
export default Header

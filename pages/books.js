import React, { Component, useEffect, useState, useContext } from 'react'
import Layout from './components/Layout'

import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../firebase'
import Link from 'next/link'
import { MediumContext } from '../context/MediumContext'
import BookPost from '../pages/bookpost'


    export default function Books() {
      const {posts, users, books} = useContext(MediumContext)

      return (
       <Layout>
        <div className="flex flex-col justify-start items-center h-96">
            <h1 className='py-6'>Books</h1>

              <Link href={`/books/${books.id}`}>
                  <div className='flex flex-row justify-start'>
              {books.map((book, key) => (
                <BookPost book={book} key={book.key}/>
              ))
              }
            </div>
            </Link>
            
        </div>
      </Layout>
      )
    }
    

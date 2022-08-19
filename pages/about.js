import React, { Component, useContext, useEffect, useState} from 'react'
import Layout from './components/Layout'
import {MediumContext} from '../context/MediumContext'

import { data } from 'autoprefixer'

import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../firebase'

import Link from 'next/link'


export default function About() {
    // const {users, posts} = useContext(MediumContext)
  return (
   <Layout title="Girish Nandan Biography">
        <div className="flex flex-col justify-start items-center h-96">
            <h1>About</h1>
        </div>
      </Layout>
  )
}
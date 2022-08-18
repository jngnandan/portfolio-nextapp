import React, { Component, useContext, useEffect, useState} from 'react'
import Layout from './components/Layout'
import {MediumContext} from '../context/MediumContext'

import { data } from 'autoprefixer'
import Sample from './sample'

import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../firebase'


export default function About() {
    // const {users, posts} = useContext(MediumContext)
    const [author, setAuthor] = useState([])

    useEffect(() => {
        const getPages = async () => {
        const querySnapshot = await getDocs(collection(db, 'articles'))
        setAuthor(querySnapshot.docs.map(doc => {
            return{
                id: doc.id,
                data: {
                    body: doc.data().body,
                    brief: doc.data().brief,
                    title: doc.data().title,
                    author: doc.data().author,
                }
            }
        }))
    }
    getPages()
}, [])

console.log(author[0])


    const cool = [{name: "Title was there", body: "Hello there was a body", brief: "Brief was there", author: "Author was there"}]
    console.log(cool[0].title)

  return (
   <Layout title="Girish Nandan Biography">
        <div className="flex flex-col justify-start items-center h-96">
            <h1>About</h1>

            <div>
              {author.map((item, key) =><li key={item.id}>{item.data.author}</li>)}
            </div>
        </div>
      </Layout>
  )
}
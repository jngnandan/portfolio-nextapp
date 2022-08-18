import React, { Component } from 'react'
import Layout from './components/Layout'
// import {MediumContext} from '../context/MediumContext'
import {createContext, useEffect, useState} from 'react'
import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../firebase'


function BlogPost({post}) {
       const [posts, setPosts] = useState('')

    useEffect(() => {
        const getPages = async () => {
        const querySnapshot = await getDocs(collection(db, 'articles'))
        setPosts(querySnapshot.docs.map(doc => {
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
}, [post])



  return (
    <div>
        <p>Hii</p>
    </div>
  )
}

export default BlogPost



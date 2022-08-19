import React, { Component } from 'react'
import {createContext, useEffect, useState} from 'react'

const MediumContext = createContext()


import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../firebase'



const MediumProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() => {
    const getUsers = async () => {
        const querySnapshot = await getDocs(collection(db, 'users'))
        setUsers(querySnapshot.docs.map(doc => {
            // console.log(doc.data())
            return{
                id: doc.id,
                body: {
                  ...doc.data()  
                }}}   
            ))
    } 
    getUsers()  
}, [])

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
}, [])

useEffect(() => {
        const getBooks = async () => {
        const querySnapshot = await getDocs(collection(db, 'books'))
        setBooks(querySnapshot.docs.map(doc => {
            return{
                id: doc.id,
                data: {
                    title: doc.data().title,
                    author: doc.data().author,
                }
            }
        }))
    }
    getBooks()
}, [])


return(
    <MediumContext.Provider value={{users, posts, books}}>
        {children}
    </MediumContext.Provider>
)
}
export {MediumContext, MediumProvider}
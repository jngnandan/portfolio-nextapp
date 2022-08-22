import React, { Component } from 'react'
import {createContext, useEffect, useState} from 'react'

const MediumContext = createContext()


import {collection, getDocs, setDoc, doc, query, getFirestore} from 'firebase/firestore'
import {db, auth, provider} from '../firebase'
import { signInWithPopup } from 'firebase/auth'



const MediumProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [books, setBooks] = useState([])
    const [currentUser, setCurrentUser] = useState([])

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



const addUserToFirebase = async user => {
    
    const db = getFirestore();
    const dbRef = collection(db, "users");
    const data = {
   email: user.email,
    name: user.displayName,
    imgUrl: user.photoURL,
};
    await setDoc(doc(dbRef, user.email), data);
    // await setDoc(doc(db, 'users', user), {
    //     email: user.email,
    // })
};


const handleUserAuth = async () => {
    const userData = await signInWithPopup(auth, provider)
    const user = userData.user
    console.log(user)
    setCurrentUser(user)
    addUserToFirebase(user)
}


return(
    <MediumContext.Provider value={{users, posts, books, currentUser, handleUserAuth}}>
        {children}
    </MediumContext.Provider>
)
}
export {MediumContext, MediumProvider}
import React, { Component } from 'react'
import {createContext, useEffect, useState} from 'react'

const MediumContext = createContext()


import {collection, getDocs, setDoc, doc, query} from 'firebase/firestore'
import {db} from '../firebase'



const MediumProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
    const getUsers = async () => {
        const querySnapshot = await getDocs(collection(db, 'users'))
        querySnapshot.docs.map(doc => 
            console.log(doc.data()))
    } 
    getUsers()  
}, [])
return(
    <MediumContext.Provider value={{users, posts}}>
        {children}
    </MediumContext.Provider>
)
}
export {MediumContext, MediumProvider}
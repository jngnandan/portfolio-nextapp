import Link from 'next/link'
import { MediumContext } from '../../context/MediumContext'
import { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout'

import {getFirestore, collection, getDoc, setDoc, doc, query, where, getDocs} from 'firebase/firestore'
import {db} from '/firebase'
import { useRouter } from 'next/router'
import firebase from '/firebase'


const BookItem  = ({post}) => {
    // const {book, key} = props
    const {posts, users, books} = useContext(MediumContext)
    const [author, setAuthor] = useState([])
     const { query } = useRouter();

     
     useEffect(() => {
        const getBooks = async () => {
        const querySnapshot = await getDocs(collection(db, 'books'))
        querySnapshot.docs.map(doc => doc.id === query.slug && setAuthor(doc.data()))
        
    }
    getBooks()
}, [])

  console.log(author)



    return(
        <Layout>
        <div className='my-12'>
            <h1 className='text-2xl'>{author.title}</h1>
            <p className='my-4'>{author.author}</p>
        </div>

        </Layout>
        
       
    )
}
export default BookItem;
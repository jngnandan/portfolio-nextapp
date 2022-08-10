// import React, { Component } from 'react'
import Link from 'next/link'
import styles from '../../styles/Layout.module.css'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

import React from 'react'

export default function Layout({ children, title, description, keywords, content }) {
  return (
    <div className=''>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={content}/>
        </Head>

        <Header />
        <div className=''>
          <div className='mx-24'>{children}</div>
        </div>
        
        
        <Footer />
      </div>
  )
}

Layout.defaultProps = {
    title: 'UX Designer Portfolio',
    description: 'Brief description of the website',
    keywords: 'User Experience, Developer, Portfolio',
    content: 'User experience'
}
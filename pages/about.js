import React, { Component } from 'react'
import Link from 'next/Link'
import Layout from './components/Layout'


export class About extends Component {
  render() {
    return (
      <Layout title="Girish Nandan Biography">
        <div className="flex flex-col justify-center items-center h-96">
            <h1>About</h1>
        </div>
        
      </Layout>
    )
  }
}

export default About
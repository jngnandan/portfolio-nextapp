import React, { Component } from 'react'
import Layout from '../pages/components/Layout'

export class Books extends Component {
  render() {
    return (
      <Layout>
        <div className="flex flex-col justify-center items-center h-96">
            <h1>Books</h1>
        </div>
      </Layout>
    )
  }
}

export default Books
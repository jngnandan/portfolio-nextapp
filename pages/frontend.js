import React, { Component } from 'react'
import Layout from '../pages/components/Layout'
export class Frontend extends Component {
  render() {
    return (
      <Layout>
        <div className="flex flex-col justify-center items-center h-96">
            <h1>Frontend</h1>
        </div>
      </Layout>
    )
  }
}

export default Frontend
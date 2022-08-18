import React, { Component, useContext} from 'react'
import Layout from './components/Layout'
import {MediumContext} from '../context/MediumContext'
import BlogPost from '../pages/blogpost'
import { data } from 'autoprefixer'


export default function About() {
    const {users, posts} = useContext(MediumContext)
    console.log(posts)
  return (
   <Layout title="Girish Nandan Biography">
        <div className="flex flex-col justify-start items-center h-96">
            <h1>About</h1>
            {posts.map(post => {
              <BlogPost post={post}/>
            })}
        </div>
        
      </Layout>
  )
}


// export class About extends Component {  
//   render() {
       
//     return (
//       <Layout title="Girish Nandan Biography">
//         <div className="flex flex-col justify-center items-center h-96">
//             <h1>About</h1>
//         </div>
        
//       </Layout>
//     )
//   }
// }
// export default About
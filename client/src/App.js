import React, {useState, useEffect} from 'react'
import Nav from './Nav'
import axios from 'axios'
import {Link} from 'react-router-dom'
import renderHTML from 'react-render-html'
import {getUser, getToken} from './helpers'


const App = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    axios.get(`${process.env.REACT_APP_API}/posts`)
    .then(response => {
      // console.log(response)
      setPosts(response.data)
    })
    .catch(error => alert ('Error fetching posts'))
  }
  useEffect(()=> {
    fetchPosts()
  }, [])

const deleteConfirm = (slug) => {
  let answer = window.confirm('Are you sure you want to delete this post?')
  if(answer) {
    deletePost(slug)
  }
}

const deletePost = (slug) => {
  // console.log('delete', slug, 'post')
  axios.delete(`${process.env.REACT_APP_API}/post/${slug}`,{
    headers: {
        authorization: `Bearer ${getToken()}`
    }
  })
  .then(response => {
    alert(response.data.message)
    fetchPosts()
  })
  .catch(error => alert('Error deleting post'))
}

  return (
  <div className="col-lg-6 offset-lg-3" >
    <div className="row justify-content-center">
    
    <Nav/>
  
    <h1 className='display-1 mt-5'>Notas </h1>
    {
      posts.map((post, i) => (
        <div className="row" key={post._id} style={{borderBottom: '1px solid blue'}}>
          <div className="col pt-3 pb-2">
            <div className="row">
              <div className="col-md-10">
                <Link to={`/post/${post.slug}`} ><h2>{post.title}</h2></Link>
                <div className="lead pt-3">{renderHTML(post.content.substring(0, 100))}</div>
                <p className='font-weight-bolder'>Author: <span className="badge badge-secondary">{post.user}</span> Published on: {' '} 
                <span className="badge badge-pill badge-light">{new Date(post.createdAt).toLocaleString()}</span>
                </p>
              </div>
               {getUser() && (
                 <div className="col-md-2">
                 <Link to={`/post/update/${post.slug}`} className="btn btn-sm btn-outline-warning">
                    Update
                 </Link>
                 
                 <button  
                 onClick={() => deleteConfirm(post.slug)} 
                 className="btn btn-sm btn-outline-danger ml-1 delete">
                   Delete</button>
                </div>
               )}
            </div>
          </div>
        </div>
      ))
    }
    </div>
  </div>
  )
}


export default App;




       

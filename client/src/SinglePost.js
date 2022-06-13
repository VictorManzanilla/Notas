import React, {useState, useEffect} from 'react'
import axios from'axios'
import Nav from './Nav'
import renderHTML from 'react-render-html'
import './main.css'


const SinglePost = (props) => {

    const [post, setPost] = useState('')

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
        .then(response => {
            //console.log(response)
            setPost(response.data)
        })
        .catch(error => alert('Error loading single post'))
    }, [props.match.params.slug])

    const showSinglePost = () => (
        <div className="row">
            <div className="col-md-8 offset-md-2 mt-5 pt-5">
                <h1>{post.title}</h1>
                <div className="lead pt-3">{renderHTML(post.content)}</div>
                <p>
                    Author<span className="badge">{post.user}</span> Published on{' '} 
                    <span className="badge">{new Date(post.createdAt).toLocaleString()}</span>
                </p>
                {/* {JSON.stringify(props)} */}
                
            </div>
       </div>
    )

    //post && showSinglePost why? post is available by running the useEffect, so the function renderHTML tries to render before there is any content
    // so we get error when we have {renderHTML(post.content)} in the div classname lead pt-3.
    return(
        <div className="container ">
            <Nav/>
            {post && showSinglePost()}
        </div>
    )

}
export default SinglePost
import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {getUser, logout} from './helpers'

const Nav = ({history}) => {
  return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" as={Link} to="/">Home</a>
          
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active"  href="/create" as={Link} to="/create">Create Note</a>
              </li>
              
        {!getUser() && (
                    <li className="nav-item">
                        <a className="nav-link active" href="/login" as={Link} to="/login">Login</a>

                </li>
               )}
               <li className="nav-item">
                        <a className="nav-link active" href="/register" as={Link} to="/login">Register</a>

                </li>
               {getUser() && (
                    <li onClick={() => logout(() => history.push('/'))} className="nav-item">
                      <a className="nav-link active" href="/" as={Link} to="/">Logout</a>
                    
                </li>
               )}
              </ul>
            </div>
          </div>
        </nav>
                
  )

}

export default withRouter(Nav)
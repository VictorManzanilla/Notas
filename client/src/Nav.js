import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {getUser, logout} from './helpers'

const Nav = ({history}) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
               {getUser() && (
                    <li onClick={() => logout(() => history.push('/'))} className="nav-item">
                      <a className="nav-link active" href="/" as={Link} to="/">Logout</a>
                    
                </li>
               )}
      </ul>
    </div>
  </div>
</nav>

            
            // <ul className="nav nav-tabs">
            //     <li className="nav-item pr-3 pt-3 pb-3">
            //         <Link to="/">Home</Link>
            //     </li>
                
            //     <li className="nav-item pr-3 pt-3 pb-3">
            //         <Link to="/create">Create Post</Link>
            //     </li>
            //    {!getUser() && (
            //         <li className="nav-item ml-auto pr-3 pt-3 pb-3">
            //         <Link to="/login">Login</Link>
            //     </li>
            //    )}
            //    {getUser() && (
            //         <li onClick={() => logout(() => history.push('/'))} className="nav-item ml-auto pr-3 pt-3 pb-3">
            //         logout
            //     </li>
            //    )}
            // </ul>
          
            // </nav>
        
    )

}

export default withRouter(Nav)
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import Create from './Create'
import SinglePost from './SinglePost'
import UpdatePost from './UpdatePost'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import './main.css'
import Register from './Register'


const Routes = () => {
  
    return(
        <div className="foto">
        
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App} />
            <PrivateRoute path="/create"  exact component={Create} />
            <Route path="/login"  exact component={Login} />
            <Route path="/post/:slug"  exact component={SinglePost} />
            <PrivateRoute path="/post/update/:slug"  exact component={UpdatePost} />
            <Route path="/register" exact component={Register} />


        </Switch>
        </BrowserRouter>
        
        </div>
    )
}

export default Routes
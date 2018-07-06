import React from 'react';
import { HashRouter,Switch,Route } from 'react-router-dom';

import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Auth from './component/Auth/Auth';
import Post from './component/Post/Post'

export default function (){
    return(
      <HashRouter>
        <Switch>
          <Route component={Auth} path='/' exact />
          <Route component={Dashboard} path='/dashboard'/>
         <Route component={Post} path='/post/:postid' exact />
          <Route component={Form} path='/new' /> 
        </Switch>
      </HashRouter>  
    )
  }
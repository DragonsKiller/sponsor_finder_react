import React from 'react';
import { Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import Layout from './components/Layout';
import Ideas from './components/ideas/Ideas';
import ManageIdeaPage from './components/ideas/ManageIdeaPage';
import IdeaEdit from './components/ideas/IdeaEdit';
import Idea from './components/ideas/Idea';
import LoginPage from './components/auth/LoginPage';


function requireAuth(nextState) {
  //localStorage.clear();
  console.log(localStorage);
  localStorage.getItem('user')
      ? console.log("login")
      : browserHistory.replace("/login")
}

export default (
  <Route path = "/" component = { Layout }>
    <IndexRoute component = { Ideas } onEnter={requireAuth}/>
    <Route path = "login" component = { LoginPage } />
    <Route path = "ideas" component = { Ideas } onEnter={requireAuth} />
    <Route path = "ideas/new" component = { ManageIdeaPage } onEnter={requireAuth} />
    <Route path = "ideas/:id/edit" component = { IdeaEdit } onEnter={requireAuth}/>
    <Route path = "ideas/:id" component = { Idea } onEnter={requireAuth}/>
  </Route>
);

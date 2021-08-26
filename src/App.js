import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import SelectComponent from './components/SelectComponent';
import ListStudentsComponent from './components/students/ListStudentsComponent';
import CreateStudentsComponent from './components/students/CreateStudentsComponent';
import ViewStudentsComponent from './components/students/ViewStudentsComponent';
import ListGroupsComponent from './components/groups/ListGroupsComponent';
import CreateGroupsComponent from './components/groups/CreateGroupComponent';
import ViewGroupsComponent from './components/groups/ViewGroupsComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div>
                    <Switch> 
                          <Route path = "/" exact component = {SelectComponent}></Route>
                          <Route path = "/students" component = {ListStudentsComponent}></Route>
                          <Route path = "/upd-students/:id" component = {CreateStudentsComponent}></Route>
                          <Route path = "/view-students/:id" component = {ViewStudentsComponent}></Route>
                          <Route path = "/groups" component = {ListGroupsComponent}></Route>
                          <Route path = "/upd-groups/:id" component = {CreateGroupsComponent}></Route>
                          <Route path = "/view-groups/:id" component = {ViewGroupsComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;

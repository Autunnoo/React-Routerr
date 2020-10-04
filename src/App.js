import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link ,Redirect , NavLink } from "react-router-dom";

import Plate from "./plate/plate.js";
import Posts from "./post/postt.js";
import Home from "./home/home.js";
import Contacts from "./contacts/contakts.js";
import Header from "./header/header.js";





export const MENU = [{
  title: "Home",
  path: "/home",
  component: Home,
  exact: true
},
{
  title: "Contacts",
  path: "/contakts",
  component: Contacts,
  exact: true
},
{
  title: "Plate",
  path: "/plate",
  component: Plate,
  exact: true
},
{
  title: "Post`s",
  path: "/postt",
  component: Posts,
  exact: true
},]




class App extends React.Component {
  render(){
    return(
      <Router>
          <div>
            <Header />
            <Switch>
              {MENU.map(({path, component, exact = false}) => (
                <Route path={path} component={component}  exact={exact}/>
                
                ))}
              <Route path="/home" component={Home} />
              <Route path="/contakts" component={Contacts} />
              <Route path="/plate" component={Plate} />
              <Route path="/post" component={Posts} /> 
              
              <Route path="/" exact render = {() => <Redirect to="/home"/>}/>
            </Switch>
          </div>
      </Router>
    )
  }
}


export default App ;


import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layouts/Header';
//import IndexPage from './components/index.component';
import Recipes  from './pages/recipesPage';
import Home  from './pages/Home';
import Rooms  from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';





class App extends Component{
  render(){
  return (
    <Router>

        <Header/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/rooms/:slug" component={SingleRoom} />
        <Route path="/Recipes" component={Recipes} />
        <Route component={Error} />
        </Switch>
    </Router>
  );
 }
}
export default App;

import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

//imported modules
import Home from './components/Home';
import Menu from './components/Menu';
import Search from './components/Search';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Monkeys from './components/Monkeys';
import Elephants from './components/Elephants';
import NotFound from './components/NotFound';


//App sets up the routes and displays the menu

class App extends Component {

  render() {
    return (

<BrowserRouter>

<div className="App">
      <div className='App-header'>
          <h1 className='App-title'>Flickr Browser</h1>
      
          <NavLink to="/">Home</NavLink>
 </div>


 <Menu  />


 <Switch>
      <Route exact path="/" component = {Home}/>
      <Route  path="/search" component = {Search}/>
      <Route  path="/cats" component = {Cats}/>
      <Route  path="/dogs" component = {Dogs}/>
      <Route  path="/monkeys" component = {Monkeys}/>
      <Route  path="/elephants" component = {Elephants}/>
      <Route  component = {NotFound}/>
</Switch>

</div>
</BrowserRouter>

    );
  }

}

export default App;
import React, { Component } from 'react';
import './App.css';

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';


import Home from './components/Home';
import Menu from './components/Menu';
import Search from './components/Search';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Monkeys from './components/Monkeys';
import Elephants from './components/Elephants';



class App extends Component {


  constructor(){
    super();
  
          this.state={ 
            searchpics:[],
            isSearching: false,
            
            };
  }




  componentDidMount(Props){
    // this.handlePhotos(this.props.subject);

}
  componentWillReceiveProps(nextProps){

  }



  render() {
    return (

<BrowserRouter>

<div className="App">
      <div className='App-header'>
          <h1 className='App-title'>Flickr Browser</h1>
      
      <NavLink to="/Search">Search</NavLink>
 </div>


 <Menu  />


 <Switch>
      <Route exact path="/" component = {Home}/>
      <Route  path="/search" component = {Search}/>
      <Route  path="/cats" component = {Cats}/>
      <Route  path="/dogs" component = {Dogs}/>
      <Route  path="/monkeys" component = {Monkeys}/>
      <Route  path="/elephants" component = {Elephants}/>
</Switch>

</div>
</BrowserRouter>

    );
  }

}

export default App;
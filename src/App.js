import React, { Component } from 'react';
import './App.css';
import  Menu  from './components/Menu';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Monkeys from './components/Monkeys';
import Elephants from './components/Elephants';
import axios from 'axios';


class App extends Component {

constructor(){
  super();
this.state={ 
  pics:[]
 };
}



  render() {
    return (

      <BrowserRouter>
      <div className="App">
      <div className='App-header'>
      <h1 className='App-title'>Flickr Browser</h1>

      </div>
      {/* pass the function to menu*/}
      <Menu  />
     
  <Route exact path="/" render={ ()=>  <Home /> }/>
    {/*<Route exact path="/" component={Home} />*/}
    <Route path= "/Cats" render={()=><Cats />}/>
      <Route path= "/Dogs" component={Dogs}/>
      <Route path= "/Elephants" component={Elephants}/>
      <Route path= "/Monkeys" component={Monkeys}/>
      </div>
</BrowserRouter>
     
    );
  }


}

export default App;

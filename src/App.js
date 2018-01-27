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

componentDidMount(){
  axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f399a174c74917573c75f080c96162ac&tags=cats&per_page=40&format=json&nojsoncallback=1')
  
  .then(response =>{
    this.setState({
      pics: response.data.photos.photo
    });
  })
.catch(error =>{
console.log("Error loading ", error);
  });
}
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <div className='App-header'>
      <h1 className='App-title'>Flickr Browser</h1>

      </div>
      <Menu />
     
  <Route exact path="/" render={ ()=>  <Home data={this.state.pics}/> }/>
    {/*<Route exact path="/" component={Home} />*/}
    <Route path= "/Cats" render={()=><Cats/>}/>
      <Route path= "/Dogs" component={Dogs}/>
      <Route path= "/Elephants" component={Elephants}/>
      <Route path= "/Monkeys" component={Monkeys}/>
      </div>
</BrowserRouter>
     
    );
  }


}

export default App;

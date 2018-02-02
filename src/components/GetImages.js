import React, { Component } from 'react';
import axios from 'axios';
import LoadingIndicator from 'react-loading-indicator';
import Container from './Container';
import apiKey from '../config';







//makes a call to the flickr api to query for pictures

class GetImages extends Component{

constructor(props){
    super(props);
    this.state = {
        imgs: [],
        searchString: '',
        isLoading: true,
  
      
    }
}

//will make a query as soon as the module loads
componentDidMount(Props){
    this.fetchImages(this.props.subject);
}

//will make a query when props are updated
componentWillReceiveProps(nextProps){
    if (this.props.subject !== nextProps.subject ){
        this.fetchImages(nextProps.subject)
}
}



//fetch the data
fetchImages(term){
  
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${term}&per_page=40&format=json&nojsoncallback=1`)
  
    .then(response =>{
      this.setState({
       imgs: response.data.photos.photo,
       isLoading: false
      });
    })
  .catch(error =>{
      alert("Error Loading Page.");
    });
}

//will render a spinner while the data is loading, then the data
    render(){

return(
    
    this.state.isLoading ? <LoadingIndicator />: <Container title = {this.props.subject} data={this.state.imgs}/>
   
);
    }
}
export default GetImages;




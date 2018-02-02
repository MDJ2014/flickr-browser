import React, { Component } from 'react';

import axios from 'axios';


import Container from './Container';


class GetImages extends Component{

constructor(props){
    super(props);
    this.state = {
        imgs: [],
        searchString: ''
   
      
    }
}

componentDidMount(Props){
    this.fetchImages(this.props.subject);

}

componentWillReceiveProps(nextProps){
    if (this.props.subject !== nextProps.subject ){
        this.fetchImages(nextProps.subject)
}
}

fetchImages(term){
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5d81a756961e6961f1881c8cf7fa4c03&tags=${term}&per_page=40&format=json&nojsoncallback=1`)
  
    .then(response =>{
      this.setState({
       imgs: response.data.photos.photo
      });
    })
  .catch(error =>{
  console.log("Error loading ", error);
    });
}


    render(){

return(
<Container data={this.state.imgs}/>
);
    }
}
export default GetImages;
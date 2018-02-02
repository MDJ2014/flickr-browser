import React, { Component } from 'react';
import Pic from './Pic';
import axios from 'axios';



class PicList extends Component{

constructor(props){
    super(props);
    this.state = {
        imgs: [],
        searchString: '',
        isLoading: true
      
    }
}

componentDidMount(Props){
    this.fetchImages(this.props.subject);

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
<div className="photo-container">
<ul>
           {this.state.imgs.length > 0
						? this.state.imgs.map((image) =>
							<Pic
								farm={image.farm}
								server={image.server}
								secret={image.secret}
								id={image.id}
								key={image.id}
							/>)
						: <div>Not Found</div>
				}
          </ul>
</div>
);
    }
}
export default PicList;
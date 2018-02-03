import React , {Component} from 'react';
import GetImages from './GetImages';
import debounce from 'throttle-debounce';





//searces for flickr images

class Search extends Component{

  constructor(){
    super();
    
    this.state = {
      searchText: 'search'
  
     }
   }

  //set the state of the term to be searched for 
onSearchChange = e =>{
  var value=e.target.value;
  setTimeout(function() { this.setState({searchText: value,
    }); }.bind(this), 3500);
}


//begin the search when the submit button is clicked using the search term stored in state
handleSubmit= e =>{
  e.preventDefault();
//call this function to start the search
this.createSearchResults(this.state.searchText)

 e.currentTarget.reset();
}

createSearchResults(value){
//returns the GetImages module with the value of the search
    return <GetImages subject={value}/>
} 


//renders the search form
render(){

  return(
    <div>
   
<form className="search-form" onSubmit ={this.handleSubmit}>
        <input type="search" name="search" placeholder="Search Flickr" required="" onChange={this.onSearchChange}/>
        <button type="submit" className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
        </button>
  </form>

  
{/*calls the function to create the module that will fetch the data*/}
{this.createSearchResults(this.state.searchText)}
  
  </div>
  );
}

} 

export default Search;
import React from 'react';

import PicList from './PicList';
 
  const Home = props =>{

const data= props.data;


    return (
      <div>
      <div className="home">
        <h2>Welcome to Flickr Browser</h2>
        <p>Click on an animal button to see photos of that animal  or click the search button to do a unique search.</p>
      </div>

           
      <PicList subject ="trains"/>
          
      </div>
    )
  }


export default Home;
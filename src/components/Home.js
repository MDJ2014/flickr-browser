import React from 'react';



import GetImages from './GetImages';

 //a welcome page to begin with. Shows random pictures and gives some friendly instructions.
 
  const Home = props =>{

    return (
      <div>
      <div className="home">
        <h2>Welcome to Flickr Browser</h2>
        <p>Click on an animal button to see photos of that animal  or click the search button to do a unique search.</p>
      </div>

           
      <GetImages subject ="random photos"/>
          
      </div>
    )
  }


export default Home;
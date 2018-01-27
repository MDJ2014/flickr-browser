import React from 'react';
import RandomPic from './RandomPic';
 
  const Home = props =>{

const results= props.data;
let randImages;

// randImages = results.map( image => <RandomPic farm={image.farm} server={image.server} id={image.id} secret={image.secret} key={image.id} />)
//randImages=

    return (
      <div>
      <div className="home">
        <h2>Welcome to Flickr Browser</h2>
        <p>Click on an animal button to do a quick search or click the search button to do a unique search.</p>
    
      </div>
      <div className="photo-container">
      <ul>
           {results.length > 0
						? results.map((photo) =>
							<RandomPic
								farm={photo.farm}
								server={photo.server}
								secret={photo.secret}
								id={photo.id}
								key={photo.id}
							/>)
						: <div>Not Found</div>
				}
          </ul>
          </div>
      </div>
    )
  }


export default Home;
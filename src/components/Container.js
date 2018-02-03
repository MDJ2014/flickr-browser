import React from 'react';
import Pic from './Pic';
import NoMatchesFound from './NoMatchesFound';


//container for displaying the li of each image using the Pic module.  

const Container =(props)=>{

const data = props.data;

return (

<div className="photo-container">
<h2>{props.title}</h2>
<ul>
           {data.length > 0
						? data.map((image) =>
							<Pic
								farm={image.farm}
								server={image.server}
								secret={image.secret}
								id={image.id}
								key={image.id}
							/>)
						: <div><NoMatchesFound/></div>
				}
          </ul>
</div>
);
            }
 export default Container;           
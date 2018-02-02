import React from 'react';
import Pic from './Pic';

const Container =(props)=>{

const data = props.data;

return (

<div className="photo-container">
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
						: <div>Not Found</div>
				}
          </ul>
</div>
);
            }
 export default Container;           
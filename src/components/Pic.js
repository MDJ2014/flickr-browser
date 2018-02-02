import React from 'react';

//this formats each pictures url and displays it in an li tag
const Pic = props =>(

<li>
    <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt=""/>
  
</li>

);


export default Pic;